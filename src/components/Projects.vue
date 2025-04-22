<script setup>
import Project from '@/components/Project.vue';

const projects = [
  {
    title: "To-Do App",
    description: "Una aplicación simple para gestionar tareas con almacenamiento local.",
    technologies: ["Vue.js", "TailwindCSS", "LocalStorage"],
    github: "https://github.com/tuusuario/todo-app"
  },
  {
    title: "Weather Dashboard",
    description: "App para consultar el clima en tiempo real usando una API externa.",
    technologies: ["Vue 3", "Axios", "OpenWeather API"],
    github: "https://github.com/tuusuario/weather-dashboard"
  },
  {
    title: "E-commerce Layout",
    description: "Diseño responsivo para una tienda online, con carrito funcional.",
    technologies: ["Vue.js", "Pinia", "TailwindCSS"],
    github: "https://github.com/tuusuario/ecommerce-layout"
  }
];
</script>

<template>
  <div class="pt-18">
    <h2 class="text-2xl lg:text-4xl mb-8 text-gray-100 font-semibold">Projects</h2>
    <Project v-for="(project, index) in projects" :key="index"
        :title="project.title" 
        :description="project.description" 
        :technologies="project.technologies" 
        :githubLink="project.github"
    />
  </div>
</template>