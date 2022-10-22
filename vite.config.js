/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
// import { resolve } from 'path';
// https://github.com/vitejs/vite/issues/9113#issuecomment-1184319357

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      root: 'src',
      // para hacer un deploy, configura el base con el nombre/url de tu repo
      // ejemplo
      // base: '/social-network-vite/', https://vitejs.dev/guide/static-deploy.html#github-pages
      build: {
        minify: false,
        rollupOptions: {
          output: {
            dir: './dist',
          },
        },
        // sourcemap: true,
      },
    };
  }
  return {};
});
