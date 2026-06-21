import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  publicDir: './website-assets/public',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
