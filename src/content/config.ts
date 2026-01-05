import { defineCollection, z } from "astro:content";

const concours = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
});

const actualites = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
    newsletter: z.boolean().optional(),
  }),
});

export const collections = { concours, actualites };


