import React from 'react';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Search, Calendar, Tag, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      title: 'The Art of Clean Code',
      description: 'Exploring why readable code matters more than clever code. A deep dive into writing software that humans can understand and maintain.',
      date: '2026-02-05',
      category: 'Tech Ideas'
    },
    {
      title: 'Learning in Public',
      description: 'Why sharing your learning journey makes you a better developer. My thoughts on building in public and the power of community.',
      date: '2026-01-28',
      category: 'Thoughts'
    },
    {
      title: 'My Morning Routine as a Developer',
      description: 'How I structure my day for maximum productivity and creativity. Coffee, code, and continuous learning.',
      date: '2026-01-20',
      category: 'Life Logs'
    },
    {
      title: 'Building a Personal AI Assistant',
      description: 'Experimenting with LLMs and automation. A weekend project that turned into something surprisingly useful.',
      date: '2026-01-15',
      category: 'Experiments'
    },
    {
      title: 'Why I Love Terminal-Based Tools',
      description: 'The beauty of command-line interfaces and why they make me more productive. A love letter to the terminal.',
      date: '2026-01-10',
      category: 'Tech Ideas'
    },
    {
      title: 'Debugging: A Mindset, Not a Skill',
      description: 'How I approach debugging as a creative problem-solving exercise. Lessons learned from countless hours of troubleshooting.',
      date: '2026-01-05',
      category: 'Thoughts'
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCategoryColor = (category) => {
    const colors = {
      'Thoughts': 'bg-[#5c6ac4]/20 text-[#5c6ac4] border-[#5c6ac4]/30',
      'Tech Ideas': 'bg-[#6d597a]/20 text-[#6d597a] border-[#6d597a]/30',
      'Life Logs': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      'Experiments': 'bg-amber-500/20 text-amber-400 border-amber-500/30'
    };
    return colors[category] || 'bg-[#2a2a2a] text-[#b3b3b3] border-[#2a2a2a]';
  };

  return (
    <section id="blog" ref={ref} className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-8 text-center"
        >
          Blog & <span className="text-[#5c6ac4]">Thoughts</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#b3b3b3] text-center mb-12 max-w-2xl mx-auto"
        >
          A collection of my thoughts, experiments, and learnings in the world of technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#b3b3b3]" size={20} />
            <input
              type="text"
              placeholder="Search posts by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#1c1c1c] border border-[#2a2a2a] rounded-lg text-[#f5f5f5] placeholder-[#b3b3b3] focus:outline-none focus:border-[#5c6ac4] transition-colors"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#5c6ac4] transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-2 text-[#b3b3b3] text-sm mb-3">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>

              <h3 className="text-xl font-bold text-[#f5f5f5] mb-3 group-hover:text-[#5c6ac4] transition-colors">
                {post.title}
              </h3>

              <p className="text-[#b3b3b3] mb-4 leading-relaxed">
                {post.description}
              </p>

              <div className="flex items-center justify-between">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium ${getCategoryColor(post.category)}`}>
                  <Tag size={14} />
                  {post.category}
                </div>

                <button className="flex items-center gap-2 text-[#5c6ac4] hover:gap-3 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[#b3b3b3] mt-12"
          >
            No posts found matching your search.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
