import { defineConfig } from 'astro/config';
import path from 'path';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  }
});