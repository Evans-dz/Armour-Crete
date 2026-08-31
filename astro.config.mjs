import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.armour-crete.com',
  server: { port: 4179 },
  build: { inlineStylesheets: 'auto' },
});
