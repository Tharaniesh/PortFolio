export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Design',
    description: 'Interfaces and visual systems shaped for clarity, presence, and stronger brand expression.',
    items: ['UI Design', 'Product Design', 'Visual Systems', 'Information Hierarchy', 'Layout Composition']
  },
  {
    title: 'Development',
    description: 'Frontend builds focused on maintainable architecture, responsiveness, and premium interaction quality.',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Component Architecture']
  },
  {
    title: 'Creative Tech',
    description: 'Motion and spatial design used intentionally to make interfaces feel immersive without becoming noisy.',
    items: ['Three.js', 'React Three Fiber', 'Drei', 'Motion for React', 'Interactive Prototyping']
  },
  {
    title: 'Domain / Systems',
    description: 'Structured thinking applied across recommendation logic, product communication, and decision-oriented design.',
    items: ['Recommendation Systems', 'Game Design Thinking', 'Data-Informed UX', 'Spec Sheet Design', 'Workflow Structuring']
  }
];
