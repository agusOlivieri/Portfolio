<script setup>
import { useActiveSection } from '@/composables/useActiveSection';

import Project from '@/components/Project.vue';
import Tailwind from '@/assets/icons/Tailwind.vue';
import Vue from '@/assets/icons/Vue.vue';
import Java from '@/assets/icons/Java.vue';
import Spring from '@/assets/icons/Spring.vue';
import NextJs from '@/assets/icons/NextJs.vue';
import Typescript from '@/assets/icons/Typescript.vue';
import Vercel from '@/assets/icons/Vercel.vue';
import Supabase from '@/assets/icons/Supabase.vue';

import sintacc from '@/assets/images/sintacc-project.png';
import saley from '@/assets/images/portada_saley.png'
import bagues from '@/assets/images/portada_bagues.png'

const { activeSection } = useActiveSection();

const TAGS = {
  TAILWIND: { name: 'Tailwind CSS', class: 'bg-[#003159] text-white', icon: Tailwind },
  VUE:      { name: 'Vue.js',       class: 'bg-gray-800 text-white',  icon: Vue },
  NEXTJS:   { name: 'Next.js',      class: 'bg-gray-800 text-white',  icon: NextJs },
  TYPESCRIPT: { name: 'TypeScript', class: 'bg-blue-700/40 text-white',  icon: Typescript },
  SUPABASE: { name: 'Supabase',     class: 'bg-[#0a231c] text-[#3ecf8e] border-[#3ecf8e]/30', icon: Supabase },
  VERCEL:   { name: 'Vercel',       class: 'bg-black text-white',     icon: Vercel },
  JAVA:   { name: 'Java',       class: 'bg-[#6A1A1A] border-orange-500/60 text-white',     icon: Java},
  SPRING: { name: 'Spring',       class: 'bg-[#1e5a1c] border-green-500/60 text-white',     icon: Spring},
}

const projects = [
  {
    title: 'Good Vibes | E-commerce',
    description: '',
    technologies: [TAGS.NEXTJS, TAGS.TYPESCRIPT, TAGS.SUPABASE, TAGS.TAILWIND, TAGS.VERCEL],
    img: bagues,
    github: 'https://github.com/agusOlivieri/bagues-ecommerce',
    live: 'https://bagues-ecommerce.vercel.app/',
  },
  {
    title: 'Saley',
    description: '',
    technologies: [TAGS.TAILWIND, TAGS.NEXTJS, TAGS.TYPESCRIPT, TAGS.SUPABASE, TAGS.VERCEL],
    img: saley,
    github: 'https://github.com/tuusuario/weather-dashboard',
  },
  {
    title: 'Kowledge Checker',
    description: '',
    technologies: [TAGS.JAVA, TAGS.SPRING],
    img: sintacc,
    github: 'https://github.com/tuusuario/ecommerce-layout',
  },
]

// ─── Scroll-reveal logic moved to App.vue globally ───
</script>

<template>
  <div class="pt-16 flex flex-col gap-2">

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