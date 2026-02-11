import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Coffee, Moon, Headphones, Zap, BookOpen, Terminal, Sparkles, Rocket } from 'lucide-react';

const FunFactsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const facts = [
    { icon: <Coffee size={24} />, text: 'Coffee-powered coding sessions' },
    { icon: <Moon size={24} />, text: 'Night owl developer' },
    { icon: <Headphones size={24} />, text: 'Lo-fi beats while coding' },
    { icon: <Zap size={24} />, text: 'Keyboard shortcuts enthusiast' },
    { icon: <BookOpen size={24} />, text: 'Always learning something new' },
    { icon: <Terminal size={24} />, text: 'Terminal > GUI' },
    { icon: <Sparkles size={24} />, text: 'Obsessed with clean code' },
    { icon: <Rocket size={24} />, text: 'Side projects collector' }
  ];

  return (
    <section ref={ref} className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-16 text-center"
        >
          Fun <span className="text-[#5c6ac4]">Facts</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-[#5c6ac4] transition-all duration-300 cursor-pointer"
            >
              <div className="text-[#5c6ac4] mb-3">
                {fact.icon}
              </div>
              <p className="text-[#b3b3b3] text-sm font-medium">
                {fact.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
