<template>
  <section id="tools" class="bg-zinc-900 py-28 px-6 text-white flex items-center justify-center scroll-mt-[80px]">
    <div class="max-w-4xl w-full text-center">
      <h2 class="text-5xl font-extrabold !mb-6">Tools I Use</h2>
      <p class="text-slate-400 text-lg !mb-16">Each tool plays a key role in how I build and design modern websites</p>

      <div class="flex flex-col items-center gap-y-10">
        <div
          v-for="(tool, index) in tools"
          :key="index"
          class="relative bg-zinc-800 rounded-2xl px-10 py-6 w-full max-w-2xl flex flex-col items-center shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
        >
          <div class="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-cyan-500 text-zinc-900 !font-bold rounded-full shadow-md">
            {{ index + 1 }}
          </div>
          <h3 class="text-2xl font-semibold mb-2 mt-6">{{ tool.name }}</h3>
          <p class="text-slate-400 text-base">{{ tool.description }}</p>
        </div>
      </div>
    </div>
  </section>
  <div class="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-16">
  <hr class="w-full max-w-7xl mx-auto border-t border-zinc-700" />
</div>
</template>

<script>
export default {
  name: "SkillsDetails",
  data() {
    return {
      tools: [
        {
          name: "HTML & CSS",
          description:
            "The core of all my front-end work. I use semantic HTML and modern CSS practices with Tailwind CSS for beautiful UI."
        },
        {
          name: "JavaScript & Vue.js",
          description:
            "I create responsive and interactive interfaces with Vue.js, and keep my code modular and reusable."
        },
        {
          name: "WordPress & PHP",
          description:
            "I build custom WordPress themes with PHP, using ACF and CPT UI for dynamic and user-friendly content management."
        },
        {
          name: "Adobe Creative Cloud",
          description:
            "I use Photoshop and Illustrator to craft designs and visuals that support my web projects and marketing materials."
        },
        {
          name: "After Effects",
          description:
            "Motion design and micro-animations make interfaces come alive — I use AE for transitions and promo videos."
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>

