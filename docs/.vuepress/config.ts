import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import viteBundler from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'RCIF',
  description:
    'The Research Computing and Informatics Facility (RCIF) ' +
    'supports human imaging researchers across all campuses of ' +
    'Washington University in St. Louis.',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: defaultTheme({
    repo: 'rcifw/rcifw.github.io',
    docsDir: 'docs',
    navbar: [
      {
        text: 'Account',
        link: '/getting-started/applying-for-a-user-account.md',
      },
      {
        text: 'Connect',
        link: '/getting-started/connect-to-login-nodes.md',
      },
      {
        text: 'FAQs for Accounting',
        link: '/getting-started/faqs-accounting.md',
      },
      {
        text: 'Hardware',
        link: '/system-info/hpc-hardware.md',
      },
      {
        text: 'RCIF',
        link: '/',
      },
      {
        text: 'RCIF Datasets',
        link: '/getting-started/rcif-shared-datasets.md',
      },
      {
        text: 'Slurm Basics',
        link: '/getting-started/slurm-basics.md',
      },
      {
        text: 'Software',
        children: [
          {
            text: 'See Full List',
            link: '/software/software.md',
          },
          '/software/apptainer.md',
          '/software/jupyter-notebook.md',
        ],
      },
      {
        text: 'Storage Systems',
        link: '/getting-started/storage-systems.md',
      },
      {
        text: 'Training and Support',
        link: '/getting-started/training-and-support.md',
      },
    ],
    sidebar: [
      {
        text: 'Account',
        link: '/getting-started/applying-for-a-user-account.md',
      },
      {
        text: 'Connect',
        link: '/getting-started/connect-to-login-nodes.md',
      },
      {
        text: 'FAQs for Accounting',
        link: '/getting-started/faqs-accounting.md',
      },
      {
        text: 'Hardware',
        link: '/system-info/hpc-hardware.md',
      },
      {
        text: 'RCIF',
        link: '/',
      },
      {
        text: 'RCIF Datasets',
        link: '/getting-started/rcif-shared-datasets.md',
      },
      {
        text: 'Slurm Basics',
        link: '/getting-started/slurm-basics.md',
      },
      {
        text: 'Software',
        link: '/software/software.md',
        collapsible: true,
        children: [
          {
            text: 'See Full List',
            link: '/software/software.md',
          },
          '/software/apptainer.md',
          '/software/jupyter-notebook.md',
        ],
      },
      {
        text: 'Storage Systems',
        link: '/getting-started/storage-systems.md',
      },
      {
        text: 'Training and Support',
        link: '/getting-started/training-and-support.md',
      },
    ],
  }),
  bundler: viteBundler(),
  plugins: [
    searchPlugin({
      hotKeys: [
        's',
        '/',
        '?',
        {
          key: 'k',
          ctrl: true,
        },
      ],
      maxSuggestions: 7,
      // To add more fields to the index, (Other than title + headers) you should extend the `SearchIndex` type:
      // https://v2.vuepress.vuejs.org/reference/plugin/search.html#getextrafields
    }),
  ],
})
