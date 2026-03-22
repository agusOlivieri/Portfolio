<script setup>
import Project from '@/components/Project.vue';
import Tailwind from '@/assets/icons/Tailwind.vue';
import Vue from '@/assets/icons/Vue.vue';
import sintacc from '@/assets/images/sintacc-project.png';

const TAGS = {
    TAILWIND: {
        name: "Tailwind CSS v4",
        class: "bg-[#003159] text-white",
        icon: Tailwind
    },
    VUE: {
      name: "Vue.js",
      class: "bg-gray-800 text-white",
      icon: Vue
    },
    NEXTJS: {
      name: "Next.js",
      class: "bg-gray-800 text-white",
      icon: null
    },
    TYPESCRIPT: {
      name: "TypeScript",
      class: "bg-blue-600 text-white",
      icon: null
    },
    SUPABASE: {
      name: "Supabase (PostgreSQL + Storage)",
      class: "bg-green-600 text-white",
      icon: null
    },
    VERCEL: {
      name: "Vercel",
      class: "bg-black text-white",
      icon: null
    }
}

const projects = [
  {
    title: "Good Vibes ✦ Bagues Online Store",
    description: "A lightweight e-commerce platform for a beauty and wellness brand. Customers can browse the public catalog with category and brand filters, view featured products in an animated slider, and place orders directly via WhatsApp. The admin panel, protected with Google OAuth, allows full product and combo management with built-in image uploads.",
    technologies: [TAGS.NEXTJS, TAGS.TYPESCRIPT, TAGS.SUPABASE, TAGS.TAILWIND, TAGS.VERCEL],
    img: sintacc,
    github: "https://github.com/agusOlivieri/bagues-ecommerce",
    live: "https://bagues-ecommerce.vercel.app/"
  },
  {
    title: "Weather Dashboard",
    description: "App para consultar el clima en tiempo real usando una API externa.",
    technologies: [TAGS.TAILWIND],
    img: sintacc,
    github: "https://github.com/tuusuario/weather-dashboard"
  },
  {
    title: "E-commerce Layout",
    description: "Diseño responsivo para una tienda online, con carrito funcional.",
    technologies: [TAGS.TAILWIND],
    img: sintacc,
    github: "https://github.com/tuusuario/ecommerce-layout"
  }
];
</script>

<template>
  <div class="pt-18">
    <div class="flex items-center mb-8 gap-x-2">
      <i class="pi pi-code code-icon"></i>
      <h2 class="text-2xl md:text-4xl text-gray-100 font-semibold">Projects</h2>
    </div>
    <Project v-for="(project, index) in projects" :key="index"
        :title="project.title" 
        :description="project.description"
        :image="project.img" 
        :technologies="project.technologies" 
        :githubLink="project.github"
        :liveLink="project.live"
    />
  </div>
</template>

<style scoped>
@media (width >= 48rem) {
  .code-icon {
    font-size: 2rem;
  }
}
</style>