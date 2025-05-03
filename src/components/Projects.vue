<script setup>
import Project from '@/components/Project.vue';
import Tailwind from '@/assets/icons/Tailwind.vue';
import Vue from '@/assets/icons/Vue.vue';
import sintacc from '@/assets/images/sintacc-project.png';

const TAGS = {
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: Tailwind
    },
    VUE: {
      name: "Vue.js",
      class: "bg-gray-800 text-white",
      icon: Vue
    }
}

const projects = [
  {
    title: "To-Do App",
    description: "Una aplicación simple para gestionar tareas con almacenamiento local.",
    technologies: [TAGS.TAILWIND, TAGS.VUE],
    img: sintacc,
    github: "https://github.com/tuusuario/todo-app"
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
      <i class="pi pi-code mt-1" style="font-size: 2rem"></i>
      <h2 class="text-2xl lg:text-4xl text-gray-100 font-semibold">Projects</h2>
    </div>
    <Project v-for="(project, index) in projects" :key="index"
        :title="project.title" 
        :description="project.description"
        :image="project.img" 
        :technologies="project.technologies" 
        :githubLink="project.github"
    />
  </div>
</template>