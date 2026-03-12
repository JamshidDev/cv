export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  category: string
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'To\'liq funksional e-commerce platforma. Foydalanuvchi autentifikatsiyasi, to\'lov integratsiyasi va admin panel.',
    image: '/images/project-1.jpg',
    technologies: ['Vue.js', 'NestJS', 'PostgreSQL', 'Redis'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    category: 'Full Stack',
  },
  {
    title: 'Task Management App',
    description: 'Jamoa uchun vazifalarni boshqarish ilovasi. Real-time yangilanishlar va drag-and-drop interfeys.',
    image: '/images/project-2.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    category: 'Full Stack',
  },
  {
    title: 'Portfolio Website',
    description: 'SEO optimallashtirilgan shaxsiy portfolio sayt. Dark/Light tema va animatsiyalar.',
    image: '/images/project-3.jpg',
    technologies: ['Nuxt 3', 'Tailwind CSS', 'TypeScript'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    category: 'Frontend',
  },
  {
    title: 'REST API Service',
    description: 'Mikroservis arxitekturasida qurilgan API. JWT autentifikatsiya va Swagger dokumentatsiya.',
    image: '/images/project-4.jpg',
    technologies: ['NestJS', 'PostgreSQL', 'Docker', 'Swagger'],
    githubUrl: 'https://github.com/username/project',
    category: 'Backend',
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat ilovasi. Guruhli chatlar, fayl almashish va video qo\'ng\'iroqlar.',
    image: '/images/project-5.jpg',
    technologies: ['Vue.js', 'Socket.io', 'WebRTC', 'Node.js'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    category: 'Full Stack',
  },
  {
    title: 'Admin Dashboard',
    description: 'Analitik ma\'lumotlar bilan boy admin panel. Grafiklar, jadvallar va hisobotlar.',
    image: '/images/project-6.jpg',
    technologies: ['React', 'Chart.js', 'Tailwind CSS', 'REST API'],
    demoUrl: 'https://example.com',
    category: 'Frontend',
  },
]

export const categories = ['Hammasi', 'Full Stack', 'Frontend', 'Backend']
