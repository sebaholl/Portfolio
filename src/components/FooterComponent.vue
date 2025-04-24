<template>
  <footer class="bg-zinc-800 text-slate-100 px-6 py-4 relative shadow-inner ">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-4">
      <!-- Horní řádek: vlevo logo, vpravo copyright -->
      <div class="w-full flex flex-col md:flex-row justify-between items-center md:items-center gap-2">
        <!-- Logo + jméno vlevo -->
        <div class="flex items-center gap-2">
          <img src="@/images/SH_logo.png" alt="Sebastian Höll Logo" class="h-10" />
          <span class="text-sm md:text-base font-medium text-center md:text-left">Sebastian Höll</span>
        </div>

        <!-- Copyright vpravo -->
        <p class="text-sm md:mt-0 text-slate-400 text-center md:text-right w-full md:w-auto md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2">
          &copy; {{ year }} All Rights Reserved.
        </p>
      </div>

      <!-- Odkaz "Zpět nahoru" -->
      <div
        class="w-full text-center pt-4 md:pt-0 md:w-auto md:absolute md:left-1/2 md:bottom-4 md:-translate-x-1/2"
      >
        <a
          href="#"
          @click.prevent="scrollToTop"
          class="text-teal-400 hover:text-teal-300 transition text-sm"
        >
          ⬆ Back to top
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>










