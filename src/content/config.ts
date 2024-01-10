import { defineCollection, z } from 'astro:content';

const postCollection = defineCollection({
  schema: z.object({
    title: z.string().min(1),
    date: z.date().optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    description: z.string().optional(),
    author: z
      .object({
        name: z.string(),
        avatar: z.string(),
        url: z.string().url(),
      })
      .optional(),
  }),
});

export const collections = {
  posts: postCollection,
};
