import { z } from 'zod';
import { PostSchema } from './Post';

export const CommentSchema = z.object({
  postId: PostSchema.pick({ id: true }).shape.id,
  id: z.number(),
  name: z.string(),
  email: z.string(),
  body: z.string(),
});
export type Comment = z.infer<typeof CommentSchema>;

export const CommentListSchema = z.array(CommentSchema);
export type CommentListType = z.infer<typeof CommentListSchema>;
