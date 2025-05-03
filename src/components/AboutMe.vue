<script setup>
import TechnologyCard from '@/Components/TechnologyCard.vue';
import Vue from '@/assets/icons/Vue.vue';
import Tailwind from '@/assets/icons/Tailwind.vue';
import Mysql from '@/assets/icons/Mysql.vue';
import Spring from '@/assets/icons/Spring.vue';
import Java from '@/assets/icons/Java.vue';
import Python from '@/assets/icons/Python.vue';
import Javascript from '@/assets/icons/Javascript.vue';

const TECHNOLOGIES = {
    JAVA: {
        name: 'Java',
        class: "bg-gray-900 px-2 py-2",
        icon: Java,
    },
    SPRING: {
        name: 'Spring Framework',
        class: "bg-green-950 px-2 py-2",
        icon: Spring,
    },
    PYTHON: {
        name: 'Python',
        class: "bg-gray-900 px-2 py-2",
        icon: Python,
    },
    VUE: {
      name: 'Vue.js',
      class: "bg-gray-800 px-2 py-2",
      icon: Vue
    },
    MYSQL: {
        name: 'MySql',
        class: "bg-[#003159] px-2 py-2",
        icon: Mysql,
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] px-2 py-2",
        icon: Tailwind
    },
    JAVASCRIPT: {
        name: "JavaScript",
        class: "",
        icon: Javascript
    }

};

</script>

<template>
    <div class="py-18 text-gray-200">
        <div class="flex items-center mb-8 gap-x-2">
            <i class="pi pi-face-smile mt-1" style="font-size: 2rem"></i>
            <h2 class="text-2xl lg:text-4xl font-semibold text-white">A little bit about myself</h2>
        </div>
        <p class="text-xl mb-3">
            I remember the first time I watched <span class="text-red-600">Iron Man 1</span> as a little kid, that was when I first knew <span class="italic">Tony Stark</span> and his superhero iron suits, since then, apart from becoming a Marvel fan, I had become<span class="text-blue-400"> obsessed with technology</span> 💻. 
        </p>
        <p class="text-xl mb-8">
            Later on, I discovered that my dream was to <span class="text-yellow-500">become an <span class="text-yellow-400 font-bold">engineer</span></span> 👷, so now I am studying <span class="font-semibold italic text-white">Software Engineering</span>✏and very soon will graduate from college!
        </p>
        <h3 class="text-xl mb-4 text-white text-pretty">
            <i class="pi pi-microchip me-1" style="font-size: 1.35rem;"></i>
            This is the tech stack I have been educating myself throughout my college degree:
        </h3> 
        <!-- <div class="flex gap-x-2">
            <i class="pi pi-microchip mt-1" style="font-size: 1.5rem;"></i>
            <h3 class="text-xl mb-4 text-white">
                This is the tech stack I have been educating myself throughout my college degree:
            </h3>
        </div>     -->
        <div class="bg-black/50 rounded-xl px-16 py-8 flex flex-wrap gap-6">
            <TechnologyCard v-for="(tech, index) in TECHNOLOGIES" :key="index"
              :name="tech.name"
              :classes="tech.class"
              :logo="tech.icon"
            />

        </div>
    </div>
</template>