import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';


export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  publishDate: string;
  imageUrl?: string;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id' | 'publishDate'>) => void;
  getPost: (id: string) => BlogPost | undefined;
}

const initialPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Advancing Precision Manufacturing with Industry 4.0',
    excerpt: 'How Engine Plant #3 is integrating smart manufacturing technologies to achieve unprecedented quality standards.',
    content: 'At Toyota Motor Manufacturing Indonesia Engine Plant #3, we are at the forefront of Industry 4.0 adoption. Our facility leverages IoT sensors, AI-powered quality control, and real-time analytics to ensure every engine meets our exacting standards. This digital transformation has enabled us to reduce defect rates by 40% while increasing production efficiency.',
    author: 'Hiroshi Tanaka',
    category: 'Manufacturing',
    publishDate: '2025-01-03',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Sustainability Initiatives: Carbon Neutral by 2035',
    excerpt: 'Our roadmap to achieving carbon neutrality at the Karawang facility through renewable energy and process optimization.',
    content: 'Toyota Motor Manufacturing Indonesia is committed to environmental stewardship. Our Engine Plant #3 has implemented solar panel installations, water recycling systems, and energy-efficient manufacturing processes. These initiatives align with Toyota\'s global Environmental Challenge 2050 and position our facility as a leader in sustainable manufacturing.',
    author: 'Dewi Sartika',
    category: 'Sustainability',
    publishDate: '2025-01-01',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Kaizen in Action: Continuous Improvement Stories',
    excerpt: 'Real stories from our production floor showcasing the power of continuous improvement philosophy.',
    content: 'The spirit of Kaizen runs deep at Engine Plant #3. Our team members regularly identify opportunities for improvement, from reducing tool changeover times to optimizing material flow. This month, we celebrate the achievements of our Quality Circle teams who have implemented over 200 improvement suggestions.',
    author: 'Budi Santoso',
    category: 'Innovation',
    publishDate: '2024-12-28',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'New Engine Line Launch: NR Series Production Begins',
    excerpt: 'Engine Plant #3 celebrates the successful launch of the new NR series engine production line.',
    content: 'We are proud to announce the commencement of NR series engine production at our Karawang facility. This new engine line represents Toyota\'s commitment to fuel efficiency and reduced emissions. The NR series engines will power the next generation of compact vehicles across the ASEAN region.',
    author: 'Akira Yamamoto',
    category: 'Manufacturing',
    publishDate: '2024-12-20',
    imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop',
  },
];

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

  const addPost = (post: Omit<BlogPost, 'id' | 'publishDate'>) => {
    const newPost: BlogPost = {
      ...post,
      id: crypto.randomUUID(),
      publishDate: new Date().toISOString().split('T')[0],
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  const getPost = (id: string) => posts.find((post) => post.id === id);

  return (
    <BlogContext.Provider value={{ posts, addPost, getPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
