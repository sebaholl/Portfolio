<template>
  <section id="projects" class="bg-zinc-900 text-slate-100 px-6 py-16 flex justify-center items-center scroll-mt-[80px]">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-4xl sm:text-5xl font-extrabold !mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
        My Projects
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-zinc-800 rounded-xl shadow-lg overflow-hidden relative cursor-pointer group"
          @click="openModal(project)"
        >
          <img :src="project.image" alt="Project Screenshot" class="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" />

          <div class="p-6">
            <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
            <p class="text-slate-300">{{ project.shortDescription }}</p>
          </div>

          <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
            <div class="text-white text-sm sm:text-base flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553 2.276A1 1 0 0120 13.118V19a1 1 0 01-1 1h-1.586a1 1 0 00-.707.293l-2.707 2.707a1 1 0 01-1.414 0L9.707 20.293a1 1 0 00-.707-.293H7a1 1 0 01-1-1v-5.882a1 1 0 01.447-.842L11 10" />
              </svg>
              <span class="text-white font-medium">Click to view details</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div v-if="selectedProject" class="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="bg-zinc-800 rounded-2xl shadow-2xl max-w-3xl w-full mx-6 p-8 relative text-left !mt-24">
          <button @click="closeModal" class="absolute top-4 right-4 text-white text-2xl hover:text-teal-400">&times;</button>
          <h3 class="text-3xl font-bold !mb-4 text-teal-400">{{ selectedProject.title }}</h3>
          <img :src="selectedProject.image" alt="Project Detail" class="mx-auto w-full max-w-xl max-h-72 object-cover rounded-lg !mb-4">
          <p class="text-slate-300 !mb-4">{{ selectedProject.description }}</p>
          <div>
            <h4 class="text-lg font-semibold text-white !mb-2">Tools Used:</h4>
            <ul class="list-disc list-inside text-slate-400">
              <li v-for="(tool, i) in selectedProject.tools" :key="i">{{ tool }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-16">
  <hr class="w-full max-w-7xl mx-auto border-t border-zinc-700" />
</div>



</template>

<script>

import Semester_project from '@/images/Google_lighthouse.jpg'
import E_commerce from '@/images/E-commerce_shop.png'
import Recipe from '@/images/Recipe_website.png'
import VideoCV from '@/images/Seb_VideoCV.jpg'
import CityBranding from '@/images/City_branding.jpg'

export default {
  data() {
    return {
      selectedProject: null,
      projects: [
        {
          title: 'Semester Project',
          shortDescription: 'Creation of campaign to support the fight against plastic pollution.',
          description: 'School Group project focused on raising awareness about plastic pollution. We used tools like HTML and CSS to build a simple promotional webpage, and GitHub to manage and share our code. Adobe Illustrator and InDesign helped us design posters and flyers, while Premiere Pro was used to create a short promo video. The goal was to deliver a clean and effective campaign across different platforms.',
          image: Semester_project,
          tools: ['HTML', 'CSS', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Adobe Indesign', 'GitHub']
        },
        {
          title: 'Recipe Website',
          shortDescription: 'First website project – simple, clean, and built from scratch.',
          description: 'This recipe website was one of my very first coding projects. I designed the layout in Figma to plan out how the site should look and feel. Then, I built it using HTML and CSS, focusing on creating a clean structure, readable content, and a visually appealing layout. It was a great introduction to front-end development and helped me understand the basics of web design and how to turn ideas into working websites.',
          image: Recipe,
          tools: ['HTML', 'CSS', 'Figma']
        },
        {
          title: 'E-commerce Website',
          shortDescription: 'Fully functional hockey e-commerce website.',
          description: 'First fully functional web project, an e-commerce website focused on hockey gear. I built the site with PHP and MySQL for back-end functionality, including user login, product pages, and a working shopping cart. I also managed the domain setup and hosting configuration, which gave me a real-world understanding of how websites go live. This project provided a solid foundation in both design and development and ignited my deeper interest in web technologies.',
          image: E_commerce,
          tools: ['HTML', 'CSS', 'PHP', 'MySQL']
        },
        {
          title: 'Video CV',
          shortDescription: 'A brief video CV showcasing my skills, experience, and background.',
          description: 'For my video CV, I created a dynamic presentation that highlights both my Front-End Development and Design skills. I wrote a script to showcase my journey and used video editing tools to produce a visually engaging, concise, and professional video. This project allowed me to combine my technical and creative abilities in a compelling way.',
          image: VideoCV,
          tools: ['Adobe Premiere Pro', 'Adobe After Effects']
        },
        {
          title: 'City Branding',
          shortDescription: 'City branding campaign with light installations and social media analysis.',
          description: 'As it was a Group Project we created a city branding campaign inspired by the Signal Festival, designing visual and video representations for a different city. We also gathered data to assess the impact of promoting the event on social media. The Signal Festival is an event in Prague that features light installations and interactive art, transforming the city into an outdoor gallery.',
          image: CityBranding,
          tools: ['Adobe Indesign', 'Adobe Photoshop', 'Adobe Premiere Pro', 'Adobe After Effects']
        }
      ]
    }
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
    },
    closeModal() {
      this.selectedProject = null;
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

