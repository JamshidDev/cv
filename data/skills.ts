export interface Skill {
  name: string
  icon: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Vue.js / Nuxt', icon: 'logos:vue' },
      { name: 'React / Next.js', icon: 'logos:react' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'HTML/CSS', icon: 'logos:html-5' },
      { name: 'JavaScript', icon: 'logos:javascript' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'NestJS', icon: 'logos:nestjs' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
      { name: 'Redis', icon: 'logos:redis' },
      { name: 'Docker', icon: 'logos:docker-icon' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'Linux', icon: 'logos:linux-tux' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'VS Code', icon: 'logos:visual-studio-code' },
    ],
  },
]
