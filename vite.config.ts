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
      '@morpion': path.resolve(__dirname, './src/domains/Morpion')
    },
  },
});
