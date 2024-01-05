import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: {
    title: z.string().min(1),
    date: z.date().optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
  },
});

export const collections = {
  postCollection,
};
