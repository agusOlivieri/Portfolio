<script setup>
import PortfolioHeader from '@/components/PortfolioHeader.vue';
import Welcome from '@/components/Welcome.vue';
import Projects from '@/components/Projects.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import AboutMe from '@/components/AboutMe.vue';
import ContactMe from '@/components/ContactMe.vue';
import { onMounted, onUnmounted, ref, nextTick, computed } from 'vue';

const lineTop    = ref(0);
const lineHeight = ref(0);
const activeIndex = ref(0);

let mainTopOffset = 0;
const SECTIONS = ['welcome-section', 'projects-section', 'about-me', 'contact-me'];

// ─── Calculate initial layout ──────────────────────────────────
function calculateLayout() {
  const welcome = document.getElementById('welcome-section');
  const main    = document.querySelector('main');
  if (!welcome || !main) return;

  const scrollY    = window.scrollY;
  mainTopOffset    = main.getBoundingClientRect().top + scrollY;
  const wBottom    = welcome.getBoundingClientRect().bottom + scrollY;
  lineTop.value    = wBottom - mainTopOffset;
}

// ─── Scroll-driven: update line height + active side ──────────
function updateLine() {
  const scrollY = window.scrollY;
  const vh      = window.innerHeight;

  // Line tip tracks 60% down viewport → scroll-driven height
  const tipDoc = scrollY + vh * 0.6;
  lineHeight.value = Math.max(0, tipDoc - (mainTopOffset + lineTop.value));

  // Active section: last one whose top has passed 50% of viewport
  let newIndex = 0;
  for (let i = SECTIONS.length - 1; i >= 0; i--) {
    const el = document.getElementById(SECTIONS[i]);
    if (!el) continue;
    if (el.getBoundingClientRect().top < vh * 0.5) {
      newIndex = i;
      break;
    }
  }
  activeIndex.value = newIndex;
}

// ─── Line alternates left / right per section ──────────────────
const lineLeft = computed(() =>
  activeIndex.value % 2 === 0 ? '20px' : 'calc(100% - 21px)'
);

// ─── Lifecycle ─────────────────────────────────────────────────
onMounted(async () => {
  await nextTick();
  calculateLayout();
  updateLine();
  window.addEventListener('scroll', updateLine, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateLine);
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  calculateLayout();
  updateLine();
}
</script>

<template>
  <!-- ── Background layers ── -->
  <div class="fixed inset-0 z-[-3] bg-pixel-bg"></div>
  <div class="fixed inset-0 z-[-2] dot-grid opacity-60 pointer-events-none"></div>
  <div
    class="fixed inset-0 z-[-1] pointer-events-none"
    style="background: repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px);"
  ></div>
  <!-- CRT vignette frame -->
  <div
    class="fixed inset-0 z-40 pointer-events-none"
    style="background: radial-gradient(ellipse 90% 90% at 50% 50%, transparent 55%, rgba(0,0,0,0.7) 100%);"
  ></div>

  <PortfolioHeader />

  <main class="relative">

    <!-- ── Scroll-driven progress line ── -->
    <div
      class="progress-line absolute w-0.5 z-50 pointer-events-none"
      :style="{
        top: `${lineTop}px`,
        height: `${lineHeight}px`,
        left: lineLeft
      }"
    >
      <!-- Pixel dot at tip -->
      <Transition name="tip-fade">
        <div
          v-if="lineHeight > 20"
          class="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3"
          style="background: #bd00ff; box-shadow: 0 0 8px #bd00ff, 0 0 20px rgba(189,0,255,0.6);"
        ></div>
      </Transition>
    </div>

    <!-- ── Sections ── -->
    <SectionContainer
      class="h-screen flex flex-col justify-center items-start"
      id="welcome-section"
    >
      <Welcome />
    </SectionContainer>

    <div>
      <SectionContainer id="projects-section">
        <Projects />
      </SectionContainer>

      <SectionContainer id="about-me">
        <AboutMe />
      </SectionContainer>

      <SectionContainer
        class="h-screen flex flex-col justify-center items-center"
        id="contact-me"
      >
        <ContactMe />
      </SectionContainer>
    </div>

  </main>
</template>

<style scoped>
.tip-fade-enter-active,
.tip-fade-leave-active {
  transition: opacity 0.3s ease;
}
.tip-fade-enter-from,
.tip-fade-leave-to {
  opacity: 0;
}
</style>