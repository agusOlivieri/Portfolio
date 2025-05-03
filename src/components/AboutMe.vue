<script setup>
import TechnologyCard from '@/Components/TechnologyCard.vue';
import Vue from '@/assets/icons/Vue.vue';
import Tailwind from '@/assets/icons/Tailwind.vue';

const TECHNOLOGIES = {
    JAVA: {
        name: 'Java',
        class: "",
        icon: '',
    },
    SPRING: {
        name: 'Spring Framework',
        class: "",
        icon: '',
    },
    PYTHON: {
        name: 'Python',
        class: "",
        icon: '',
    },
    VUE: {
      name: 'Vue.js',
      class: "bg-gray-800 text-white",
      icon: Vue
    },
    MYSQL: {
        name: 'MySql',
        class: "",
        icon: '',
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159]",
        icon: Tailwind
    },

};

</script>

<template>
    <div class="pt-18 text-gray-200">
        <div class="flex items-center mb-8 gap-x-2">
            <i class="pi pi-face-smile mt-1" style="font-size: 2rem"></i>
            <h2 class="text-2xl lg:text-4xl font-semibold">A little bit about myself</h2>
        </div>
        <p class="text-xl mb-3">
            I remember the first time I watched <span class="text-red-600">Iron Man 1</span> as a little kid, that was when I first knew <span class="italic">Tony Stark</span> and his superhero iron suits, since then, apart from becoming a Marvel fan, I have become<span class="text-blue-400"> obsessed with technology</span>. 
        </p>
        <p class="text-xl mb-8">
            Later on, I discovered that my dream was to <span class="text-yellow-500">become an <span class="text-yellow-400 font-bold">engineer</span></span>, so now I am studying <span class="font-semibold italic text-white">Software Engineering</span> and very soon will graduate from college!
        </p>    
        <h3 class="text-xl mb-4">
            This is the tech stack I have been educating myself throughout my college degree:
        </h3>
        <div class="bg-black/50 rounded-xl px-16 py-8 flex flex-wrap gap-6">
            <TechnologyCard v-for="(tech, index) in TECHNOLOGIES" :key="index"
              :name="tech.name"
              :classes="tech.class"
              :logo="tech.icon"
            />

        </div>
    </div>
</template>