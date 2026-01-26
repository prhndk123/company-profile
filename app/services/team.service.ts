import { axiosInstance } from "~/lib/axios";
import { TeamListSchema, Teams } from "~/schemas/team.schema";

export const teamService = {
  async getTeams(): Promise<Teams[]> {
    const res = await axiosInstance.get("/api/data/teams?sortBy=id");
    return TeamListSchema.parse(res.data);
  },
};
