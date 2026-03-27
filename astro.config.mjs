import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
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

    plugins: [tailwindcss()],
  },
});