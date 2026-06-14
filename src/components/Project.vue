<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import Github from '@/assets/icons/Github.vue';

const props = defineProps({
  title:       { type: String },
  description: { type: String },
  image:       { type: String },
  technologies: { type: Array },
  githubLink:  { type: String },
  liveLink:    { type: String },
  index:       { type: Number, default: 0 },
})

const cardRef = ref(null)
let cardObserver = null

onMounted(() => {
  if (!cardRef.value) return
  cardObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        cardObserver.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  cardObserver.observe(cardRef.value)
})

onBeforeUnmount(() => cardObserver?.disconnect())
</script>

<template>
  <article
    ref="cardRef"
    class="project-card-wrapper group relative mb-16 md:mb-24 reveal-fade"
  >

    <!-- Terminal file card -->
    <div
      class="relative overflow-hidden transition-all duration-500 ease-out"
      style="
        background: rgba(15, 15, 26, 0.9);
        border: 2px solid rgba(189,0,255,0.35);
        box-shadow: 0 0 0 1px rgba(189,0,255,0.1), inset 0 1px 0 rgba(189,0,255,0.05);
        border-radius: 0;
      "
    >

      <!-- Hover: neon purple glow border -->
      <div
        class="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style="box-shadow: 0 0 24px rgba(189,0,255,0.18) inset, 0 0 0 2px #bd00ff;"
        aria-hidden="true"
      ></div>

      <!-- ── Card header bar ── -->
      <div
        class="flex items-center justify-between px-4 py-3 border-b"
        style="border-color: rgba(189,0,255,0.2); background: rgba(189,0,255,0.04);"
      >
        <!-- File label -->
        <div class="flex items-center gap-3 min-w-0">
          <span class="font-pixel text-[8px] text-terminal/70 shrink-0">
            FILE_{{ String(index + 1).padStart(2, '0') }}:
          </span>
          <h3
            class="font-retro text-lg md:text-xl text-white truncate group-hover:text-terminal transition-colors duration-400"
          >
            {{ title }}
          </h3>
        </div>

        <!-- Action buttons -->
        <div class="shrink-0 flex gap-2 ml-4">
          <a
            :href="githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 font-retro text-[11px] px-3 py-1
                   text-terminal/80 border border-terminal/30
                   hover:text-pixel-bg hover:bg-terminal
                   transition-all duration-200"
          >
            <Github class="size-3" />
            [CODE]
          </a>
          <a
            :href="liveLink || githubLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 font-retro text-[11px] px-3 py-1
                   text-cyber/80 border border-cyber/30
                   hover:text-pixel-bg hover:bg-cyber
                   transition-all duration-200"
          >
            [LIVE]
          </a>
        </div>
      </div>

      <!-- ── Body: image + meta ── -->
      <div class="flex flex-col md:flex-row">

        <!-- Image with scanline hover effect -->
        <div class="md:w-[52%] shrink-0 relative overflow-hidden min-h-[200px] md:min-h-[260px]">
          <!-- Fade edge -->
          <div
            class="absolute inset-0 z-10 pointer-events-none hidden md:block"
            style="background: linear-gradient(to right, transparent 50%, rgba(15,15,26,0.8) 100%)"
            aria-hidden="true"
          ></div>
          <div
            class="absolute inset-0 z-10 pointer-events-none md:hidden"
            style="background: linear-gradient(to bottom, transparent 40%, rgba(15,15,26,0.8) 100%)"
            aria-hidden="true"
          ></div>

          <!-- Scanline overlay on hover -->
          <div
            class="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style="background: repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(189,0,255,0.06) 2px, rgba(189,0,255,0.06) 4px);"
            aria-hidden="true"
          ></div>

          <img
            :src="image"
            :alt="`Screenshot of ${title}`"
            class="w-full h-full object-cover object-top
                   scale-100 group-hover:scale-[1.04]
                   saturate-[0.7] brightness-75
                   group-hover:saturate-[0.9] group-hover:brightness-90
                   transition-all duration-700 ease-out"
          />
        </div>

        <!-- Description + stack -->
        <div class="flex flex-col justify-between gap-6 px-5 py-5 md:px-7 md:py-6">
          <p class="font-retro text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-400">
            {{ description }}
          </p>

          <div>
            <div class="font-pixel text-[8px] text-terminal/50 tracking-widest mb-3">STACK:</div>
            <ul class="flex flex-wrap gap-2">
              <li v-for="tech in technologies" :key="tech.name">
                <span
                  :class="`inline-flex items-center gap-1 font-retro text-[11px] px-2.5 py-1
                           border border-white/10 opacity-70 group-hover:opacity-100
                           transition-all duration-300 ${tech.class}`"
                  style="border-radius: 0;"
                >
                  <component :is="tech.icon" v-if="tech.icon" class="size-3" />
                  {{ tech.name }}
                </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <!-- Corner pixel decorations -->
      <div class="absolute top-0 right-0 w-2 h-2 bg-terminal pointer-events-none opacity-60"></div>
      <div class="absolute bottom-0 left-0 w-2 h-2 bg-terminal pointer-events-none opacity-60"></div>

    </div>
  </article>
</template>