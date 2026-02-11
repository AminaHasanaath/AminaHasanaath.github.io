import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, User } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1699100329878-7f28bb780787)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/80 via-[#0f0f0f]/70 to-[#0f0f0f]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-[#f5f5f5] mb-4">
            <span className="inline-block typing-animation">
              Alex Morgan
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-[#5c6ac4] mb-6 font-medium"
        >
          Tech Nerd. Curious Mind. Digital Thinker.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-[#b3b3b3] mb-12 max-w-2xl mx-auto italic"
        >
          "The best way to predict the future is to invent it. I'm here to build, learn, and explore the endless possibilities of technology."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(92, 106, 196, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('digital-life')}
            className="px-8 py-4 bg-[#5c6ac4] text-[#f5f5f5] rounded-lg font-semibold flex items-center gap-2 hover:bg-[#4a5ab0] transition-colors"
          >
            Explore <ArrowRight size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#5c6ac4' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('blog')}
            className="px-8 py-4 border-2 border-[#2a2a2a] text-[#f5f5f5] rounded-lg font-semibold flex items-center gap-2 hover:border-[#5c6ac4] transition-colors"
          >
            <BookOpen size={20} /> Read My Thoughts
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: '#6d597a' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 border-2 border-[#2a2a2a] text-[#f5f5f5] rounded-lg font-semibold flex items-center gap-2 hover:border-[#6d597a] transition-colors"
          >
            <User size={20} /> About Me
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
