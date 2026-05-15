export interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  techStack: string[];
}

const projectsData: Project[] = [
  {
    id: 'smart-gym',
    title: 'Smart-gym',
    description: 'Administration platform featuring an analytic dashboard and inventory management system',
    coverImage: 'smart-gym-cover.png',
    techStack: ['mongodb', 'express', 'react', 'node']
  },
  {
    id: 'duo-doodle',
    title: 'Duo-Doodle',
    description: 'Real-time communication channels maximizing user collaboration',
    coverImage: 'duo-doodle-cover.png',
    techStack: ['postgresql', 'express', 'react', 'node']
  }
];

export default projectsData;
