import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mb-16 text-center"
        >
          About <span className="text-[#5c6ac4]">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1657663119025-71c8cd9d6539"
                alt="Professional portrait"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5c6ac4]/30 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-[#f5f5f5]">
              Hi, I'm Alex – a tech enthusiast on a journey of endless curiosity.
            </h3>

            <p className="text-lg text-[#b3b3b3] leading-relaxed">
              I'm not just a developer; I'm a digital explorer. My world revolves around understanding how things work, breaking them down, and building them back up in new and exciting ways. Technology isn't just my career—it's my playground, my canvas, and my constant source of inspiration.
            </p>

            <p className="text-lg text-[#b3b3b3] leading-relaxed">
              I believe in the power of continuous learning. Every line of code I write, every problem I solve, and every project I build teaches me something new. My mindset? Stay curious, stay humble, and never stop experimenting.
            </p>

            <div className="bg-[#1c1c1c] border border-[#2a2a2a] rounded-lg p-6 mt-8">
              <p className="text-[#5c6ac4] italic text-lg">
                "Technology is best when it brings people together. My goal is to create solutions that make a difference, one project at a time."
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {['Problem Solver', 'Lifelong Learner', 'Creative Thinker', 'Tech Enthusiast'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-[#161616] border border-[#2a2a2a] rounded-full text-[#b3b3b3] text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
