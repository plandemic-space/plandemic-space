import { defineCollection, z } from 'astro:content';

const tips = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    pubDate: z.coerce.date(),
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
  }),
});

export const collections = { tips };
