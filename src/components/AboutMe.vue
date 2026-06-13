<script setup>
import TechnologyCard from '@/components/TechnologyCard.vue';
import Vue from '@/assets/icons/Vue.vue';
import Tailwind from '@/assets/icons/Tailwind.vue';
import Mysql from '@/assets/icons/Mysql.vue';
import Spring from '@/assets/icons/Spring.vue';
import Java from '@/assets/icons/Java.vue';
import Python from '@/assets/icons/Python.vue';
import Javascript from '@/assets/icons/Javascript.vue';

const TECHNOLOGIES = {
  JAVA:   { name: 'Java',             class: 'border-retro-amber/30', icon: Java },
  SPRING: { name: 'Spring Framework', class: 'border-terminal/30',    icon: Spring },
  PYTHON: { name: 'Python',           class: 'border-cyber/30',       icon: Python },
  VUE:    { name: 'Vue.js',           class: 'border-terminal/30',    icon: Vue },
  MYSQL:  { name: 'MySql',            class: 'border-cyber/30',       icon: Mysql },
  TAILWIND: { name: 'Tailwind CSS',   class: 'border-cyber/30',       icon: Tailwind },
  JAVASCRIPT: { name: 'JavaScript',   class: 'border-retro-amber/30', icon: Javascript },
}
</script>

<template>
  <div class="py-16 text-gray-200">

    <!-- Section header -->
    <div class="flex items-center gap-4 mb-10">
      <div class="font-pixel text-[9px] text-terminal tracking-wider">
        &gt; ABOUT.EXE
      </div>
      <div class="flex-1 h-px bg-terminal/20"></div>
    </div>

    <!-- Terminal window for bio -->
    <div class="terminal-window mb-10">
      <div class="terminal-header">
        <span>■</span>
        <span>PROFILE.LOG</span>
        <span class="ml-auto blink text-pixel-bg/70 text-[10px]">█</span>
      </div>
      <div class="terminal-body space-y-4 relative z-10">
        <p class="font-retro text-sm md:text-base leading-relaxed text-gray-300">
          <span class="text-terminal">$&gt;</span> I remember the first time I watched
          <span class="text-red-400"> Iron Man 1</span> as a little kid — that was when I first knew
          <span class="text-white italic"> Tony Stark</span> and his superhero iron suits. Since then, apart from becoming
          a Marvel fan, I became <span class="text-cyber"> obsessed with technology</span> 💻.
        </p>
        <p class="font-retro text-sm md:text-base leading-relaxed text-gray-300">
          <span class="text-terminal">$&gt;</span> Later on, I discovered that my dream was to
          <span class="text-retro-amber"> become an <strong>engineer</strong></span> 👷, so now I am studying
          <span class="text-white font-bold"> Software Engineering</span> 🖊 and will graduate from college very soon!
        </p>
      </div>
    </div>

    <!-- Tech stack -->
    <div>
      <div class="flex items-center gap-3 mb-6">
        <span class="font-pixel text-[8px] text-terminal/70 tracking-wider">&gt; LOADED_TECHNOLOGIES:</span>
        <div class="flex-1 h-px bg-terminal/15"></div>
      </div>

      <div
        class="border border-terminal/20 px-4 md:px-8 py-8 flex flex-wrap justify-center gap-5"
        style="background: rgba(10,10,15,0.6);"
      >
        <TechnologyCard
          v-for="(tech, index) in TECHNOLOGIES"
          :key="index"
          :name="tech.name"
          :classes="tech.class"
          :logo="tech.icon"
        />
      </div>
    </div>
  </div>
</template>