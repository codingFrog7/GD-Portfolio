
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Navbar } from './components/Navbar';
import { LoadingScreen } from './components/LoadingScreen';
import { AIAssistant } from './components/AIAssistant';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<'hero' | 'resume' | 'portfolio'>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPos < windowHeight * 0.8) {
        setActiveSection('hero');
      } else if (scrollPos < windowHeight * 1.8) {
        setActiveSection('resume');
      } else {
        setActiveSection('portfolio');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen animate-in fade-in duration-700">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="hero" className="bg-transparent">
          <Hero />
        </section>
        <section id="resume" className="bg-transparent">
          <Resume />
        </section>
        <section id="portfolio" className="bg-transparent">
          <Portfolio />
        </section>
      </main>

      <footer className="py-20 bg-black text-white text-center border-t-[12px] border-yellow-400 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-pink-500"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic uppercase tracking-tighter text-white">Let's Create Magic</h2>
          <p className="text-xl md:text-3xl font-bold mb-10 text-yellow-400 border-4 border-yellow-400 inline-block px-4 py-2">
            deepukashyap780@gmail.com
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <a href="#" className="text-lg hover:text-pink-500 transition-colors uppercase font-black tracking-widest border-b-4 border-transparent hover:border-pink-500">LinkedIn</a>
            <a href="#" className="text-lg hover:text-green-500 transition-colors uppercase font-black tracking-widest border-b-4 border-transparent hover:border-green-500">Twitter</a>
            <a href="#" className="text-lg hover:text-blue-500 transition-colors uppercase font-black tracking-widest border-b-4 border-transparent hover:border-blue-500">GitHub</a>
          </div>
          
          <div className="border-t-2 border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60 font-mono tracking-widest uppercase">© 2024 DEEPU KASHYAP. PORTFOLIO V2.0</p>
            <p className="text-xs font-black uppercase text-pink-500 bg-white px-2 py-0.5 border-2 border-black">Hand-crafted with pixels</p>
          </div>
        </div>
        
        {/* Footer Pixel Art Decor */}
        <div className="absolute bottom-4 left-4 w-8 h-8 bg-yellow-400 border-2 border-white animate-bounce"></div>
        <div className="absolute top-10 right-10 w-6 h-6 bg-green-500 border-2 border-white rotate-45"></div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
