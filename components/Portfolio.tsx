
import React from 'react';
import { PROJECTS } from '../constants';

export const Portfolio: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-black leading-none">
            Selected <br /><span className="text-green-500">Works</span>
          </h2>
          <div className="bg-black text-white px-6 py-3 border-4 border-yellow-400 neo-shadow font-black uppercase italic text-xl">
            2021-2024 Collection
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white border-4 border-black neo-shadow neo-shadow-hover transition-all flex flex-col group h-full"
            >
              <div className="h-60 border-b-4 border-black overflow-hidden relative bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div 
                  className="absolute top-3 left-3 border-4 border-black px-3 py-1 font-black uppercase italic text-sm text-black"
                  style={{ backgroundColor: project.color }}
                >
                  {project.tags[0]}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-3xl font-black uppercase mb-3 tracking-tighter text-black group-hover:text-pink-500 transition-colors">{project.title}</h3>
                  <p className="text-base font-bold mb-6 text-black/80 leading-snug">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tidx) => (
                    <span key={tidx} className="bg-black text-white px-2 py-0.5 text-xs font-bold uppercase border-2 border-black">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="border-4 border-black border-dashed flex flex-col items-center justify-center p-10 text-center bg-white/40 neo-shadow group cursor-pointer hover:bg-yellow-400 transition-colors">
            <div className="w-16 h-16 bg-white rounded-full border-4 border-black flex items-center justify-center text-4xl mb-4 text-black font-black group-hover:animate-spin">
              +
            </div>
            <h3 className="text-2xl font-black uppercase italic text-black">Interested?</h3>
            <p className="text-sm font-bold mt-2 text-black max-w-[200px]">Let's collaborate on your next big idea!</p>
          </div>
        </div>
      </div>

      {/* Massive Background Text */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-5 select-none">
        <h1 className="text-[30rem] font-black uppercase leading-none">PIXEL</h1>
      </div>
    </div>
  );
};
