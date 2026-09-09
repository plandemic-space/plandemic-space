import { defineCollection, z } from 'astro:content';

const tips = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    pubDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    description: z.string(),
  }),
});

export const collections = { tips };
