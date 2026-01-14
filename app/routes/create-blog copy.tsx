import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload, FileText } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Label } from '~/components/ui/label';
import { useToast } from '~/hooks/use-toast';
import { useAuth } from '~/contexts/AuthContext';
import { useBlog } from '~/contexts/BlogContext';

const categories = ['Manufacturing', 'Innovation', 'Sustainability'];

const CreateBlog = () => {
  const { isAuthenticated, user } = useAuth();
  const { addPost } = useBlog();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Manufacturing');
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || !excerpt.trim()) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    addPost({
      title: title.trim(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      author: user?.name || 'Anonymous',
      category,
      imageUrl: imageUrl.trim() || undefined,
    });

    toast({
      title: 'Success!',
      description: 'Your blog post has been published.',
    });
    
    navigate('/blog');
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
              onClick={() => navigate('/blog')}
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
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-lg shadow-lg border border-border"
          >
            <div className="space-y-6">
              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base font-medium">
                  Article Title <span className="text-primary">*</span>
                </Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Enter a compelling title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="text-lg"
                  required
                />
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Label htmlFor="excerpt" className="text-base font-medium">
                  Short Excerpt <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="excerpt"
                  placeholder="Write a brief summary of your article (2-3 sentences)..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  required
                />
                <p className="text-sm text-muted-foreground">
                  This will appear on the blog listing page.
                </p>
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label className="text-base font-medium">Category</Label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      type="button"
                      variant={category === cat ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCategory(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Image URL */}
              <div className="space-y-2">
                <Label htmlFor="imageUrl" className="text-base font-medium">
                  Featured Image URL
                </Label>
                <Input
                  id="imageUrl"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Optional: Add a URL to a featured image for your article.
                </p>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <Label htmlFor="content" className="text-base font-medium">
                  Article Content <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="content"
                  placeholder="Write your full article content here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={12}
                  required
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/blog')}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
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
};

export default CreateBlog;
