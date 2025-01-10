import { defineConfig, configDefaults } from 'vitest/config';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/*.test.ts', '**/*.test.tsx'],
    exclude: [...configDefaults.exclude, './src/App.tsx', './src/main.tsx'],
    setupFiles: ["./setupTests.ts"],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@morpion': path.resolve(__dirname, './src/domains/Morpion'),
      '@pages': path.resolve(__dirname, './src/pages')
    }
  },
});
