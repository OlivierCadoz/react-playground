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
    exclude: [...configDefaults.exclude],
    setupFiles: ['./setupTests.ts'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@morpion': path.resolve(__dirname, './src/domains/Morpion'),
      '@sudoku': path.resolve(__dirname, './src/domains/Sudoku'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@tests': path.resolve(__dirname, './src/tests'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@models': path.resolve(__dirname, './src/models'),
    },
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        './src/main.tsx',
        '**/models/*',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.d.ts',
      ],
      provider: 'istanbul',
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
