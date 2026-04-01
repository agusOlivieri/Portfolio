<script setup>
import PortfolioHeader from '@/components/PortfolioHeader.vue';
import Welcome from '@/components/Welcome.vue';
import Projects from '@/components/Projects.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import AboutMe from '@/components/AboutMe.vue';
import ContactMe from '@/components/ContactMe.vue';
import { onMounted, onUnmounted, ref, nextTick } from 'vue';

const lineTop    = ref(0);
const lineHeight = ref(0);

// Alturas-objetivo en coordenadas de documento (relativas al top de <main>).
// Se calculan una vez al montar (y al hacer resize).
let targets = { projects: 0, about: 0, contact: 0 };

// ─── Calcula dónde debe quedar la punta para cada sección ────────────────────
function calculateLayout() {
  const welcome  = document.getElementById('welcome-section');
  const projects = document.getElementById('projects-section');
  const aboutMe  = document.getElementById('about-me');
  const contactMe = document.getElementById('contact-me');
  const main     = document.querySelector('main');
  if (!welcome || !main) return;

  const scrollY    = window.scrollY;
  const vh         = window.innerHeight;
  const mainTop    = main.getBoundingClientRect().top    + scrollY;
  const wBottom    = welcome.getBoundingClientRect().bottom + scrollY; // pie de welcome

  // La línea arranca justo en el pie de welcome-section
  lineTop.value = wBottom - mainTop - 100;

  // Offset: la punta se detiene al 88 % de la pantalla cuando la sección entra
  // → target_height = top_seccion - wBottom - vh * 0.12
  if (projects) {
    const pt = projects.getBoundingClientRect().top + scrollY;
    targets.projects = pt + wBottom;
    // targets.projects = pt - wBottom 
  }
  if (aboutMe) {
    const at = aboutMe.getBoundingClientRect().top + scrollY;
    const ah = aboutMe.offsetHeight;
    // Para about-me la línea llega hasta cerca del centro de la sección
    targets.about = at + ah * 0.5 - wBottom;
  }
  if (contactMe) {
    // Para contact-me la línea llega hasta cerca del centro de la sección
    const ct = contactMe.getBoundingClientRect().top   + scrollY;
    const ch = contactMe.offsetHeight;
    targets.contact = ct + ch * 0.5 - wBottom;
  }

  console.log('Layout calculated:', { lineTop: lineTop.value, targets });
}

// ─── Actualiza la altura activa según las secciones visibles ─────────────────
function updateLine() {
  const projects  = document.getElementById('projects-section');
  const aboutMe   = document.getElementById('about-me');
  const contactMe = document.getElementById('contact-me');
  const vh = window.innerHeight;

  // Una sección "entró" cuando su top cruzó el 95 % de la pantalla (casi viewport bottom)
  const threshold = vh * 0.95;

  const projectsIn = projects  && projects.getBoundingClientRect().top  < threshold;
  const aboutIn    = aboutMe   && aboutMe.getBoundingClientRect().top   < threshold;
  const contactIn  = contactMe && contactMe.getBoundingClientRect().top < threshold;

  // El target más avanzado que corresponde determina la altura
  let newHeight = 0;
  if      (contactIn)  newHeight = targets.contact;
  else if (aboutIn)    newHeight = targets.about;
  else if (projectsIn) newHeight = targets.projects;

  lineHeight.value = Math.max(0, newHeight);
}

// ─── Lifecycle ───────────────────────────────────────────────────────────────
onMounted(async () => {
  await nextTick();          // espera a que el DOM esté completamente pintado
  calculateLayout();
  updateLine();

  window.addEventListener('scroll', updateLine,       { passive: true });
  window.addEventListener('resize', handleResize,     { passive: true });
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
  <!-- Fondo con gradiente superior -->
  <div
    class="absolute top-0 z-[-2] min-h-screen w-full bg-gray-950
    bg-[radial-gradient(ellipse_80%_80%_at_50%_-28%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
  ></div>

  <PortfolioHeader />

  <main class="relative">

    <!--
      ── Línea de progreso ──────────────────────────────────────────────────────
      La altura cambia con CSS transition → crea la animación top-to-bottom
      al bajar y bottom-to-top al volver a subir.
    -->
    <div
      class="absolute left-[171px] w-0.5 z-50 pointer-events-none
             bg-gradient-to-b from-transparent via-violet-500/30 to-violet-700"
      style="transition: height 0.75s cubic-bezier(0.4, 0, 0.2, 1);"
      :style="{ top: `${lineTop}px`, height: `${lineHeight}px` }"
    >
      <!-- Punta con brillo — solo visible cuando la línea tiene altura real -->
      <Transition name="tip-fade">
        <div
          v-if="lineHeight > 20"
          class="absolute bottom-0 left-1/2 -translate-x-1/2
                 w-2 h-3 rounded-full bg-violet-700"
        ></div>
      </Transition>
    </div>

    <!-- Secciones ─────────────────────────────────────────────────────────── -->
    <SectionContainer
      class="h-screen flex flex-col justify-center items-start gap-5"
      id="welcome-section"
    >
      <Welcome />
    </SectionContainer>

    <div class="bg-gray-950">
      <SectionContainer id="projects-section">
        <Projects />
      </SectionContainer>

      <SectionContainer id="about-me">
        <AboutMe />
      </SectionContainer>

      <div class="relative bg-gray-950">
        <!-- Gradiente inferior -->
        <div
          class="absolute inset-0 z-0 pointer-events-none
          bg-[radial-gradient(ellipse_80%_80%_at_50%_135%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
        <SectionContainer
          class="h-screen flex flex-col justify-center items-center gap-5"
          id="contact-me"
        >
          <ContactMe />
        </SectionContainer>
      </div>
    </div>

  </main>
</template>

<!-- Fade suave para la punta al aparecer/desaparecer -->
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