import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const cheatsheet = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const questions = defineCollection({
  schema: z.object({
    title: z.string(),
    level: z.enum(["basic", "intermediate", "advanced"]),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { cheatsheet, blog, questions };
