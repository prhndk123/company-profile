import { create } from "zustand";
import { BlogPost, CreateBlogForm } from "~/schemas/blog.schema";
import { blogService } from "~/services/blog.service";

interface BlogState {
  posts: BlogPost[];
  isLoading: boolean;
  fetchPosts: () => Promise<void>;
  getPostById: (id: number) => BlogPost | undefined;
  createPost: (data: CreateBlogForm) => Promise<void>;
}

export const useBlogStore = create<BlogState>((set, get) => ({
  posts: [],
  isLoading: false,

  async fetchPosts() {
    set({ isLoading: true });
    try {
      const posts = await blogService.getPosts();
      set({ posts, isLoading: false });
    } catch (e) {
      console.error(e);
      set({ isLoading: false });
    }
  },

  getPostById(id) {
    return get().posts.find((p) => p.id === id);
  },

  async createPost(data) {
    const newPost = await blogService.createPost({
      ...data,
      publishDate: Date.now(),
    });

    set((state) => ({
      posts: [newPost, ...state.posts],
    }));
  },
}));
