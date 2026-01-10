
export interface Experience {
  role: string;
  duration: string;
  tasks: string[];
}

export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
