import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import DigitalLifeSection from '@/components/DigitalLifeSection.jsx';
import BlogSection from '@/components/BlogSection.jsx';
import QuotesSection from '@/components/QuotesSection.jsx';
import FunFactsSection from '@/components/FunFactsSection.jsx';
import GallerySection from '@/components/GallerySection.jsx';
import NowSection from '@/components/NowSection.jsx';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Alex Morgan - Tech Nerd & Digital Thinker</title>
        <meta name="description" content="Personal portfolio of Alex Morgan - a tech enthusiast, developer, and curious mind exploring the endless possibilities of technology." />
      </Helmet>

      <div className="min-h-screen bg-[#0f0f0f] text-[#f5f5f5]">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <DigitalLifeSection />
          <BlogSection />
          <QuotesSection />
          <FunFactsSection />
          <GallerySection />
          <NowSection />
        </main>

        <footer className="bg-[#161616] border-t border-[#2a2a2a] py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="text-[#b3b3b3]">
              © 2026 Alex Morgan. Built with curiosity and code.
            </p>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}

export default App;
