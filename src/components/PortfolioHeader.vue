<script setup>
import { onMounted, ref, onBeforeMount } from 'vue'
const menuOpen = ref(false)
const currentSection = ref('#')

let observer = null

onMounted(() => {
  const sections = document.querySelectorAll('section[id]')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = `#${entry.target.id}`
        }
      })
    },
    {
      root: null,
      threshold: 0.15
    }
  )

  sections.forEach((sec) => observer.observe(sec))
})

onBeforeMount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
    <header class="w-full py-2 fixed top-0 z-10">
        <div class="max-w-6xl mx-auto flex justify-center items-center h-14 px-4">
        <!-- Botón hamburguesa -->
            <button @click="menuOpen = !menuOpen" class="sm:hidden text-gray-700 focus:outline-none me-auto">
            <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"/>
            </svg>
            </button>
  
        <!-- Menú principal -->
            <nav class="hidden sm:flex h-full text-white">
              <ul class="flex text-md md:text-xl font-semibold h-full">
                  <li>
                    <a
                      href="#welcome-section"
                      @click="currentSection = '#welcome-section'"
                      :class="[
                        'flex justify-center items-center h-full w-26 md:w-32 p-1 transition',
                        currentSection === '#welcome-section' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
                      ]"
                    >Home</a>
                  </li>
                  <li>
                    <a
                      href="#projects-section"
                      @click="currentSection = '#projects-section'"
                      :class="[
                        'flex justify-center items-center h-full w-26 md:w-32 p-1 transition',
                        currentSection === '#projects-section' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
                      ]"
                    >Projects</a>
                  </li>
                  <li>
                    <a 
                      href="#about-me"
                      @click="currentSection = '#about-me'"
                      :class="[
                        'flex justify-center items-center h-full w-26 md:w-32 p-1 transition',
                        currentSection === '#about-me' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
                      ]" 
                    >About me</a>
                  </li>
                  <li>
                    <a 
                      href="#contact-me" class="flex justify-center items-center h-full w-26 md:w-32 p-1 hover:text-yellow-500 transition"
                      @click="currentSection = '#contact-me'"
                      :class="[
                        'flex justify-center items-center h-full w-26 md:w-32 p-1 transition',
                        currentSection === '#contact-me' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
                      ]" 
                    >Contact me!</a>
                  </li>
              </ul>
            </nav>
        </div>
  
        <transition name="fade">
        <div v-if="menuOpen" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" @click="menuOpen = false"></div>
        </transition>

        <transition name="slide">
            <aside v-if="menuOpen" class="fixed top-0 left-0 w-64 h-full z-50 shadow-lg p-6 flex flex-col gap-4 text-white">
                <button @click="menuOpen = false" class="self-end mb-4 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
                <a 
                  href="#welcome-section"
                  @click="menuOpen = false; currentSection='#welcome-section'"
                  :class="[
                    'text-lg font-semibold transition',
                    currentSection === '#welcome-section' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
                  ]" 
                >Home</a>
                <a 
                  href="#projects-section"
                  @click="menuOpen = false; currentSection='#projects-section'" 
                  :class="[
                    'text-lg font-semibold transition',
                    currentSection === '#projects-section' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
                  ]" 
                >Projects</a>
                <a 
                  href="#about-me" 
                  @click="menuOpen = false; currentSection='#aboutme-section'" 
                  :class="[
                    'text-lg font-semibold transition',
                    currentSection === '#aboutme-section' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
                  ]"                   
                >About me</a>
                <a 
                  href="#contact-me" 
                  @click="menuOpen = false; currentSection='contact-me'"
                  :class="[
                    'text-lg font-semibold transition',
                    currentSection === 'contact-me' ? 'text-yellow-500' : 'text-white hover:text-yellow-500'
                  ]"                    
                >Contact me!</a>
            </aside>
        </transition>
    </header>
  </template>

<style scoped>
/* Transiciones */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>