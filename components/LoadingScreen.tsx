
import React, { useState, useEffect } from 'react';

const MESSAGES = [
  "CALIBRATING PIXELS...",
  "CHARGING VIBRANT COLORS...",
  "BOOTING CREATIVITY...",
  "SETTING THICK OUTLINES...",
  "LOADING AWESOMENESS...",
  "POLISHING NEO-RETRO VIBES..."
];

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    const msgTimer = setInterval(() => {
      setMsgIdx((prev) => (prev + 1) % MESSAGES.length);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(msgTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[1000] bg-[#FBDB4C] flex flex-col items-center justify-center p-6 canvas-texture overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[10%] left-[10%] w-32 h-32 bg-pink-500 border-4 border-black rotate-12 neo-shadow animate-float opacity-50"></div>
      <div className="absolute bottom-[10%] right-[10%] w-24 h-24 bg-green-400 border-4 border-black -rotate-12 neo-shadow animate-float opacity-50" style={{ animationDelay: '1s' }}></div>

      {/* Center Piece */}
      <div className="relative text-center">
        <div className="w-32 h-32 md:w-48 md:h-48 bg-white border-8 border-black flex items-center justify-center mb-8 rotate-3 animate-pulse-grow neo-shadow">
          <span className="text-6xl md:text-8xl font-black italic">D</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic text-black leading-none mb-2" style={{
          WebkitTextStroke: '2px white'
        }}>
          DEEPU KASHYAP
        </h1>
        <div className="bg-black text-white px-4 py-1 inline-block font-black text-xs md:text-sm uppercase tracking-widest mb-12">
          Portfolio V2.0
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full max-w-md">
        <div className="flex justify-between mb-3">
          <span className="font-black italic text-sm md:text-base text-black animate-pulse">
            {MESSAGES[msgIdx]}
          </span>
          <span className="font-black text-sm md:text-base text-black">
            {Math.round(progress)}%
          </span>
        </div>
        
        <div className="w-full h-8 bg-white border-4 border-black neo-shadow relative overflow-hidden">
          <div 
            className="h-full bg-pink-500 border-r-4 border-black transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          >
            {/* Pattern Overlay on Bar */}
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,black_10px,black_20px)]"></div>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-8 font-black uppercase tracking-widest text-[10px] md:text-xs text-black/40">
        EST. 2024 • BORN TO CREATE
      </div>
    </div>
  );
};
