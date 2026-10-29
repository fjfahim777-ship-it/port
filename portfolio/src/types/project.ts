export interface Award {
  title: string;
  details: string;
}

export interface Project {
  slug: string;
  name: string;
  nameBn?: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  technologies: string[];

  // Images (files are added manually by the owner)
  imageSrc: string;
  imageAlt: string;
  placeholderLabel: string;
  placeholderTone: string; // Tailwind classes for the placeholder background/text

  // Detail page content
  overview: string;
  purpose: string;
  features: string[];
  role: string;
  challenges: string[];
  learningOutcomes: string[];
  futureImprovements: string[];
  award?: Award;
}
