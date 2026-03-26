import { defineConfig } from 'astro/config';

export default defineConfig({
  experimental: {
    disableDevTools: true, // ✅ top-level, disables the Astro dev toolbar
  },
  vite: {
    server: {
      fs: {
        allow: [
          '.', // allow current project root
          'C:/Users/dreym/node_modules', // allow global node_modules if needed
        ],
      },
    },
  },
});
