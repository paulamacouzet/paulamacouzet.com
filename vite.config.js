import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        weddings: resolve(__dirname, 'weddings/index.html'),
        gallery: resolve(__dirname, 'weddings/gallery/index.html'),
        websites: resolve(__dirname, 'weddings/websites/index.html'),
        inquire: resolve(__dirname, 'weddings/inquire/index.html')
      }
    }
  }
});
