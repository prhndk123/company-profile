import { z } from "zod";

export const LeadershipSchema = z.object({
  objectId: z.string(),
  name: z.string(),
  role: z.string(),
  bio: z.string().nullable(),
  image: z.string().url().optional(),
});

export const LeadershipListSchema = z.array(LeadershipSchema);

export type Leadership = z.infer<typeof LeadershipSchema>;
