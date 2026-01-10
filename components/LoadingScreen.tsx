
import React, { useState, useEffect } from 'react';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        const diff = Math.random() * 20;
        return Math.min(oldProgress + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[1000] bg-[#FBDB4C] flex flex-col items-center justify-center p-6 canvas-texture overflow-hidden">
      {/* Background Decor - Subtle Geometric Shapes */}
      <div className="absolute top-[15%] left-[15%] w-16 h-16 border-4 border-black rotate-45 neo-shadow animate-float opacity-30"></div>
      <div className="absolute bottom-[20%] right-[15%] w-12 h-12 bg-black border-4 border-black neo-shadow animate-float opacity-20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-[10%] right-[10%] w-8 h-8 border-4 border-black rounded-full animate-float opacity-20" style={{ animationDelay: '0.5s' }}></div>

      {/* Central Minimal Icon */}
      <div className="relative mb-12">
        <div className="w-24 h-24 bg-white border-8 border-black rotate-3 animate-pulse-grow neo-shadow flex items-center justify-center">
           <div className="w-12 h-12 border-4 border-black rotate-45 animate-spin" style={{ animationDuration: '3s' }}></div>
        </div>
      </div>

      {/* Minimal Progress Bar */}
      <div className="w-48 h-4 bg-white border-4 border-black neo-shadow relative overflow-hidden">
        <div 
          className="h-full bg-black transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Subtle Shine Effect */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[marquee_2s_linear_infinite]"></div>
        </div>
      </div>

      {/* Bottom Minimal Accent */}
      <div className="absolute bottom-12 flex gap-4 opacity-40">
        <div className="w-2 h-2 bg-black rounded-full"></div>
        <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-black rounded-full"></div>
      </div>
    </div>
  );
};
