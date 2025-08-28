export interface Skill {
  name: string;
  icon: string | React.ReactNode;
  color: string;
  level: number;
}

export interface Experience {
  dateRange: string;
  present?: string;
  companyName: string;
  jobTitle: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  iconClass?: string;
}

export interface Education {
  degree: string;
  institution: string;
  dateRange: string;
  description?: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  image: 'laptop' | 'tablet' | 'phone';
  tags: string[];
  featured?: boolean;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}

// Dummy export to ensure bundler treats this as a module with runtime exports
export const __dummy__ = true;