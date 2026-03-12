<script setup lang="ts">
const roles = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer']
const currentRole = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

function typeEffect() {
  const current = roles[roleIndex.value]

  if (!isDeleting.value) {
    currentRole.value = current.substring(0, charIndex.value + 1)
    charIndex.value++

    if (charIndex.value === current.length) {
      setTimeout(() => { isDeleting.value = true }, 2000)
    }
  } else {
    currentRole.value = current.substring(0, charIndex.value - 1)
    charIndex.value--

    if (charIndex.value === 0) {
      isDeleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
    }
  }

  setTimeout(typeEffect, isDeleting.value ? 50 : 100)
}

onMounted(() => {
  typeEffect()
})
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center relative overflow-hidden bg-grid">
    <!-- Background decoration -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl" />
    </div>

    <div class="section-container w-full">
      <div class="max-w-3xl" data-aos="fade-up">
        <p class="text-primary-600 dark:text-primary-400 font-mono text-sm md:text-base mb-4">
          Assalomu alaykum, mening ismim
        </p>

        <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
          <span class="gradient-text">Jamshid Raximov</span>
        </h1>

        <div class="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-10">
          {{ currentRole }}<span class="typewriter-cursor" />
        </div>

        <p class="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
          Zamonaviy va samarali web ilovalar yaratishga ixtisoslashgan dasturchiman.
          Foydalanuvchi tajribasiga e'tibor qaratib, toza va sifatli kod yozaman.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 mb-10">
          <a href="#projects" class="btn-primary" @click.prevent="$el.closest('section')?.parentElement?.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })">
            <Icon name="lucide:folder-open" class="w-5 h-5" />
            Loyihalarim
          </a>
          <a href="#contact" class="btn-outline" @click.prevent="$el.closest('section')?.parentElement?.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })">
            <Icon name="lucide:mail" class="w-5 h-5" />
            Bog'lanish
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex items-center gap-4">
          <a
            v-for="social in [
              { icon: 'lucide:github', href: 'https://github.com/JamshidDev', label: 'GitHub' },
              { icon: 'lucide:linkedin', href: 'https://www.linkedin.com/in/jamacoder/', label: 'LinkedIn' },
              { icon: 'lucide:send', href: 'https://t.me/Jama_codes', label: 'Telegram' },
            ]"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="social.label"
            class="flex items-center justify-center p-3 rounded-lg bg-gray-100 dark:bg-dark-card hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
          >
            <Icon :name="social.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <Icon name="lucide:chevron-down" class="w-6 h-6 text-gray-400" />
    </div>
  </section>
</template>
