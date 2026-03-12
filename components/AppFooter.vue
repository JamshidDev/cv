<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navLinks = [
  { name: 'Bosh sahifa', href: '#hero' },
  { name: 'Men haqimda', href: '#about' },
  { name: 'Ko\'nikmalar', href: '#skills' },
  { name: 'Tajriba', href: '#experience' },
  { name: 'Loyihalar', href: '#projects' },
  { name: 'Aloqa', href: '#contact' },
]

const socials = [
  { icon: 'lucide:github', href: 'https://github.com/JamshidDev', label: 'GitHub' },
  { icon: 'lucide:linkedin', href: 'https://www.linkedin.com/in/jamacoder/', label: 'LinkedIn' },
  { icon: 'lucide:send', href: 'https://t.me/Jama_codes', label: 'Telegram' },
]

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="bg-gray-50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-dark-border">
    <div class="section-container py-12">
      <!-- Top row: Logo + Nav + Socials -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Logo & Description -->
        <div>
          <a href="#hero" class="text-xl font-bold gradient-text" @click.prevent="scrollTo('#hero')">
            &lt;JR /&gt;
          </a>
          <p class="text-sm text-gray-500 dark:text-gray-500 mt-3 leading-relaxed">
            Zamonaviy web ilovalar yaratishga ixtisoslashgan Full Stack dasturchi.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-sm font-semibold mb-3 text-gray-900 dark:text-gray-200">Sahifalar</h4>
          <div class="grid grid-cols-2 gap-2">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="text-sm text-gray-500 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              @click.prevent="scrollTo(link.href)"
            >
              {{ link.name }}
            </a>
          </div>
        </div>

        <!-- Socials -->
        <div>
          <h4 class="text-sm font-semibold mb-3 text-gray-900 dark:text-gray-200">Ijtimoiy tarmoqlar</h4>
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="flex items-center justify-center p-2.5 rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card hover:border-primary-500 dark:hover:border-primary-500 text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
            >
              <Icon :name="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-200 dark:border-dark-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-gray-400 dark:text-gray-600">
          &copy; {{ currentYear }} <span class="gradient-text font-semibold">Jamshid Raximov</span>. Barcha huquqlar himoyalangan.
        </p>

        <!-- Scroll to top -->
        <button
          class="flex items-center justify-center p-2.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300 shadow-lg shadow-primary-600/20"
          aria-label="Yuqoriga"
          @click="scrollToTop"
        >
          <Icon name="lucide:arrow-up" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </footer>
</template>
