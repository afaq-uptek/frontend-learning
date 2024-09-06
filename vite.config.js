// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        about: '/shop.html',
        contact: '/product.html',
        // Add other pages as needed
      },
    },
  },
});
