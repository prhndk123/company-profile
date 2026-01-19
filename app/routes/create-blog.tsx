import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router";
import { blogService } from "~/services/blog.service";
import { useAuthStore } from "~/store/auth.store";

import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/hooks/use-toast";
import { CreateBlogFormSchema } from "~/schemas/blog.schema";

const categories = ["Manufacturing", "Innovation", "Sustainability"];

export const clientLoader = () => {
  const user = useAuthStore.getState().user;
  if (!user) return redirect("/");
};
export default function CreateBlog() {
  const { isAuthenticated, user } = useAuthStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    category: "Manufacturing",
    imageUrl: "",
    content: "",
  });

  /** ===============================
   * MUTATION
   * =============================== */
  const { mutateAsync, isPending } = useMutation({
    mutationFn: blogService.createPost,
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your blog post has been published.",
      });

      // 🔥 REFRESH BLOG LIST
      queryClient.invalidateQueries({ queryKey: ["blogs"] });

      navigate("/blog");
    },
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      title: form.title.trim(),
      excerpt: form.excerpt.trim(),
      content: form.content.trim(),
      category: form.category,
      imageUrl: form.imageUrl || undefined,
      author: user!.name,
      publishDate: Date.now(),
    };

    const parsed = CreateBlogFormSchema.safeParse(payload);
    if (!parsed.success) {
      alert("Please fill all required fields correctly.");
      return;
    }

    await mutateAsync(parsed.data);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-hero">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <button
              onClick={() => navigate("/blog")}
              className="inline-flex items-center gap-2 text-background/80 hover:text-background mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>

            <h1 className="text-4xl md:text-5xl font-heading font-bold text-background leading-tight mb-4">
              Create New Article
            </h1>
            <p className="text-lg text-background/80">
              Share your insights and stories with the TMMIN community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={submit}
            className="bg-card p-8 rounded-lg shadow-lg border border-border"
          >
            <div className="space-y-6">
              {/* TITLE */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base font-medium">
                  Article Title <span className="text-primary">*</span>
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter a compelling title..."
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="text-lg"
                />
              </div>

              {/* EXCERPT */}
              <div className="space-y-2">
                <Label htmlFor="excerpt" className="text-base font-medium">
                  Short Excerpt <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a brief summary of your article (2–3 sentences)..."
                  rows={3}
                  value={form.excerpt}
                  onChange={(e) =>
                    setForm({ ...form, excerpt: e.target.value })
                  }
                />
                <p className="text-sm text-muted-foreground">
                  This will appear on the blog listing page.
                </p>
              </div>

              {/* CATEGORY */}
              <div className="space-y-2">
                <Label className="text-base font-medium">Category</Label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      type="button"
                      size="sm"
                      variant={form.category === cat ? "default" : "outline"}
                      onClick={() => setForm({ ...form, category: cat })}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              {/* IMAGE URL */}
              <div className="space-y-2">
                <Label htmlFor="imageUrl" className="text-base font-medium">
                  Featured Image URL
                </Label>
                <Input
                  id="imageUrl"
                  placeholder="https://example.com/image.jpg"
                  value={form.imageUrl}
                  onChange={(e) =>
                    setForm({ ...form, imageUrl: e.target.value })
                  }
                />
                <p className="text-sm text-muted-foreground">
                  Optional: Add a URL to a featured image for your article.
                </p>
              </div>

              {/* CONTENT */}
              <div className="space-y-2">
                <Label htmlFor="content" className="text-base font-medium">
                  Article Content <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="content"
                  placeholder="Write your full article content here..."
                  rows={12}
                  value={form.content}
                  onChange={(e) =>
                    setForm({ ...form, content: e.target.value })
                  }
                />
              </div>

              {/* ACTIONS */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => navigate("/blog")}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isPending}
                  onClick={submit}
                >
                  {isPending ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Publishing...
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4 mr-2" />
                      Publish Article
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}
