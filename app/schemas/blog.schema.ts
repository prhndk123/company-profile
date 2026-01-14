import { z } from "zod";

/** ===============================
 * RESPONSE DARI BACKENDLESS
 * =============================== */
export const BlogPostSchema = z.object({
  id: z.number(),
  objectId: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  author: z.string(),
  category: z.string(),
  publishDate: z.number(),
  imageUrl: z.string().optional(),
});

/** LIST */
export const BlogListSchema = z.array(BlogPostSchema);

/** ===============================
 * FORM (UI ONLY – TANPA ID)
 * =============================== */
export const CreateBlogFormSchema = z.object({
  title: z.string().min(3),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  author: z.string(),
  category: z.string(),
  imageUrl: z.string().optional(),
  publishDate: z.number(),
});

/** ===============================
 * PAYLOAD CREATE (KE BACKEND)
 * =============================== */
export const CreateBlogSchema = z.object({
  id: z.number(),
  title: z.string().min(3),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  author: z.string(),
  category: z.string(),
  imageUrl: z.string().optional(),
  publishDate: z.number(),
});

/** TYPES */
export type BlogPost = z.infer<typeof BlogPostSchema>;
export type CreateBlogForm = z.infer<typeof CreateBlogFormSchema>;
export type CreateBlog = z.infer<typeof CreateBlogSchema>;
