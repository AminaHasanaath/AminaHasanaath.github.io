import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Code, Compass } from 'lucide-react';

const NowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sections = [
    {
      icon: <BookOpen size={32} />,
      title: "What I'm Currently Learning",
      items: [
        'Advanced React patterns and performance optimization',
        'System design and scalable architectures',
        'AI/ML fundamentals and practical applications',
        'Web3 and blockchain technologies'
      ]
    },
    {
      icon: <Code size={32} />,
      title: "What I'm Building",
      items: [
        'A personal knowledge management system',
        'Open-source developer tools for productivity',
        'AI-powered code review assistant',
        'Portfolio of experimental web projects'
      ]
    },
    {
      icon: <Compass size={32} />,
      title: "What I'm Exploring",
      items: [
        'The intersection of AI and creative coding',
        'Minimalist design principles in tech',
        'Developer experience and tooling',
        'The future of human-computer interaction'
      ]
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-8 text-center"
        >
          What I'm Up To <span className="text-[#5c6ac4]">Now</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#b3b3b3] text-center mb-16 max-w-2xl mx-auto"
        >
          A snapshot of my current journey—what I'm learning, building, and exploring in the world of technology.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl p-8 hover:border-[#5c6ac4] transition-all duration-300"
            >
              <div className="text-[#5c6ac4] mb-6">
                {section.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#f5f5f5] mb-6">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.15 + itemIndex * 0.1 }}
                    className="flex items-start gap-3 text-[#b3b3b3]"
                  >
                    <span className="text-[#5c6ac4] mt-1">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-[#b3b3b3] mb-6">
            Want to connect or collaborate? Let's build something amazing together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(92, 106, 196, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#5c6ac4] text-[#f5f5f5] rounded-lg font-semibold hover:bg-[#4a5ab0] transition-colors"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NowSection;
