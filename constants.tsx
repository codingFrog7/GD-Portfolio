
import React from 'react';
import { Experience, Skill, Project } from './types';

export const COLORS = {
  primary: '#FBDB4C', // Yellow
  secondary: '#F260D0', // Pink
  tertiary: '#48D992', // Green
  quaternary: '#56CCF2', // Blue
  accent: '#FF4D4D', // Red
  dark: '#000000',
  light: '#FFFFFF'
};

export const RESUME_DATA = {
  name: "Deepu Kashyap",
  contact: {
    phone: "+91 8958811754",
    email: "deepukashyap780@gmail.com",
    linkedin: "linkedin.com/in/deepu-kashyap",
  },
  summary: "A passionate Creative Developer and Graphic Designer obsessed with building bold, high-contrast digital experiences. I blend retro aesthetics with modern frontend technology to create interfaces that aren't just usable—they're memorable.",
  education: {
    school: "Invertis University",
    degree: "Bachelor of Computer's Applications",
    years: "2024-2027"
  },
  experiences: [
    {
      role: "Team Leader - GeekVerse 2.0",
      duration: "Feb 2024",
      tasks: ["Led a squad of 5 developers for a 48h hackathon", "Architected the event's interactive platform", "Handled real-time site updates and traffic spikes"]
    },
    {
      role: "Frontend Lead - Smart India Hackathon",
      duration: "Sept 2023",
      tasks: ["Built a prototype for a rural logistics tracker", "Optimized UI performance for low-bandwidth regions", "Won 'Best UI Design' honorable mention"]
    },
    {
      role: "Freelance Graphic Designer",
      duration: "2022 - Present",
      tasks: ["Creating brand identities for indie game studios", "Designing pixel-art assets and typography", "Consulting on user experience for early-stage startups"]
    }
  ] as Experience[],
  skills: [
    { name: "React/Next.js", category: "Tech" },
    { name: "Tailwind CSS", category: "Tech" },
    { name: "Python", category: "Tech" },
    { name: "Data Analysis", category: "Analytics" },
    { name: "Power BI", category: "Analytics" },
    { name: "Illustrator", category: "Design" },
    { name: "Figma", category: "Design" },
    { name: "Git & GitHub", category: "Tools" },
    { name: "SEO Optimization", category: "Marketing" }
  ] as Skill[]
};

export const PROJECTS: Project[] = [
  {
    title: "EcoTrack",
    description: "Sustainability dashboard for urban planning. Real-time data visualization with a pop-art twist.",
    tags: ["UI/UX", "Dashboard", "React"],
    color: '#48D992',
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "VibeFlow",
    description: "Social music discovery app. I designed the entire identity system and mobile prototypes.",
    tags: ["Branding", "Mobile App"],
    color: '#F260D0',
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "PixelPulse",
    description: "NFT marketplace for digital retro artists. Fully responsive with custom SVG animations.",
    tags: ["Web3", "Frontend"],
    color: '#FBDB4C',
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "NeonGrid",
    description: "A dark-mode cyberpunk task manager for extreme productivity.",
    tags: ["Productivity", "TypeScript"],
    color: '#56CCF2',
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "RetroRun",
    description: "Endless runner game assets and UI. A tribute to 8-bit classic gaming.",
    tags: ["Game Dev", "Asset Design"],
    color: '#FF4D4D',
    image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=800&auto=format&fit=crop"
  }
];
