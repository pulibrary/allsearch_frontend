import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'happy-dom',
    include: ['src/components/*.test.ts']
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.runtime.esm-bundler.js'
    }
  }
});
