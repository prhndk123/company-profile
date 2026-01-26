import { axiosInstance } from "~/lib/axios";
import {
  BlogListSchema,
  BlogPostSchema,
  CreateBlogSchema,
  CreateBlog,
} from "~/schemas/blog.schema";

const TABLE = "/api/data/BlogPost";

/* GET LAST ID */
const getLastId = async (): Promise<number> => {
  const res = await axiosInstance.get(`${TABLE}?sortBy=id desc&pageSize=1`);

  if (!res.data?.length) return 0;
  return res.data[0].id;
};

/* CREATE POST */
const createPost = async (payload: Omit<CreateBlog, "id">) => {
  const lastId = await getLastId();
  const nextId = lastId + 1;

  const payloadWithId = {
    ...payload,
    id: nextId,
  };

  console.log("FINAL PAYLOAD TO BACKEND:", payloadWithId);

  const validated = CreateBlogSchema.parse(payloadWithId);

  const res = await axiosInstance.post(TABLE, validated);

  return BlogPostSchema.parse(res.data);
};

/* GET POSTS */
const getPosts = async () => {
  const res = await axiosInstance.get(`${TABLE}?sortBy=%60created%60%20desc`);
  return BlogListSchema.parse(res.data);
};

export const blogService = {
  getPosts,
  createPost,
};
