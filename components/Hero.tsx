
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to range [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Helper to render clouds with parallax wrappers
  const ParallaxCloud = ({ 
    className, 
    style, 
    depth = 1 
  }: { 
    className: string; 
    style?: React.CSSProperties; 
    depth?: number 
  }) => (
    <div 
      className="absolute transition-transform duration-1000 cubic-bezier(0.23, 1, 0.32, 1) pointer-events-none"
      style={{
        // Parallax intensity multiplier
        transform: `translate(${mousePos.x * 70 * depth}px, ${mousePos.y * 70 * depth}px) rotate(${mousePos.x * 5 * depth}deg)`,
        ...style
      }}
    >
      <div className={`cloud-shape ${className}`} />
    </div>
  );

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#2e78c7] canvas-texture">
      {/* Background Clouds (Lower depth) */}
      <ParallaxCloud 
        className="w-32 h-8 opacity-40 animate-float" 
        depth={0.2} 
        style={{ top: '5%', right: '35%', animationDelay: '1.5s' }} 
      />
      <ParallaxCloud 
        className="w-48 h-12 opacity-90 animate-float" 
        depth={0.4} 
        style={{ top: '10%', left: '5%', animationDelay: '0s' }} 
      />
      <ParallaxCloud 
        className="w-36 h-10 opacity-60 animate-float" 
        depth={0.5} 
        style={{ top: '25%', left: '30%', animationDelay: '4.5s' }} 
      />
      <ParallaxCloud 
        className="w-40 h-11 opacity-70 animate-float" 
        depth={0.3} 
        style={{ bottom: '30%', left: '45%', animationDelay: '2.5s' }} 
      />

      {/* Midground Clouds */}
      <ParallaxCloud 
        className="w-72 h-18 opacity-90 animate-float" 
        depth={0.9} 
        style={{ bottom: '20%', left: '10%', animationDelay: '1s' }} 
      />
      <ParallaxCloud 
        className="w-36 h-10 opacity-80 animate-float" 
        depth={0.7} 
        style={{ top: '15%', left: '40%', animationDelay: '4s' }} 
      />
      <ParallaxCloud 
        className="w-56 h-15 opacity-75 animate-float" 
        depth={0.8} 
        style={{ top: '65%', right: '35%', animationDelay: '6s' }} 
      />

      {/* Foreground Clouds (Higher depth) */}
      <ParallaxCloud 
        className="w-60 h-16 opacity-95 animate-float" 
        depth={1.4} 
        style={{ top: '30%', right: '12%', animationDelay: '2s' }} 
      />
      <ParallaxCloud 
        className="w-44 h-12 opacity-90 animate-float" 
        depth={1.2} 
        style={{ bottom: '10%', right: '5%', animationDelay: '5s' }} 
      />
      <ParallaxCloud 
        className="w-52 h-14 opacity-85 animate-float" 
        depth={1.8} 
        style={{ bottom: '40%', right: '20%', animationDelay: '3s' }} 
      />
      <ParallaxCloud 
        className="w-64 h-16 opacity-90 animate-float" 
        depth={2.2} 
        style={{ top: '50%', left: '-5%', animationDelay: '0.5s' }} 
      />
      <ParallaxCloud 
        className="w-40 h-10 opacity-80 animate-float" 
        depth={1.6} 
        style={{ bottom: '25%', right: '45%', animationDelay: '7s' }} 
      />

      <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-12 px-6">
        <div className="relative">
          {/* Main Title "DEEPU" */}
          <h1 className="text-8xl md:text-[11rem] font-black uppercase tracking-tight text-white leading-none relative z-10" style={{
            WebkitTextStroke: '6px #FBDB4C',
            filter: 'drop-shadow(8px 8px 0px rgba(0,0,0,0.1))'
          }}>
            DEEPU
          </h1>
          
          {/* "Kashyap" Script Overlay */}
          <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/4 z-20">
             <h2 className="script-font text-6xl md:text-8xl text-[#FBDB4C] whitespace-nowrap" style={{
               textShadow: '4px 4px 0px #fff, -2px -2px 0px #fff, 2px -2px 0px #fff, -2px 2px 0px #fff'
             }}>
               Kashyap
             </h2>
          </div>
        </div>

        {/* Profile Sticker Image */}
        <div className="relative mt-16 md:mt-0 animate-float" style={{ animationDuration: '7s' }}>
          <div className="sticker-frame bg-gray-300 w-48 h-60 md:w-64 md:h-80 rotate-[3deg]">
            <img 
              src="https://images.unsplash.com/photo-1519085115850-3af7309aef21?q=80&w=800&auto=format&fit=crop" 
              alt="Deepu Kashyap" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>
      </div>

      <div className="z-20 mt-28 flex flex-col md:flex-row gap-4 items-center">
        <button 
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'})}
          className="bg-white text-black px-12 py-3.5 text-xl font-black border-4 border-black neo-shadow neo-shadow-hover neo-shadow-active transition-all uppercase italic"
        >
          WORKS
        </button>
        <button 
          onClick={() => document.getElementById('resume')?.scrollIntoView({behavior:'smooth'})}
          className="bg-[#FBDB4C] text-black px-12 py-3.5 text-xl font-black border-4 border-black neo-shadow neo-shadow-hover neo-shadow-active transition-all uppercase"
        >
          RESUME
        </button>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-sm h-12 flex items-center overflow-hidden border-t-4 border-black">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(15)].map((_, i) => (
            <span key={i} className="text-black font-black uppercase italic mx-10 text-sm tracking-widest">
              GRAPHIC DESIGNER • FULLSTACK DEVELOPER • CREATIVE DIRECTOR • 
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
