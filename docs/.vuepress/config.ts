import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'RCIF',
  description: 'The Research Computing and Informatics Facility (RCIF) ' +
      'supports human imaging researchers across all campuses of ' +
      'Washington University in St. Louis.',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
})
