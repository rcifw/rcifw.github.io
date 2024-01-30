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
  head: [['link', { rel: 'icon', href: '/images/icon.png' }]],
  theme: defaultTheme({
    logo: '/images/washu_logo.png',
    repo: 'rcifw/rcifw.github.io',
    repoLabel: 'Contribute!',
    docsBranch: 'vuepress',
    docsDir: 'docs',
    navbar: [
      {
        text: 'Software',
        children: [
          '/software/afni.md',
          '/software/amber.md',
          '/software/ants.md',
          '/software/apptainer.md',
          '/software/cmake.md',
          '/software/cuda.md',
          '/software/cudnn.md',
          '/software/dcmtk.md',
          '/software/dramms.md',
          '/software/elastix.md',
          '/software/ffmpeg.md',
          '/software/freesurfer.md',
          '/software/fsl.md',
          '/software/gate.md',
          '/software/gcc.md',
          '/software/geant4.md',
          '/software/go.md',
          '/software/greedy.md',
          '/software/intel.md',
          '/software/itk-snap.md',
          '/software/jupyter-notebook.md',
          '/software/matlabcompilerruntime.md',
          '/software/matlabinteractive.md',
          '/software/matlabparallelserver.md',
          '/software/moose.md',
          '/software/mpich.md',
          '/software/mricron.md',
          '/software/mvapich2.md',
          '/software/node.js.md',
          '/software/octave.md',
          '/software/openmpi.md',
          '/software/openslide.md',
          '/software/pandoc.md',
          '/software/perl.md',
          '/software/plink.md',
          '/software/python.md',
          '/software/r.md',
          '/software/root.md',
          '/software/singularity.md',
          '/software/visual-studio-code.md',
          '/software/vnc-remotedesktop.md',
          '/software/workbench.md',
        ],
      },
    ],
    sidebar: [
      {
        text: 'Account',
        link: '/apply/',
        activeMatch: '^/apply/',
      },
      {
        text: 'Connect',
        link: '/connect/',
        activeMatch: '^/connect/',
      },
      {
        text: 'FAQs for Accounting',
        link: '/rates/',
        activeMatch: '^/rates/',
      },
      {
        text: 'Hardware',
        link: '/computers/',
        activeMatch: '^/computers/',
      },
      {
        text: 'RCIF',
        link: '/',
      },
      {
        text: 'RCIF Datasets',
        link: '/datasets/',
        activeMatch: '^/datasets/',
      },
      {
        text: 'Slurm Basics',
        link: '/slurm/',
        activeMatch: '^/slurm/',
      },
      {
        text: 'Software',
        link: '/software/',
        activeMatch: '^/software/',
      },
      {
        text: 'Storage Systems',
        link: '/storage/',
        activeMatch: '^/storage/',
      },
      {
        text: 'Training and Support',
        link: '/support/',
        activeMatch: '^/support/',
      },
    ],
    themePlugins: {
      git: false,
    }
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
