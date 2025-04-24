<template>
  <section class="w-full min-h-screen flex items-center justify-center bg-zinc-900 text-slate-100 px-6 md:px-16">

    <div class="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

      <!-- Text vlevo -->
      <div class="text-left max-w-xl">
        <p class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 text-2xl uppercase tracking-widest pt-10">
          Front-End Developer & Designer
        </p>

        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight pt-10 mb-6">
          Sebastian Höll
        </h1>



        <p class="text-lg md:text-xl text-slate-300 pt-10 mb-8 pb-5">
          My mission is to create modern and responsive websites with a focus on detail, usability, and visual impact.
        </p>

        <a href="#about" class="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-zinc-900 font-semibold rounded-full hover:from-teal-400 hover:to-cyan-400 transition duration-300 shadow-lg">
          Find out more
        </a>
      </div>

      <!-- Obrázek vpravo -->
      <div class="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
        <img :src="MyPhoto" alt="Sebastian Höll" class="w-full h-full object-cover" />
      </div>

    </div>
  </section>
  <div class="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-16">
  <hr class="w-full max-w-7xl mx-auto border-t border-zinc-700" />
</div>



</template>

<script setup>
import MyPhoto from '@/images/seb_photo.png'
</script>


<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

</style>
