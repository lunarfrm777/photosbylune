import { defineConfig } from 'astro/config';
// astro.config.mjs

export default defineConfig({
  vite: {
    server: {
      fs: {
        allow: [
          '.', 
          'C:/Users/dreym/node_modules',
        ],
      },
    },
  },
});
