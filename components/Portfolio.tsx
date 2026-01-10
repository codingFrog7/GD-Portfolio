import React from 'react';
import { PROJECTS } from '../constants';

export const Portfolio: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#f8f8f8]">
      {/* Decorative Illustrations - Background Layer */}
      <div className="absolute top-20 left-10 w-24 h-24 border-8 border-pink-500 rounded-full opacity-20 animate-float pointer-events-none"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400 rotate-12 opacity-10 animate-pulse-grow pointer-events-none"></div>
      
      {/* Large Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none whitespace-nowrap">
        <h1 className="text-[40rem] font-black uppercase leading-none tracking-tighter">GALLERY</h1>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 relative">
          <div className="space-y-2">
            <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter text-black leading-none">
              Selected <br /><span className="text-green-500">Works</span>
            </h2>
          </div>
          <div className="bg-black text-white px-8 py-4 border-4 border-yellow-400 neo-shadow font-black uppercase italic text-xl transition-smooth hover:scale-105 relative">
            2021-2024 Collection
            {/* Sticker decoration */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-pink-500 border-4 border-black flex items-center justify-center font-black text-2xl animate-float rotate-12">★</div>
          </div>
          
          {/* Scribble Illustration */}
          <div className="absolute -top-10 left-1/2 hidden lg:block animate-float" style={{ animationDelay: '1s' }}>
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
              <path d="M5 30C5 30 20 5 40 30C60 55 80 30 80 30C80 30 95 5 115 30" stroke="black" strokeWidth="8" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {/* Floating Sticker: Smiley */}
          <div className="absolute -left-16 top-1/4 hidden xl:flex items-center justify-center w-20 h-20 bg-white border-4 border-black rounded-full neo-shadow animate-float z-20">
             <div className="flex gap-2 mb-2">
               <div className="w-2 h-2 bg-black rounded-full"></div>
               <div className="w-2 h-2 bg-black rounded-full"></div>
             </div>
             <div className="absolute bottom-5 w-8 h-4 border-b-4 border-black rounded-full"></div>
          </div>

          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white border-4 border-black neo-shadow neo-shadow-hover flex flex-col group h-full transition-smooth hover:z-10"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="h-64 border-b-4 border-black overflow-hidden relative bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-smooth duration-1000 group-hover:scale-110"
                />
                <div 
                  className="absolute top-4 left-4 border-4 border-black px-4 py-1 font-black uppercase italic text-xs text-black z-10"
                  style={{ backgroundColor: project.color }}
                >
                  {project.tags[0]}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-smooth pointer-events-none"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter text-black group-hover:text-pink-500 transition-smooth leading-none">{project.title}</h3>
                  <p className="text-lg font-bold mb-8 text-black/70 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tidx) => (
                    <span key={tidx} className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase border-2 border-black transition-smooth hover:bg-yellow-400 hover:text-black">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* Add Project Card Illustration Decor */}
          <div className="border-4 border-black border-dashed flex flex-col items-center justify-center p-12 text-center bg-white/40 neo-shadow group cursor-pointer hover:bg-yellow-400 transition-smooth relative">
            <div className="w-20 h-20 bg-white rounded-full border-4 border-black flex items-center justify-center text-5xl mb-6 text-black font-black group-hover:rotate-180 transition-smooth">
              +
            </div>
            <h3 className="text-3xl font-black uppercase italic text-black">Interested?</h3>
            <p className="text-lg font-bold mt-3 text-black/80 max-w-[240px]">Let's collaborate on your next big idea!</p>
            
            {/* Tiny Pixel Stars */}
            <div className="absolute top-4 right-4 animate-pulse">✨</div>
            <div className="absolute bottom-4 left-4 animate-pulse" style={{ animationDelay: '0.5s' }}>✨</div>
          </div>
        </div>

        {/* Bottom Portfolio Decoration */}
        <div className="mt-24 flex justify-center items-center gap-12 flex-wrap">
           <div className="flex items-center gap-4 bg-white border-4 border-black p-4 neo-shadow animate-float">
              <div className="w-8 h-8 bg-green-400 border-4 border-black"></div>
              <span className="font-black uppercase italic text-sm">Design First</span>
           </div>
           <div className="flex items-center gap-4 bg-white border-4 border-black p-4 neo-shadow animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-8 h-8 bg-pink-500 border-4 border-black rounded-full"></div>
              <span className="font-black uppercase italic text-sm">Pixel Perfect</span>
           </div>
           <div className="flex items-center gap-4 bg-white border-4 border-black p-4 neo-shadow animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-8 h-8 bg-blue-400 border-4 border-black rotate-45"></div>
              <span className="font-black uppercase italic text-sm">User Centric</span>
           </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -right-24 pointer-events-none opacity-[0.03] select-none">
        <h1 className="text-[35rem] font-black uppercase leading-none tracking-tighter">PIXEL</h1>
      </div>
      
      {/* Scattered Shapes */}
      <div className="absolute bottom-1/4 left-5 w-6 h-6 bg-red-500 border-2 border-black rotate-12 hidden lg:block animate-float"></div>
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-blue-400 border-2 border-black -rotate-12 hidden lg:block animate-pulse"></div>
    </div>
  );
};