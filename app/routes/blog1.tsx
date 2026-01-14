// import { useState } from 'react';
// import { Link } from 'react-router';
// import { motion } from 'framer-motion';
// import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
// import { Button } from '~/components/ui/button';
// import { Input } from '~/components/ui/input';
// import { useBlog } from '~/contexts/BlogContext';

// const categories = ['All', 'Manufacturing', 'Innovation', 'Sustainability'];

// const fadeIn = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// const Blog = () => {
//   const { posts } = useBlog();
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');

//   const filteredPosts = posts.filter((post) => {
//     const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
//     const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative py-24 md:py-32 bg-gradient-hero">
//         <div className="container-wide">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//             className="max-w-3xl"
//           >
//             <div className="flex items-center gap-2 mb-6">
//               <div className="w-12 h-0.5 bg-primary" />
//               <span className="text-primary font-medium text-sm uppercase tracking-widest">
//                 Blog & News
//               </span>
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-background leading-tight mb-6">
//               Insights from
//               <span className="block text-primary">Engine Plant #3</span>
//             </h1>
//             <p className="text-lg md:text-xl text-background/80 leading-relaxed">
//               Stay updated with the latest news, innovations, and stories 
//               from Toyota Motor Manufacturing Indonesia.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Blog Content */}
//       <section className="section-padding">
//         <div className="container-wide">
//           {/* Filters */}
//           <div className="flex flex-col md:flex-row gap-6 mb-12">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//               <Input
//                 type="text"
//                 placeholder="Search articles..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10"
//               />
//             </div>
//             <div className="flex flex-wrap gap-2">
//               {categories.map((category) => (
//                 <Button
//                   key={category}
//                   variant={selectedCategory === category ? 'default' : 'outline'}
//                   size="sm"
//                   onClick={() => setSelectedCategory(category)}
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </div>
//           </div>

//           {/* Posts Grid */}
//           {filteredPosts.length === 0 ? (
//             <div className="text-center py-16">
//               <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredPosts.map((post, index) => (
//                 <motion.article
//                   key={post.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="group bg-card rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//                 >
//                   <Link to={`/blog/${post.id}`}>
//                     <div className="aspect-video overflow-hidden">
//                       <img
//                         src={post.imageUrl || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop'}
//                         alt={post.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                     </div>
//                   </Link>
//                   <div className="p-6">
//                     <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
//                       <span className="flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         {formatDate(post.publishDate)}
//                       </span>
//                       <span className="flex items-center gap-1">
//                         <Tag className="w-4 h-4" />
//                         {post.category}
//                       </span>
//                     </div>
//                     <Link to={`/blog/${post.id}`}>
//                       <h2 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors line-clamp-2">
//                         {post.title}
//                       </h2>
//                     </Link>
//                     <p className="text-body text-sm mb-4 line-clamp-3">{post.excerpt}</p>
//                     <div className="flex items-center justify-between">
//                       <span className="flex items-center gap-2 text-sm text-muted-foreground">
//                         <User className="w-4 h-4" />
//                         {post.author}
//                       </span>
//                       <Link 
//                         to={`/blog/${post.id}`}
//                         className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
//                       >
//                         Read More <ArrowRight className="w-4 h-4" />
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.article>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blog;
