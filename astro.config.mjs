import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kaisa-tarot-astro.vercel.app',
  publicDir: './website-assets/public',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
