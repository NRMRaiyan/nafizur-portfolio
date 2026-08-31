export type Project = {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 'kohela-shomitti',
    number: '01',
    title: 'Kohela Muslim Samity',
    eyebrow: 'Community management platform',
    description:
      'A modern platform concept for simplifying community communication, organization, and shared information.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com/NRMRaiyan/kohela-muslim-shomiti',
    live: 'https://kohela-muslim-shomiti.vercel.app/',
    featured: true,
  },
  // {
  //   id: 'project-two',
  //   number: '02',
  //   title: 'Project Two',
  //   eyebrow: 'Full-stack application',
  //   description:
  //     'Replace this placeholder with one of your strongest real projects and explain the problem, solution, and result.',
  //   technologies: ['React', 'Node.js', 'REST API'],
  //   github: 'https://github.com/yourusername',
  //   live: '#contact',
  //   featured: true,
  // },
  // {
  //   id: 'project-three',
  //   number: '03',
  //   title: 'Project Three',
  //   eyebrow: 'Interactive web platform',
  //   description:
  //     'A space for another project, research build, university system, or engineering experiment.',
  //   technologies: ['TypeScript', 'Next.js', 'Git'],
  //   github: 'https://github.com/yourusername',
  //   live: '#contact',
  //   featured: true,
  // },
];
