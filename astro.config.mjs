import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://plandemicspace.my.id',
  trailingSlash: 'never',
  integrations: [sitemap()],
});