import { defineCollection, z } from 'astro:content';

const tips = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    // Tanggal rilis. Boleh ditulis `publishDate` (sama seperti di proyek lain) atau `pubDate` — keduanya sama.
    // Artikel dengan tanggal di masa depan belum tayang sampai build pada/setelah tanggal itu (lihat src/lib/tips.ts).
    pubDate: z.coerce.date().optional(),
    publishDate: z.coerce.date().optional(),
    // Isi kalau artikel di-update substansial (dipakai untuk dateModified di schema Article)
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    // Layanan yang paling relevan untuk blok CTA di akhir artikel.
    // Kalau kosong, otomatis diturunkan dari kategori (lihat [...slug].astro).
    service: z.enum(['laptop', 'printer', 'hp', 'jual-beli']).optional(),
    // Slug artikel yang ingin ditampilkan lebih dulu di "Baca juga" (opsional).
    related: z.array(z.string()).optional(),
    // Paksa tampilkan/sembunyikan disclosure afiliasi. Kalau kosong, otomatis
    // muncul bila isi artikel mengandung link s.shopee.co.id.
    affiliate: z.boolean().optional(),
  }).transform((d, ctx) => {
    const date = d.publishDate ?? d.pubDate;
    if (!date) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: 'Isi publishDate (atau pubDate) di frontmatter.' });
      return z.NEVER;
    }
    return { ...d, pubDate: date };
  }),
});

export const collections = { tips };
