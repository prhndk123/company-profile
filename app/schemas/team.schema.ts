import { z } from "zod";

export const TeamSchema = z.object({
  objectId: z.string(),
  name: z.string(),
  position: z.string(),
  image: z.string().url().optional(),
});

export const TeamListSchema = z.array(TeamSchema);

export type Teams = z.infer<typeof TeamSchema>;
