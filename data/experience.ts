export interface Experience {
  company: string
  position: string
  period: string
  duration: string
  description: string
  technologies: string[]
}

export const experiences: Experience[] = [
  {
    company: 'DAS UTY MAS\'ULIYATI CHEKLANGAN JAMIYAT',
    position: 'Frontend-dasturchi',
    period: 'Fevral 2024 — Hozir',
    duration: '2 yil va 2 oy',
    description: 'Kompaniyaning barcha xodimlari uchun mo\'ljallangan shaxsiy kabinet web-ilovasini (cabinet.dasuty.com) va HRM web-ilovasini (hrm.railway.uz) ishlab chiqishda ishtirok etdim.',
    technologies: ['Vue.js 3', 'Composition API', 'Effector', 'Pinia', 'Vuetify', 'Naive UI', 'FSD', 'Axios'],
  },
  {
    company: '"O\'ZBEKISTON TEMIR YO\'LLARI" AJ',
    position: 'Frontend-dasturchi',
    period: 'Aprel 2022 — Fevral 2024',
    duration: '1 yil va 11 oy',
    description: 'Kompaniya xodimlari uchun mo\'ljallangan HR web-ilovasini (exodim.railway.uz) ishlab chiqishda ishtirok etdim. Loyiha uchun murakkab komponentlar yaratdim va ularni amaliyotga tatbiq qildim.',
    technologies: ['Vue.js 2', 'Options API', 'Vuex', 'PrimeVue 3', 'Axios'],
  },
]
