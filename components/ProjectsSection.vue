<script setup lang="ts">
import { projects, categories } from '~/data/projects'

const activeCategory = ref('Hammasi')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Hammasi') return projects
  return projects.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <section id="projects" class="section-padding bg-gray-50 dark:bg-dark-card/50">
    <div class="section-container">
      <h2 class="section-title" data-aos="fade-up">
        <span class="gradient-text">Loyihalarim</span>
      </h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Eng yaxshi ishlarimdan namunalar
      </p>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-2 mb-10" data-aos="fade-up" data-aos-delay="150">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
            activeCategory === cat
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
              : 'bg-white dark:bg-dark-card text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700',
          ]"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <TransitionGroup
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-for="(project, i) in filteredProjects"
            :key="project.title"
            class="card card-hover group overflow-hidden"
            data-aos="fade-up"
            :data-aos-delay="i * 100"
          >
            <!-- Image -->
            <div class="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <div class="w-full h-full flex items-center justify-center">
                <Icon name="lucide:image" class="w-12 h-12 text-gray-400 dark:text-gray-500" />
              </div>
              <!-- Overlay -->
              <div class="absolute inset-0 bg-primary-600/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-3 bg-white rounded-full text-primary-600 hover:scale-110 transition-transform"
                  aria-label="Demo"
                >
                  <Icon name="lucide:external-link" class="w-5 h-5" />
                </a>
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-3 bg-white rounded-full text-primary-600 hover:scale-110 transition-transform"
                  aria-label="GitHub"
                >
                  <Icon name="lucide:github" class="w-5 h-5" />
                </a>
              </div>
            </div>

            <!-- Content -->
            <span class="text-xs text-primary-600 dark:text-primary-400 font-medium">{{ project.category }}</span>
            <h3 class="text-lg font-bold mt-1 mb-2">{{ project.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{{ project.description }}</p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>
