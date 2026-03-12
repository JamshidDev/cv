<script setup lang="ts">
import { skillCategories } from '~/data/skills'
</script>

<template>
  <section id="skills" class="section-padding bg-gray-50 dark:bg-white/[0.02] bg-grid">
    <div class="section-container">
      <h2 class="section-title" data-aos="fade-up">
        Ko'nikmalarim <span class="gradient-text">&amp; Texnologiyalar</span>
      </h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Ishlatadigan asosiy texnologiyalar va vositalar
      </p>

      <div class="space-y-10">
        <div
          v-for="(category, catIdx) in skillCategories"
          :key="category.title"
          data-aos="fade-up"
          :data-aos-delay="catIdx * 100"
        >
          <h3 class="text-xl font-semibold mb-5 flex items-center gap-2">
            <span class="w-8 h-0.5 bg-primary-500" />
            {{ category.title }}
          </h3>

          <div class="flex flex-wrap gap-3">
            <div
              v-for="(skill, i) in category.skills"
              :key="skill.name"
              class="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-md hover:shadow-primary-500/10 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              data-aos="zoom-in"
              :data-aos-delay="i * 50"
            >
              <Icon :name="skill.icon" class="w-6 h-6 flex-shrink-0" />
              <span class="font-medium text-sm text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
