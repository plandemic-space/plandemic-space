import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Semua link afiliasi Shopee di artikel Tips otomatis dapat rel="sponsored nofollow noopener"
// dan target="_blank" — sesuai panduan Google untuk link afiliasi. Tidak perlu diubah manual per artikel.
function rehypeAffiliateLinks() {
  // Link yang ditulis sebagai HTML mentah di markdown (<a href="...">) lewat sebagai node 'raw'
  const rawAnchor = /<a\s+href="(https:\/\/s\.shopee\.co\.id[^"]*)"[^>]*>/g;
  const walk = (node) => {
    if (node.type === 'raw' && typeof node.value === 'string' && node.value.includes('s.shopee.co.id')) {
      node.value = node.value.replace(
        rawAnchor,
        '<a href="$1" target="_blank" rel="sponsored nofollow noopener">'
      );
    }
    if (node.type === 'element' && node.tagName === 'a') {
      const href = String(node.properties?.href ?? '');
      if (href.includes('s.shopee.co.id')) {
        node.properties.rel = ['sponsored', 'nofollow', 'noopener'];
        node.properties.target = '_blank';
      }
    }
    if (node.children) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site: 'https://plandemicspace.my.id',
  trailingSlash: 'never',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeAffiliateLinks],
  },
});
