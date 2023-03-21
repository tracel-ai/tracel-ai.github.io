type FooterSection = {
  name: string
  items: FooterItem[]
}
type FooterItem = {
  label: string
  href: string
  icon?: string
  iconSize?: string
}

export const footerSections: FooterSection[] = [
  {
    name: 'examples',
    items: [
      { label: 'MNIST', href: 'https://github.com/burn-rs/burn/tree/main/examples/mnist' },
      { label: 'Text Classification', href: 'https://github.com/burn-rs/burn/tree/main/examples/text-classification' },
    ],
  },

  {
    name: 'community',
    items: [
      { label: 'Github', href: 'https://github.com/burn-rs/burn', icon: 'i-mdi-github' },
      { label: 'Discord', href: 'https://discord.gg/uPEBbYYDB6', icon: 'i-mdi-discord' },
    ],
  },
  {
    name: 'about',
    items: [
      { label: 'Documentation', href: 'https://docs.rs/burn' },
      { label: 'Crates.io', href: 'https://crates.io/crates/burn' },
      { label: 'License', href: 'https://github.com/burn-rs/burn#license' },
    ],
  },
]