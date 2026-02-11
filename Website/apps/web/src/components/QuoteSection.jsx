import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const QuotesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const quotes = [
    {
      text: 'Learning is not about memorizing facts; it\'s about understanding patterns and connecting dots.',
      author: 'On Learning'
    },
    {
      text: 'Curiosity is the engine of achievement. Stay curious, and you\'ll never stop growing.',
      author: 'On Curiosity'
    },
    {
      text: 'Technology is a tool, but creativity is the magic that makes it meaningful.',
      author: 'On Tech'
    },
    {
      text: 'Growth happens outside your comfort zone. Embrace the discomfort, and you\'ll discover your potential.',
      author: 'On Growth'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-[#161616]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-16 text-center"
        >
          Words I <span className="text-[#5c6ac4]">Live By</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl p-8 hover:border-[#5c6ac4] transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-[#5c6ac4]/20" size={48} />
              <p className="text-lg text-[#f5f5f5] leading-relaxed mb-4 relative z-10">
                "{quote.text}"
              </p>
              <p className="text-[#5c6ac4] font-medium">
                — {quote.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
