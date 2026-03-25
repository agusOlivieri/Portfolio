<script setup>
import PortfolioHeader from '@/components/PortfolioHeader.vue';
import Welcome from '@/components/Welcome.vue';
import Projects from '@/components/Projects.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import AboutMe from '@/components/AboutMe.vue';
import ContactMe from '@/components/ContactMe.vue';
import { onMounted, onUnmounted, ref } from 'vue';

const lineHeight = ref(0);
const lineTop = ref(0);
const lineVisible = ref(false);

function updateLine() {
  const welcome = document.getElementById('welcome-section')
  const contact = document.getElementById('contact-me')
  if (!welcome || !contact) return

  const startY = welcome.offsetTop + welcome.offsetHeight
  const endY = contact.offsetTop + contact.offsetHeight

  // El scroll "activo" es el scroll actual + altura de ventana
  const scrollProgress = window.scrollY + window.innerHeight

  const progress = Math.min(Math.max((scrollProgress - startY) / (endY - startY), 0), 1)

  lineTop.value = startY
  lineHeight.value = progress * (endY - startY)
  lineVisible.value = progress > 0
}

onMounted(() => {
  window.addEventListener('scroll', updateLine, { passive: true });
  updateLine();
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateLine);
})

</script>

<template>
    <div
      class="absolute top-0 z-[-2] min-h-screen w-full bg-gray-950
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-28%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    ></div>

    <PortfolioHeader />

    <main class = "relative">

      <!-- Línea de progreso -->
       <div
        v-if="lineaVisible"
        class="absolute left-1/4 w-px bg-white/30 z-50 pointer-events-none"
        :style="{ top: `${lineTop}px`, height: `${lineHeight}px` }"
       >
        <!-- punta con brillo -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_3px_rgba(255,255,255,0.7),0_0_20px_6px_rgba(167, 139, 250, 0.4)]"></div>
       </div>

      <SectionContainer class="h-screen flex flex-col justify-center items-start gap-5" id="welcome-section">
        <Welcome />
      </SectionContainer>
      <div class="bg-gray-950">
        <SectionContainer class="" id="projects-section">
          <Projects />
        </SectionContainer>

        <SectionContainer class="" id="about-me">
          <AboutMe />
        </SectionContainer>

        <div class="relative bg-gray-950">
          <!-- Gradiente inferior -->
          <div
            class="absolute top-0 z-4 min-h-screen w-full bg-gray-950
            bg-[radial-gradient(ellipse_80%_80%_at_50%_135%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
          >
            <SectionContainer class="h-screen flex flex-col justify-center items-center gap-5" id="contact-me">
              <ContactMe />
            </SectionContainer>
        
          </div>
        </div>
      </div>
    </main>
</template>

