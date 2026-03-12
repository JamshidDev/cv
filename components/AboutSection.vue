<script setup lang="ts">
const stats = [
  { value: '5+', label: 'Yillik tajriba' },
  { value: '30+', label: 'Loyihalar' },
  { value: '15+', label: 'Mamnun mijozlar' },
  { value: '10+', label: 'Texnologiyalar' },
]
</script>

<template>
  <section id="about" class="section-padding">
    <div class="section-container">
      <h2 class="section-title" data-aos="fade-up">
        Men <span class="gradient-text">haqimda</span>
      </h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Kim bo'lishim va nima qilishimni bilishingiz uchun
      </p>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative" data-aos="fade-right">
          <div class="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden z-10">
            <img
              src="/images/avatar.jpg"
              alt="Jamshid Raximov"
              class="w-full h-full object-cover object-top rounded-2xl border-2 border-gray-200 dark:border-dark-border"
              loading="lazy"
            />
          </div>
          <!-- Decorative borders -->
          <div class="absolute -bottom-3 -right-3 w-full max-w-md mx-auto aspect-square border-2 border-primary-500/40 rounded-2xl -z-10 left-1/2 -translate-x-[calc(50%-0.75rem)]" />
          <div class="absolute -bottom-6 -right-6 w-full max-w-md mx-auto aspect-square border-2 border-primary-500/20 rounded-2xl -z-20 left-1/2 -translate-x-[calc(50%-1.5rem)]" />
          <div class="absolute -bottom-9 -right-9 w-full max-w-md mx-auto aspect-square border-2 border-primary-500/10 rounded-2xl -z-30 left-1/2 -translate-x-[calc(50%-2.25rem)]" />
        </div>

        <!-- Content -->
        <div data-aos="fade-left">
          <h3 class="text-2xl font-bold mb-4">
            Full Stack <span class="gradient-text">Developer</span>
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Men zamonaviy web texnologiyalar yordamida foydalanuvchilarga qulay va samarali
            ilovalar yarataman. Har bir loyihaga kreativ yondashib, eng yaxshi natijaga erishishga harakat qilaman.
          </p>
          <p class="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Frontend va Backend texnologiyalarini mukammal bilib, to'liq tsiklli ilovalar
            yarata olaman. Jamoa bilan ishlash va yangi texnologiyalarni o'rganish menga
            katta zavq beradi.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div
              v-for="(stat, i) in stats"
              :key="stat.label"
              class="text-center p-4 card card-hover"
              data-aos="zoom-in"
              :data-aos-delay="i * 100"
            >
              <div class="text-2xl md:text-3xl font-bold gradient-text mb-1">{{ stat.value }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
