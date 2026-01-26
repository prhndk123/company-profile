import { axiosInstance } from "~/lib/axios";
import { LeadershipListSchema, Leadership } from "~/schemas/leadership.schema";

export const LeadershipService = {
  async getAll(): Promise<Leadership[]> {
    const res = await axiosInstance.get("/api/data/Leadership?sortBy=id");
    return LeadershipListSchema.parse(res.data);
  },
};
