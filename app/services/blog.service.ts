import { axiosInstance } from "~/lib/axios";
import {
  BlogListSchema,
  BlogPostSchema,
  CreateBlog,
  CreateBlogForm,
  CreateBlogSchema,
} from "~/schemas/blog.schema";

const TABLE = "/api/data/BlogPost";

export const blogService = {
  async getPosts() {
    const res = await axiosInstance.get(TABLE);
    return BlogListSchema.parse(res.data);
  },

  async getLastId(): Promise<number> {
    const res = await axiosInstance.get(`${TABLE}?sortBy=id desc&pageSize=1`);
    console.log(res);

    if (!res.data.length) return 0;
    return res.data[0].id;
  },

  async createPost(payload: Omit<CreateBlog, "id">) {
    // 🔥 Ambil ID terakhir
    const lastId = await this.getLastId();
    const nextId = lastId + 1;

    const payloadWithId = {
      ...payload,
      id: nextId,
    };

    console.log("FINAL PAYLOAD TO BACKEND:", payloadWithId);

    // ✅ Validasi
    const validated = CreateBlogSchema.parse(payloadWithId);

    // ✅ Kirim ke Backendless
    const res = await axiosInstance.post(TABLE, validated);

    return BlogPostSchema.parse(res.data);
  },
};
