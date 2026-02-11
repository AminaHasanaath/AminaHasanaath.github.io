import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Wrench, Brain, Sparkles } from 'lucide-react';

const DigitalLifeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      icon: <Code2 size={32} />,
      title: 'What I Love in Tech',
      description: 'Building elegant solutions to complex problems. I thrive on clean code, innovative architectures, and the satisfaction of seeing ideas come to life through technology.'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Coding Philosophy',
      description: 'Write code that humans can read. I believe in simplicity, maintainability, and the art of making complex systems feel effortless. Every function should tell a story.'
    },
    {
      icon: <Wrench size={32} />,
      title: 'Favorite Tools',
      description: 'VS Code with custom themes, React for dynamic UIs, Node.js for backends, Git for version control, and a terminal that feels like home. My toolkit evolves with every project.'
    },
    {
      icon: <Brain size={32} />,
      title: 'How I Think',
      description: 'I approach problems like puzzles—breaking them into smaller pieces, understanding patterns, and finding creative solutions. Curiosity drives me, and experimentation guides me.'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'What Excites Me',
      description: 'AI and machine learning, web3 innovations, developer tools that boost productivity, and the endless possibilities of what we can build next. The future is being written now.'
    }
  ];

  return (
    <section id="digital-life" ref={ref} className="py-24 bg-[#161616]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-16 text-center"
        >
          My <span className="text-[#5c6ac4]">Digital Life</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl p-6 hover:border-[#5c6ac4] transition-all duration-300 cursor-pointer"
            >
              <div className="text-[#5c6ac4] mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-[#f5f5f5] mb-3">
                {card.title}
              </h3>
              <p className="text-[#b3b3b3] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalLifeSection;
