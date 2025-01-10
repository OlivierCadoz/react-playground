import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@morpion': path.resolve(__dirname, './src/domains/Morpion'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@tests': path.resolve(__dirname, './src/tests'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@models': path.resolve(__dirname, './src/models'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
});
