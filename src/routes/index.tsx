import { Motion } from '@motionone/solid'
import logo from '@assets/logo.png'
import OutterLink from '@components/outterlink'
import burn from '@assets/burn.png'
import { mainFeatures } from 'src/content/features'
import { codeExamples } from 'src/content/examples'
import Layout from 'src/layout/page'
import Stars from '@components/stars'
import { Code } from '@components/code'
import { Sponsor } from '@components/sponsors'

export default function () {
  return (
    <Layout>
      <Stars numStars={30} />
      <div class="flex pt-4 sm:pt-10 flex-col sm:flex-row justify-center items-center sm:h-[70vh] bg-[#202124]">
        <div class="max-w-[650px]">
          <img src={burn} />
        </div>
        <div class="mb-5 sm:pr-28">
          <h1>
            <img class="w-56" src={logo} />
          </h1>
          <h2 class="text-red-300 font-bold text-normal w-full text-center">
            Burn Unstoppable Rusty Neurons
          </h2>
        </div>
      </div>
      <h2 class="bg-[#202124] w-full text-center py-10"></h2>
      <div class="bg-gradient-to-b flex justify-center from-[#202124] to-gray-800">
        <div class="grid sm:grid-cols-3 sm:gap-32">
          <For
            each={mainFeatures}
            children={(feature) => (
              <div class="flex justify-center cursor-default text-gray-300">
                <div class="p-6 flex space-y-5 flex-col items-center w-[200px] text-center hover:bg-gray-50 hover:text-[#202124] hover:shadow-2xl hover:scale-105 rounded-lg transition-all">
                  <div class="text-5xl text-[#F34918]">{feature.icon}</div>
                  <h3 class="text-2xl font-bold">{feature.title}</h3>
                  <p class="text-lg">{feature.description}</p>
                </div>
              </div>
            )}
          />
        </div>
      </div>
      <div class="flex justify-center bg-gray-800 w-full px-10">
        <div>
          <h2 class="w-full text-center py-10 pt-20">
            <span class="font-black uppercase text-[#d1d5db] p-1 text-5xl">
              Code Snippets
            </span>
          </h2>
          <div class="max-w-7xl flex-row justify-center space-y-10 sm:space-y-32 pb-14 overflow-x-hidden">
            <For
              each={codeExamples}
              children={(example, i) => (
                <Motion.div
                  initial={{ opacity: 0, x: (i() % 2 === 0 ? 1 : -1) * 50 }}
                  inView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div
                    class={`flex flex-col-reverse p-4 md:space-x-10 items-center box-border ${
                      i() % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                    }`}
                  >
                    <div class="w-full flex justify-center">
                      <Code
                        class="w-80 md:w-full"
                        lang="rust"
                        code={example.code}
                      />
                    </div>
                    <div>
                      <h3 class="font-black uppercase text-[#F34918] text-4xl">
                        {example.title}
                      </h3>
                      <p class="text-gray-50">{example.description}</p>
                    </div>
                  </div>
                </Motion.div>
              )}
            />
          </div>
        </div>
      </div>
      <div class="w-full text-center overflow-x-hidden">
        <Motion.div
          initial={{ opacity: 0, x: 50 }}
          inView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <span class="font-black uppercase text-[#d1d5db] pb-6 pt-10 text-5xl">
            Sponsors
          </span>
          <div class="text-red-300 font-bold text-xl">
            Special thanks to premium sponsors !
          </div>
          <div class="w-full flex justify-center pt-10">
            <Sponsor name="premAI-io" />
          </div>
          <div class="text-[#d1d5db] text-lg pt-6">
            For the list of all sponsors past and present as well as becoming a
            sponsor, see the
            <OutterLink src="https://github.com/sponsors/nathanielsimard">
              <span class="text-[#67b6e0] pl-1">sponsor profile.</span>
            </OutterLink>
          </div>
        </Motion.div>
      </div>
    </Layout>
  )
}
