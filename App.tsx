import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Resume } from './components/Resume';
import { Portfolio } from './components/Portfolio';
import { Navbar } from './components/Navbar';
import { LoadingScreen } from './components/LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<'hero' | 'resume' | 'portfolio'>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPos < windowHeight * 0.7) {
        setActiveSection('hero');
      } else if (scrollPos < windowHeight * 1.7) {
        setActiveSection('resume');
      } else {
        setActiveSection('portfolio');
      }
    };

    // Reveal animation observer
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    if (!isLoading) {
      document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen animate-in fade-in duration-1000 ease-out">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="hero" className="reveal active">
          <Hero />
        </section>
        <section id="resume" className="reveal py-10">
          <Resume />
        </section>
        <section id="portfolio" className="reveal py-10">
          <Portfolio />
        </section>
      </main>

      <footer className="py-24 bg-black text-white text-center border-t-[12px] border-yellow-400 relative overflow-hidden reveal">
        <div className="absolute top-0 left-0 w-full h-2 bg-pink-500"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter text-white">Let's Create Magic</h2>
          <p className="text-xl md:text-3xl font-bold mb-10 text-yellow-400 border-4 border-yellow-400 inline-block px-6 py-3 transition-smooth hover:scale-105">
            deepukashyap780@gmail.com
          </p>
          
          <div className="flex flex-wrap justify-center gap-10 mb-20">
            {['LinkedIn', 'Twitter', 'GitHub'].map(link => (
              <a key={link} href="#" className="text-lg hover:text-pink-500 transition-smooth uppercase font-black tracking-widest border-b-4 border-transparent hover:border-pink-500 py-1">
                {link}
              </a>
            ))}
          </div>
          
          <div className="border-t-2 border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm opacity-50 font-mono tracking-widest uppercase">© 2024 DEEPU KASHYAP. PORTFOLIO V2.0</p>
            <p className="text-xs font-black uppercase text-pink-500 bg-white px-3 py-1 border-2 border-black transition-smooth hover:bg-yellow-400">Hand-crafted with pixels</p>
          </div>
        </div>
        
        {/* Footer Decor */}
        <div className="absolute bottom-8 left-8 w-8 h-8 bg-yellow-400 border-2 border-white animate-bounce"></div>
        <div className="absolute top-12 right-12 w-6 h-6 bg-green-500 border-2 border-white rotate-45 animate-float"></div>
      </footer>
    </div>
  );
};

export default App;