<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import HeroSection from './components/HeroSection.vue';
import AboutMeSection from './components/AboutMeSection.vue';
import SkillsCarousel from './components/SkillsCarousel.vue';
import SkillsDetails from "@/components/SkillsDetails.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";


const rectangles = [
  // Top edge
  { top: '0', left: '0', width: '10', height: '10', rotate: '3' },
  { top: '0', right: '0', width: '12', height: '12', rotate: '-6' },
  { top: '0', left: '25%', width: '14', height: '14', rotate: '6' },
  { top: '0', right: '25%', width: '14', height: '14', rotate: '-6' },

  // Bottom edge
  { bottom: '0', left: '0', width: '8', height: '8', rotate: '12' },
  { bottom: '0', right: '0', width: '14', height: '14', rotate: '-8' },
  { bottom: '0', left: '25%', width: '12', height: '12', rotate: '3' },
  { bottom: '0', right: '25%', width: '10', height: '10', rotate: '-3' },

  // Left edge
  { top: '10%', left: '0', width: '16', height: '16', rotate: '6' },
  { top: '25%', left: '0', width: '12', height: '12', rotate: '3' },
  { top: '40%', left: '0', width: '10', height: '10', rotate: '-3' },
  { top: '55%', left: '0', width: '14', height: '14', rotate: '6' },
  { top: '70%', left: '0', width: '12', height: '12', rotate: '-6' },
  { bottom: '10%', left: '0', width: '10', height: '10', rotate: '3' },

  // Right edge
  { top: '10%', right: '0', width: '16', height: '16', rotate: '-6' },
  { top: '25%', right: '0', width: '12', height: '12', rotate: '-3' },
  { top: '40%', right: '0', width: '10', height: '10', rotate: '3' },
  { top: '55%', right: '0', width: '14', height: '14', rotate: '-6' },
  { top: '70%', right: '0', width: '12', height: '12', rotate: '6' },
  { bottom: '10%', right: '0', width: '10', height: '10', rotate: '-3' },
];
</script>

<template>
  <div class="relative min-h-screen bg-zinc-900 text-slate-100 overflow-hidden">
    <!-- Decorative Rectangles (Frames) -->
    <div
      v-for="(rect, index) in rectangles"
      :key="index"
      class="absolute border-4 border-teal-500 opacity-50 rounded-lg"
      :style="{
        top: rect.top || 'auto',
        bottom: rect.bottom || 'auto',
        left: rect.left || 'auto',
        right: rect.right || 'auto',
        width: `${rect.width}rem`,
        height: `${rect.height}rem`,
        transform: `rotate(${rect.rotate}deg) ${rect.translateY ? `translateY(${rect.translateY})` : ''}`
      }"
    ></div>

    <!-- Main Content -->
    <NavbarComponent />
    <main class="pt-24 px-6 pb-6 relative z-10">
      <HeroSection />
      <AboutMeSection />
      <SkillsCarousel />
      <SkillsDetails />
      <ProjectsComponent />
      <ContactComponent />
    </main>
    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>


<style scoped>




/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>

