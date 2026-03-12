<script setup lang="ts">
useSeoMeta({
  title: 'Jamshid Raximov - Full Stack Developer',
  description: 'Jamshid Raximov - Full Stack Developer portfolio. Zamonaviy web ilovalar yaratishga ixtisoslashgan dasturchi.',
  ogTitle: 'Jamshid Raximov - Full Stack Developer',
  ogDescription: 'Jamshid Raximov - Full Stack Developer portfolio. Zamonaviy web ilovalar yaratishga ixtisoslashgan dasturchi.',
  ogImage: '/og-image.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Jamshid Raximov - Full Stack Developer',
  twitterDescription: 'Jamshid Raximov - Full Stack Developer portfolio. Zamonaviy web ilovalar yaratishga ixtisoslashgan dasturchi.',
  twitterImage: '/og-image.png',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Jamshid Raximov',
        jobTitle: 'Full Stack Developer',
        url: 'https://yourname.dev',
        sameAs: [
          'https://github.com/username',
          'https://linkedin.com/in/username',
          'https://t.me/username',
        ],
        knowsAbout: ['Web Development', 'Vue.js', 'React', 'Node.js', 'TypeScript'],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
  </div>
</template>
