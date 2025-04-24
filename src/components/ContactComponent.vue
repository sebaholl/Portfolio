<template>
  <section id="contact" class="bg-zinc-900 text-white px-6 py-24 flex flex-col items-center">
    <div class="max-w-2xl w-full">
      <h2 class="text-4xl sm:text-5xl font-extrabold !mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
        Let's Connect!
      </h2>

      <form
        ref="contactForm"
        action="https://formspree.io/f/movdqelw"
        method="POST"
        @submit="clearForm"
        class="space-y-6 p-6 bg-zinc-800 rounded-xl border border-zinc-700"
      >
        <div>
          <input
            ref="name"
            type="text"
            name="name"
            placeholder="Your Name"
            class="w-full bg-transparent border-b-2 border-zinc-600 text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-all py-2"
            required
          />
        </div>

        <div>
          <input
            ref="email"
            type="email"
            name="email"
            placeholder="Your Email"
            class="w-full bg-transparent border-b-2 border-zinc-600 text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-all py-2"
            required
          />
        </div>

        <div>
          <textarea
            ref="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            class="w-full bg-transparent border-b-2 border-zinc-600 text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-all py-2 resize-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold py-3 rounded-xl hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>

    <!-- Social Links Bar -->
    <div class="!mt-16 px-4">
  <div
    class="flex flex-wrap justify-center border border-zinc-700 rounded-full overflow-hidden divide-x divide-zinc-700 text-white text-center"
  >
    <a
      v-for="(link, index) in socialLinks"
      :key="index"
      :href="link.url"
      target="_blank"
      rel="noopener noreferrer"
      class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:py-4 hover:bg-white hover:text-black transition-all duration-300"
    >
      <font-awesome-icon :icon="link.icon" class="text-xl" />
      <span class="uppercase tracking-wide text-sm font-medium">{{ link.label }}</span>
      <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="text-xs" />
    </a>
  </div>
</div>
  </section>
</template>

<script>
export default {
  name: 'ContactComponent',
  methods: {
    clearForm() {
      setTimeout(() => {
        this.$refs.name.value = ''
        this.$refs.email.value = ''
        this.$refs.message.value = ''
      }, 100)
    }
  },
  data() {
    return {
      socialLinks: [
        {
          label: 'GitHub',
          url: 'https://github.com/sebaholl',
          icon: ['fab', 'github']
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/sebastian-h%C3%B6ll/',
          icon: ['fab', 'linkedin']
        },
        {
          label: 'Instagram',
          url: 'https://www.instagram.com/seba_holl/',
          icon: ['fab', 'instagram']
        },
        {
          label: 'WhatsApp',
          url: 'https://wa.me/4520857660',
          icon: ['fab', 'whatsapp']
        }
      ]
    }
  }
}
</script>

<style scoped>
input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
}

button:active {
  transform: scale(0.98);
}
</style>
