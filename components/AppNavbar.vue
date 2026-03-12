<script setup lang="ts">
const colorMode = useColorMode()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { name: 'Bosh sahifa', href: '#hero' },
  { name: 'Men haqimda', href: '#about' },
  { name: 'Ko\'nikmalar', href: '#skills' },
  { name: 'Tajriba', href: '#experience' },
  { name: 'Loyihalar', href: '#projects' },
  { name: 'Aloqa', href: '#contact' },
]

function toggleTheme() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

function scrollTo(href: string) {
  isMenuOpen.value = false
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled || isMenuOpen
        ? 'bg-white dark:bg-dark-bg backdrop-blur-lg shadow-sm'
        : 'bg-transparent',
    ]"
  >
    <div class="section-container">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a
          href="#hero"
          class="text-xl font-bold gradient-text"
          @click.prevent="scrollTo('#hero')"
        >
          &lt;JR /&gt;
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-6">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.name }}
          </a>

          <!-- Theme Toggle -->
          <button
            class="flex items-center justify-center p-2.5 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-card hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
            aria-label="Temani o'zgartirish"
            @click="toggleTheme"
          >
            <Icon
              :name="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'"
              class="w-[18px] h-[18px]"
            />
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center gap-3 md:hidden">
          <button
            class="p-2.5 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-card hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300"
            aria-label="Temani o'zgartirish"
            @click="toggleTheme"
          >
            <Icon
              :name="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'"
              class="w-[18px] h-[18px]"
            />
          </button>
          <button
            class="flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
            aria-label="Menyu"
            @click="isMenuOpen = !isMenuOpen"
          >
            <Icon
              :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'"
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMenuOpen"
          class="md:hidden pb-4 border-t border-gray-200 dark:border-dark-border"
        >
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="block py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.name }}
          </a>
        </div>
      </Transition>
    </div>
  </nav>
</template>
