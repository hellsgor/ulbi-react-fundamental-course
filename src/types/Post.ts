import { z } from 'zod';

export const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});
export type Post = z.infer<typeof PostSchema>;

export const PostListSchema = z.array(PostSchema);
export type PostList = z.infer<typeof PostListSchema>;
