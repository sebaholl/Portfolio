<template>
  <section
    id="about"
    class="about-me bg-zinc-900 px-6 text-slate-100 flex items-center justify-center transition-all duration-500 scroll-mt-[80px]"
    :class="videoVisible ? 'py-0' : 'py-16'">

    <div class="w-full max-w-4xl text-center space-y-10">
      <!-- Nadpis a text -->
      <div>
        <h2 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 !mb-4">
          About Me
        </h2>
        <p class="text-lg text-slate-300 leading-relaxed">
          I'm <span class="font-semibold text-white">Sebastian</span>, a passionate Front-End Developer who loves creating clean, modern, and interactive websites. I specialize in using <span class="text-teal-300">Vue.js</span> and <span class="text-teal-300">Tailwind CSS</span> to build beautiful and functional web experiences. I focus on making websites that are easy to use, fast, and responsive. I always follow the best practices to ensure that every project is high-quality and efficient. If you're looking to create a great online presence or improve your website, I’d love to help bring your ideas to life! Let’s work together!
        </p>
      </div>

      <!-- Tlačítka -->
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4 !mt-4">
        <button
          @click="toggleVideo"
          class="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-zinc-900 font-semibold rounded-full hover:from-teal-400 hover:to-cyan-400 transition duration-300 shadow-lg"
        >
          {{ videoVisible ? 'Hide Video' : 'Watch Video CV' }}
        </button>
        <a href="/SebastianHoll_CV.pdf" download>
          <button class="px-8 py-3 bg-slate-800 text-white font-semibold rounded-full hover:bg-slate-700 transition duration-300 shadow-md">
            Download My CV
          </button>
        </a>
      </div>

      <!-- Video -->
      <transition name="fade">
        <div v-if="videoVisible" class="!mt-8 flex justify-center">
          <div class="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-teal-500">
            <iframe
              :src="videoUrl"
              frameborder="0"
              allowfullscreen
              class="w-full h-[80vh]"
            ></iframe>
          </div>
        </div>
      </transition>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videoVisible: false,
      videoUrl: "https://www.youtube.com/embed/Vxkwo2MpExM?si=9NlNp-cULE68Dhpl"
    };
  },
  methods: {
    toggleVideo() {
      this.videoVisible = !this.videoVisible;
    }
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

