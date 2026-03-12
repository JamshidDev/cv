<script setup lang="ts">
const form = reactive({
  name: '',
  phone: '+998 ',
  message: '',
})

function formatPhone(e: Event) {
  const input = e.target as HTMLInputElement
  let value = input.value.replace(/[^\d+]/g, '')

  if (!value.startsWith('+998')) {
    value = '+998' + value.replace(/^\+?998?/, '')
  }

  const digits = value.slice(4)
  let formatted = '+998'
  if (digits.length > 0) formatted += ' ' + digits.slice(0, 2)
  if (digits.length > 2) formatted += ' ' + digits.slice(2, 5)
  if (digits.length > 5) formatted += ' ' + digits.slice(5, 7)
  if (digits.length > 7) formatted += ' ' + digits.slice(7, 9)

  form.phone = formatted
}

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

async function handleSubmit() {
  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form,
    })
    submitStatus.value = 'success'
    form.name = ''
    form.phone = '+998 '
    form.message = ''
  } catch {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
    setTimeout(() => { submitStatus.value = 'idle' }, 5000)
  }
}

const contactInfo = [
  { icon: 'lucide:mail', label: 'Email', value: 'raximovj662@gmail.com', href: 'mailto:raximovj662@gmail.com' },
  { icon: 'lucide:phone', label: 'Telefon', value: '+998 97 771 60 04', href: 'tel:+998977716004' },
  { icon: 'lucide:map-pin', label: 'Manzil', value: 'Toshkent, O\'zbekiston', href: null },
]
</script>

<template>
  <section id="contact" class="section-padding bg-gray-50 dark:bg-white/[0.02] bg-grid">
    <div class="section-container">
      <h2 class="section-title" data-aos="fade-up">
        <span class="gradient-text">Bog'lanish</span>
      </h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Loyihangiz haqida gaplashamizmi? Menga xabar yuboring
      </p>

      <div class="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
        <!-- Contact Info -->
        <div class="md:col-span-2 space-y-6" data-aos="fade-right">
          <div
            v-for="info in contactInfo"
            :key="info.label"
            class="flex items-start gap-4"
          >
            <div class="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
              <Icon :name="info.icon" class="w-5 h-5" />
            </div>
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ info.label }}</p>
              <component
                :is="info.href ? 'a' : 'p'"
                :href="info.href || undefined"
                class="font-medium text-gray-900 dark:text-gray-100"
                :class="info.href ? 'hover:text-primary-600 dark:hover:text-primary-400 transition-colors' : ''"
              >
                {{ info.value }}
              </component>
            </div>
          </div>

          <!-- Social -->
          <div class="pt-4">
            <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">Ijtimoiy tarmoqlar</p>
            <div class="flex gap-3">
              <a
                v-for="social in [
                  { icon: 'lucide:github', href: 'https://github.com/JamshidDev' },
                  { icon: 'lucide:linkedin', href: 'https://www.linkedin.com/in/jamacoder/' },
                  { icon: 'lucide:send', href: 'https://t.me/Jama_codes' },
                ]"
                :key="social.href"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center p-3 rounded-lg bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
              >
                <Icon :name="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <form class="md:col-span-3 space-y-4" data-aos="fade-left" @submit.prevent="handleSubmit">
          <div>
            <label for="name" class="block text-sm font-medium mb-1">Ismingiz</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              minlength="2"
              maxlength="50"
              placeholder="Ismingizni kiriting"
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border focus:border-primary-500 dark:focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-gray-900 dark:text-gray-100 placeholder-gray-400"
            />
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium mb-1">Telefon raqam</label>
            <input
              id="phone"
              :value="form.phone"
              type="tel"
              required
              maxlength="17"
              placeholder="+998 XX XXX XX XX"
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border focus:border-primary-500 dark:focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-gray-900 dark:text-gray-100 placeholder-gray-400"
              @input="formatPhone"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium mb-1">Xabar</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              minlength="5"
              maxlength="500"
              rows="5"
              placeholder="Xabaringizni yozing..."
              class="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border focus:border-primary-500 dark:focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors text-gray-900 dark:text-gray-100 placeholder-gray-400 resize-none"
            />
          </div>

          <!-- Status Messages -->
          <div v-if="submitStatus === 'success'" class="text-green-600 dark:text-green-400 text-sm flex items-center gap-2">
            <Icon name="lucide:check-circle" class="w-4 h-4" />
            Xabaringiz muvaffaqiyatli yuborildi!
          </div>
          <div v-if="submitStatus === 'error'" class="text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
            <Icon name="lucide:alert-circle" class="w-4 h-4" />
            Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.
          </div>

          <button
            type="submit"
            class="btn-primary w-full justify-center"
            :disabled="isSubmitting"
          >
            <Icon v-if="isSubmitting" name="lucide:loader-2" class="w-5 h-5 animate-spin" />
            <Icon v-else name="lucide:send" class="w-5 h-5" />
            {{ isSubmitting ? 'Yuborilmoqda...' : 'Yuborish' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
