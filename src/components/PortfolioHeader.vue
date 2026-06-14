<script setup>
import { ref } from 'vue'
import { useActiveSection } from '@/composables/useActiveSection'

const menuOpen = ref(false)
const currentSection = useActiveSection().activeSection

const navLinks = [
  { id: '#welcome-section',  label: '[HOME]' },
  { id: '#projects-section', label: '[PROJECTS]' },
  { id: '#about-me',         label: '[ABOUT]' },
  { id: '#contact-me',       label: '[CONTACT]' },
]
</script>

<template>
  <header
    class="w-full fixed top-0 z-10"
    style="background: rgba(10,10,15,0.93); border-bottom: 2px solid #bd00ff; backdrop-filter: blur(8px);"
  >
    <div class="max-w-6xl mx-auto flex justify-between items-center h-14 px-4">

      <!-- Logo / System ID -->
      <div class="font-pixel text-terminal text-[8px] md:text-[9px] tracking-wider">
        <span class="blink mr-1">▶</span>AO://PORTFOLIO
      </div>

      <!-- Hamburger (mobile) -->
      <button
        @click="menuOpen = !menuOpen"
        class="sm:hidden text-terminal focus:outline-none p-1"
        aria-label="Toggle menu"
      >
        <svg v-if="!menuOpen" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Desktop nav -->
      <nav class="hidden sm:flex h-full items-center">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="link.id"
          @click="currentSection = link.id"
          class="font-retro text-sm md:text-base px-4 md:px-5 h-full flex items-center transition-all duration-200"
          :class="currentSection === link.id
            ? 'text-pixel-bg bg-terminal font-bold'
            : 'text-terminal hover:bg-terminal/10'"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>

    <!-- Mobile overlay -->
    <Transition name="fade">
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-black/75 z-40"
        @click="menuOpen = false"
      ></div>
    </Transition>

    <!-- Mobile drawer -->
    <Transition name="slide">
      <aside
        v-if="menuOpen"
        class="fixed top-0 left-0 w-64 h-full z-50 flex flex-col"
        style="background: rgba(10,10,15,0.97); border-right: 2px solid #bd00ff;"
      >
        <div class="terminal-header">
          ■ NAVIGATION.EXE
          <button @click="menuOpen = false" class="ml-auto text-pixel-bg">✕</button>
        </div>
        <div class="p-4 flex flex-col gap-2">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="link.id"
            @click="menuOpen = false; currentSection = link.id"
            class="font-retro text-base px-3 py-3 transition-all duration-200"
            :class="currentSection === link.id
              ? 'text-pixel-bg bg-terminal'
              : 'text-terminal hover:bg-terminal/10 border border-transparent hover:border-terminal/30'"
          >
            {{ link.label }}
          </a>
        </div>
      </aside>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform 0.28s ease; }
.slide-enter-from, .slide-leave-to       { transform: translateX(-100%); }
</style>