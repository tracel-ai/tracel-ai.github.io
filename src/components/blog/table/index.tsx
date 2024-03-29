import type { JSXElement, Component } from 'solid-js'

type TableProps = {
  title: JSXElement
  description?: JSXElement
  columnNames: JSXElement[]
  entries: TableEntriesProps[]
}

type TableEntriesProps = {
  title?: JSXElement
  values?: JSXElement[]
  separator?: boolean
}

export const Table: Component<TableProps> = (props) => {
  let description: JSXElement = <div />

  if (props.description) {
    description = (
      <div class="py-2 px-6 w-full text-center italic">{props.description}</div>
    )
  }

  const numColumns = props.entries.map((entry) => {
    if (entry.values) {
      return entry.values.length
    }
    return 0
  })
  const showTitles =
    props.entries.find((entry) => entry.title !== undefined) !== undefined

  const maxNumColumns = Math.max(...numColumns)

  return (
    <div class="px-6 pb-8 w-full overflow-auto">
      <div class="py-2 px-6 w-full text-center font-bold text-xl">
        {props.title}
      </div>
      <table class="w-full">
        <thead>
          <tr>
            <For
              each={props.columnNames}
              children={(value) => (
                <th class="text-center p-2 border border-[#586473] bg-[#1f2835]">
                  {value}
                </th>
              )}
            />
          </tr>
        </thead>
        <tbody>
          <For
            each={props.entries}
            children={(entry) =>
              entry2element(entry, maxNumColumns, showTitles)
            }
          />
        </tbody>
      </table>
      {description}
    </div>
  )
}

const entry2element = (
  entry: TableEntriesProps,
  maxNumColumns: number,
  showTitles: boolean
): JSXElement => {
  const title = (
    <td class="text-center p-2 border border-[#586473]">{entry.title}</td>
  )
  const values = (
    <For
      each={entry.values}
      children={(value) => (
        <td class="text-center p-2 border border-[#586473]">{value}</td>
      )}
    />
  )
  if (entry.values && showTitles) {
    return (
      <tr>
        {title}
        {values}
      </tr>
    )
  }

  if (entry.values) {
    return <tr>{values}</tr>
  }

  let numColumns = maxNumColumns;

  if (showTitles) {
    numColumns += 1;
  }

  return (
    <tr class="border border-[#586473]">
      <For
        each={[...Array(maxNumColumns + 1).keys()]}
        children={() => <td class="p-[6px] bg-[#1f2835] " />}
      />
    </tr>
  )
}
