
import React from 'react';
import { RESUME_DATA } from '../constants';

export const Resume: React.FC = () => {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 border-y-[12px] border-black relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Left Column: Profile & Info */}
        <div className="md:col-span-4 space-y-10">
          <div className="bg-white p-8 border-4 border-black neo-shadow relative">
             <div className="absolute -top-6 -right-6 w-12 h-12 bg-pink-500 border-4 border-black flex items-center justify-center font-black text-2xl animate-float">?</div>
            <h2 className="text-2xl font-black uppercase mb-6 italic border-b-4 border-black inline-block">Profile</h2>
            <p className="text-lg font-bold leading-relaxed text-black">{RESUME_DATA.summary}</p>
          </div>

          <div className="bg-pink-500 p-8 border-4 border-black neo-shadow">
            <h2 className="text-2xl font-black uppercase mb-6 italic border-b-4 border-black inline-block">Contact</h2>
            <div className="space-y-4 font-bold text-lg text-black">
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="flex items-center gap-3 hover:underline">
                <span className="bg-black text-white p-2 border-2 border-black text-sm">EM</span>
                {RESUME_DATA.contact.email}
              </a>
              <a href="https://www.linkedin.com/in/coding-frog-frg780/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
                <span className="bg-black text-white p-2 border-2 border-black text-sm">LI</span>
                LinkedIn Profile
              </a>
              <a href="https://github.com/codingFrog7/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
                <span className="bg-black text-white p-2 border-2 border-black text-sm">GH</span>
                GitHub Profile
              </a>
            </div>
          </div>

          <div className="bg-yellow-400 p-8 border-4 border-black neo-shadow">
            <h2 className="text-2xl font-black uppercase mb-6 italic border-b-4 border-black inline-block">Education</h2>
            <div className="font-bold text-black">
              <h3 className="text-xl font-black uppercase mb-1">{RESUME_DATA.education.school}</h3>
              <p className="text-lg">{RESUME_DATA.education.degree}</p>
              <p className="text-base mt-2 bg-white px-2 py-1 border-2 border-black inline-block">{RESUME_DATA.education.years}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Experience & Skills */}
        <div className="md:col-span-8 space-y-10">
          <div className="bg-white p-8 border-4 border-black neo-shadow">
            <h2 className="text-3xl font-black uppercase mb-8 italic flex items-center gap-4">
              <span className="bg-green-400 px-3 py-1 border-4 border-black">Experience</span>
            </h2>
            <div className="space-y-10">
              {RESUME_DATA.experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-10 border-l-8 border-black">
                  <div className="absolute -left-[16px] top-0 w-8 h-8 bg-black border-4 border-white"></div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-black leading-none mb-2">{exp.role}</h3>
                  <p className="text-lg font-bold mb-4 bg-yellow-400 px-2 border-2 border-black inline-block italic text-black">{exp.duration}</p>
                  <ul className="space-y-3">
                    {exp.tasks.map((task, tidx) => (
                      <li key={tidx} className="font-bold flex items-start gap-3 text-lg text-black">
                        <span className="text-pink-600 mt-1">▶</span> {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-400 p-8 border-4 border-black neo-shadow">
            <h2 className="text-3xl font-black uppercase mb-8 italic inline-block bg-white px-3 py-1 border-4 border-black">Technical Skills</h2>
            <div className="flex flex-wrap gap-3">
              {RESUME_DATA.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className={`
                    px-5 py-2.5 border-4 border-black text-base font-black uppercase tracking-tight 
                    neo-shadow-hover transition-all cursor-default text-black
                    ${idx % 3 === 0 ? 'bg-white' : idx % 3 === 1 ? 'bg-yellow-400' : 'bg-pink-500'}
                  `}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background illustration */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 opacity-5 hidden lg:block">
        <h1 className="text-[20rem] font-black uppercase">WORK</h1>
      </div>
    </div>
  );
};
