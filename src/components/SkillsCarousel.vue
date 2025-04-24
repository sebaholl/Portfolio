<template>
  <section class="bg-zinc-900 py-20 overflow-hidden">
    <!-- <div class="text-center !mb-12">
      <h2 class="text-4xl font-bold text-white">Tools</h2>
      <p class="text-slate-400 gap-8">Technologies & Tools I work with</p>
    </div> -->

    <div class="relative max-w-7xl mt">
      <div ref="track" class="flex animate-scroll gap-8">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="flex-shrink-0 w-48 h-40 bg-zinc-800 rounded-2xl flex flex-col items-center justify-center text-white shadow-md hover:scale-105 transition-transform"
        >
          <font-awesome-icon :icon="skill.icon" class="text-5xl mb-3 text-cyan-400" />

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsLoop",
  data() {
    return {
      skills: [
        { name: "HTML5", icon: ["fab", "html5"] },
        { name: "CSS3", icon: ["fab", "css3-alt"] },
        { name: "JavaScript", icon: ["fab", "js"] },
        { name: "Vue.js", icon: ["fab", "vuejs"] },
        { name: "WordPress", icon: ["fab", "wordpress"] },
        { name: "PHP", icon: ["fab", "php"] },
        { name: "Illustrator", icon: ["fas", "pen-nib"] },
        { name: "Premiere Pro", icon: ["fas", "video"] },
        { name: "Photoshop", icon: ["fas", "image"] },
        { name: "After Effects", icon: ["fas", "magic"] }
      ]
    };
  },
  mounted() {
    const track = this.$refs.track;

    let scrollSpeed = 0.5;

    const loop = () => {
      track.scrollLeft += scrollSpeed;
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }
};
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 60s linear infinite;
}
</style>
