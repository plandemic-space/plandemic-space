import { getCollection } from 'astro:content';

/**
 * Artikel Tips yang sudah boleh tayang.
 *
 * Artikel dengan `pubDate` di masa depan TIDAK ikut di-build: tidak muncul di daftar Tips, beranda,
 * "Baca juga", maupun sitemap, dan URL-nya belum ada. Begitu build berikutnya berjalan setelah tanggal
 * tersebut, artikel otomatis tayang. Build harian dipicu oleh .github/workflows/scheduled-deploy.yml.
 *
 * Isi `pubDate` dengan tanggal rilis yang sebenarnya, jangan mundur ke tanggal yang sudah lewat.
 * Tanggal "2026-09-22" berarti tayang mulai 22 Sep 2026 pukul 07.00 WIB (00.00 UTC).
 *
 * Untuk uji lokal: PUBLISH_AS_OF=2026-09-24T12:00:00Z npm run build  (simulasi tanggal build)
 * Saat `npm run dev`, semua artikel tetap tampil supaya mudah dicek.
 */
export async function getPublishedTips() {
  const all = await getCollection('tips');
  if (import.meta.env.DEV) return all;
  const asOf = process.env.PUBLISH_AS_OF ? Date.parse(process.env.PUBLISH_AS_OF) : Date.now();
  return all.filter((t) => t.data.pubDate.valueOf() <= asOf);
}
