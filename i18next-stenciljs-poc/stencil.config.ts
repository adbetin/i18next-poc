import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'i18next-stenciljs-poc',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: '/src/*.json', dest: "build/i18n" },
      ]
    },
  ],
};
