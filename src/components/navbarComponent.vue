<template>
  <header class="bg-zinc-800 text-slate-100 px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50">

    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <img
        src="/src/images/SH_logo.png"
        alt="Sebastian Höll Logo"
        class="h-18 w-auto"
      />

      <!-- Desktop Menu -->
      <nav class="hidden md:flex items-center gap-8 ml-auto">
        <a
          v-for="(item, index) in menuItems"
          :key="index"
          :href="item.href"
          class="relative text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 text-shadow hover:text-sky-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-sky-400 after:transition-all after:duration-300"
        >
          {{ item.text }}
        </a>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-sky-400 text-3xl" @click="toggleMenu">
        ☰
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div
      v-if="isMenuOpen"
      class="md:hidden flex flex-col gap-4 px-6 pb-4 transition-all duration-500 ease-in-out transform"
      :class="{'translate-x-0 opacity-100': isMenuOpen, '-translate-x-full opacity-0': !isMenuOpen}"
    >
      <a
        v-for="(item, index) in menuItems"
        :key="index"
        :href="item.href"
        class="text-slate-100 hover:text-sky-400 transition"
        @click="scrollToSection(item.href.substring(1))"
      >
        {{ item.text }}
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// Menu items data (dynamic)
const menuItems = ref([
  { text: 'About me', href: '#about' },
  { text: 'Tools', href: '#tools' },
  { text: 'Projects', href: '#projects' },
  { text: 'Contact', href: '#contact' }
])

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  section?.scrollIntoView({ behavior: 'smooth' })
  isMenuOpen.value = false // zavře menu po kliknutí
}
</script>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.6);
}
</style>


