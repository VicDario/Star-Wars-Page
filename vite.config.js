import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');

function getAliases() {
  return {
    '@components': path.resolve(__dirname, './src/components'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@context': path.resolve(__dirname, './src/context'),
    '@hooks': path.resolve(__dirname, './src/hooks'),
    '@styles': path.resolve(__dirname, './src/styles'),
    '@assets': path.resolve(__dirname, './src/assets'),
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve' && mode === 'development') {
    return {
      // dev specific config
      plugins: [react()],
      resolve: {
        alias: getAliases(),
      },
    };
  } else {
    // command === 'build' && mode === 'production'
    return {
      // build specific config
      plugins: [react(), splitVendorChunkPlugin()],
      build: {
        outDir: 'build',
        chunkSizeWarningLimit: 1000,
        minify: 'esbuild',
      },
      resolve: {
        alias: getAliases(),
      },
    };
  }
});
