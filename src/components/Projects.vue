<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { useActiveSection } from '@/composables/useActiveSection';
import Project from '@/components/Project.vue';
import Tailwind from '@/assets/icons/Tailwind.vue';
import Vue from '@/assets/icons/Vue.vue';
import sintacc from '@/assets/images/sintacc-project.png';

const { activeSection } = useActiveSection();

const TAGS = {
  TAILWIND: { name: 'Tailwind CSS', class: 'bg-[#003159] text-white', icon: Tailwind },
  VUE:      { name: 'Vue.js',       class: 'bg-gray-800 text-white',  icon: Vue },
  NEXTJS:   { name: 'Next.js',      class: 'bg-gray-800 text-white',  icon: null },
  TYPESCRIPT: { name: 'TypeScript', class: 'bg-blue-700 text-white',  icon: null },
  SUPABASE: { name: 'Supabase',     class: 'bg-[#0a231c] text-[#3ecf8e] border-[#3ecf8e]/30', icon: null },
  VERCEL:   { name: 'Vercel',       class: 'bg-black text-white',     icon: null },
}

const projects = [
  {
    title: 'Good Vibes ✦ Bagues Online Store',
    description: 'A lightweight e-commerce platform for a beauty and wellness brand. Customers can browse the public catalog with category and brand filters, view featured products in an animated slider, and place orders directly via WhatsApp. The admin panel, protected with Google OAuth, allows full product and combo management with built-in image uploads.',
    technologies: [TAGS.NEXTJS, TAGS.TYPESCRIPT, TAGS.SUPABASE, TAGS.TAILWIND, TAGS.VERCEL],
    img: sintacc,
    github: 'https://github.com/agusOlivieri/bagues-ecommerce',
    live: 'https://bagues-ecommerce.vercel.app/',
  },
  {
    title: 'Weather Dashboard',
    description: 'App para consultar el clima en tiempo real usando una API externa.',
    technologies: [TAGS.TAILWIND],
    img: sintacc,
    github: 'https://github.com/tuusuario/weather-dashboard',
  },
  {
    title: 'E-commerce Layout',
    description: 'Diseño responsivo para una tienda online, con carrito funcional.',
    technologies: [TAGS.TAILWIND],
    img: sintacc,
    github: 'https://github.com/tuusuario/ecommerce-layout',
  },
]

// ─── Scroll-reveal logic moved to App.vue globally ───
</script>

<template>
  <div class="pt-16">

    <!-- Section header -->
    <div class="flex items-center gap-4 mb-10">
      <div
        class="font-pixel text-[9px] text-terminal tracking-wider transition-all duration-300 transform origin-left"
        :class="{ 'scale-110 text-glow-terminal brightness-125': activeSection === '#projects-section' }"
      >
        &gt; PROJECT_FILES/
      </div>
      <div class="flex-1 h-px bg-terminal/20"></div>
      <div class="font-retro text-xs text-terminal/50 tabular-nums">
        {{ projects.length }}&nbsp;files
      </div>
    </div>

    <!-- Project cards with alternating slide-in -->
    <Project
      v-for="(project, index) in projects"
      :key="index"
      :title="project.title"
      :description="project.description"
      :image="project.img"
      :technologies="project.technologies"
      :githubLink="project.github"
      :liveLink="project.live"
      :index="index"
    />

  </div>
</template>