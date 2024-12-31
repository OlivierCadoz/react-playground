import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['**/*.test.ts', '**/*.test.tsx'],
    exclude: [...configDefaults.exclude, '**/src/App.tsx', '**/src/main.tsx'],
    setupFiles: ["./setupTests.ts"],
  },
});
