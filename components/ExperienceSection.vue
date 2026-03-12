<script setup lang="ts">
import { experiences } from '~/data/experience'

const education = {
  university: 'Toshkent davlat transport universiteti',
  degree: 'Bakalavr',
  field: 'Yer usti transport tizimlari va ularni ekspluatatsiyasi',
  year: '2023',
}
</script>

<template>
  <section id="experience" class="section-padding">
    <div class="section-container">
      <h2 class="section-title" data-aos="fade-up">
        Ish <span class="gradient-text">tajribam</span>
      </h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Professional kareriyam davomidagi ish tajribalarim
      </p>

      <div class="relative max-w-3xl mx-auto pl-8">
        <!-- Line -->
        <div class="absolute left-[5px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-800" />

        <!-- Experience -->
        <div
          v-for="(exp, i) in experiences"
          :key="i"
          class="relative mb-10 last:mb-0"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div class="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-primary-500 ring-4 ring-primary-500/20" />

          <div class="mb-1">
            <div class="flex items-baseline justify-between gap-3">
              <h3 class="font-semibold text-base">{{ exp.position }}</h3>
              <span class="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">{{ exp.duration }}</span>
            </div>
            <p class="text-primary-600 dark:text-primary-400 text-sm">{{ exp.company }}</p>
            <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{{ exp.period }}</p>
          </div>

          <p class="text-gray-600 dark:text-gray-400 text-sm mt-2 leading-relaxed">{{ exp.description }}</p>

          <div class="flex flex-wrap gap-1.5 mt-3">
            <span
              v-for="tech in exp.technologies"
              :key="tech"
              class="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Education -->
        <div class="relative mt-10" data-aos="fade-up">
          <div class="absolute -left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-green-500/20" />

          <div class="mb-1">
            <div class="flex items-baseline justify-between gap-3">
              <h3 class="font-semibold text-base">Ta'lim</h3>
              <span class="text-xs text-gray-400 dark:text-gray-500">{{ education.year }}</span>
            </div>
            <p class="text-green-600 dark:text-green-400 text-sm">{{ education.university }}</p>
          </div>

          <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">{{ education.field }}</p>
          <span class="inline-block mt-2 text-xs px-2 py-0.5 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded">
            {{ education.degree }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
