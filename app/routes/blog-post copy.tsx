import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { useBlog } from '~/contexts/BlogContext';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPost, posts } = useBlog();
  
  const post = getPost(id || '');
  
  if (!post) {
    return (
      <>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold mb-4">Post Not Found</h1>
            <p className="text-body mb-6">The article you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const currentIndex = posts.findIndex((p) => p.id === id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

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
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-background/80 hover:text-background mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-4 text-sm text-background/70 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-background leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-background" />
              </div>
              <div>
                <p className="font-medium text-background">{post.author}</p>
                <p className="text-sm text-background/70">Author</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {post.imageUrl && (
        <section className="container-wide -mt-8 relative z-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="aspect-video rounded overflow-hidden shadow-xl"
          >
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>
      )}

      {/* Content */}
      <section className="section-padding pt-8">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-body leading-relaxed mb-8">{post.excerpt}</p>
            <div className="text-body leading-relaxed whitespace-pre-wrap">{post.content}</div>
          </motion.div>

          {/* Post Navigation */}
          <div className="border-t border-border mt-16 pt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {prevPost && (
                <Link
                  to={`/blog/${prevPost.id}`}
                  className="group p-6 bg-surface-industrial rounded hover:bg-surface-steel transition-colors"
                >
                  <span className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
                    <ArrowLeft className="w-4 h-4" />
                    Previous Article
                  </span>
                  <p className="font-heading font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </p>
                </Link>
              )}
              {nextPost && (
                <Link
                  to={`/blog/${nextPost.id}`}
                  className={`group p-6 bg-surface-industrial rounded hover:bg-surface-steel transition-colors ${
                    !prevPost ? 'md:col-start-2' : ''
                  }`}
                >
                  <span className="text-sm text-muted-foreground mb-2 flex items-center justify-end gap-1">
                    Next Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <p className="font-heading font-bold text-right group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
