
import React from 'react';

interface NavbarProps {
  activeSection: 'hero' | 'resume' | 'portfolio';
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 glass-header p-1 neo-shadow rounded-sm border-2 border-black">
      <NavItem 
        label="Home" 
        active={activeSection === 'hero'} 
        onClick={() => scrollTo('hero')} 
        color="bg-yellow-400/80"
      />
      <NavItem 
        label="Resume" 
        active={activeSection === 'resume'} 
        onClick={() => scrollTo('resume')} 
        color="bg-pink-500/80"
      />
      <NavItem 
        label="Portfolio" 
        active={activeSection === 'portfolio'} 
        onClick={() => scrollTo('portfolio')} 
        color="bg-green-400/80"
      />
    </nav>
  );
};

const NavItem: React.FC<{ label: string; active: boolean; onClick: () => void; color: string }> = ({ label, active, onClick, color }) => (
  <button 
    onClick={onClick}
    className={`
      px-4 py-1.5 text-xs font-black uppercase transition-all border-2
      ${active ? `${color} border-black translate-y-[1px]` : 'border-transparent hover:bg-white/20'}
    `}
  >
    {label}
  </button>
);
