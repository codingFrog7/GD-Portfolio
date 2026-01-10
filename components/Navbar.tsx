import React from 'react';

interface NavbarProps {
  activeSection: 'hero' | 'resume' | 'portfolio';
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 neo-glass neo-shadow rounded-xl overflow-hidden">
      <NavItem 
        label="Home" 
        active={activeSection === 'hero'} 
        onClick={() => scrollTo('hero')} 
        color="bg-yellow-400"
      />
      <NavItem 
        label="Resume" 
        active={activeSection === 'resume'} 
        onClick={() => scrollTo('resume')} 
        color="bg-pink-500"
      />
      <NavItem 
        label="Portfolio" 
        active={activeSection === 'portfolio'} 
        onClick={() => scrollTo('portfolio')} 
        color="bg-green-400"
      />
    </nav>
  );
};

const NavItem: React.FC<{ label: string; active: boolean; onClick: () => void; color: string }> = ({ label, active, onClick, color }) => (
  <button 
    onClick={onClick}
    className={`
      px-6 py-2 text-[10px] md:text-xs font-black uppercase transition-all border-2 rounded-lg
      ${active ? `${color} border-black translate-y-[1px] neo-shadow` : 'border-transparent hover:bg-black/10'}
    `}
  >
    {label}
  </button>
);