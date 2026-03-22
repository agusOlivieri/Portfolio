<script setup>
import Github from '@/assets/icons/Github.vue';

const props = defineProps({
    title: { type: String },
    description: { type: String },
    image: { type: String },
    technologies: { type: Array },
    githubLink: { type: String },
    liveLink: { type: String },
    index: { type: Number, default: 0 }
})
</script>

<template>
    <article class="group relative mb-20 md:mb-28">

        <!-- Ambient glow on hover -->
        <div
            class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style="background: radial-gradient(ellipse 70% 60% at 40% 0%, rgba(139,92,246,0.09), transparent 70%)"
            aria-hidden="true"
        ></div>

        <!-- Card -->
        <div
            class="relative z-10 rounded-2xl border border-white/[0.06] bg-gray-950/60 backdrop-blur-sm overflow-hidden
                   transition-all duration-700 ease-out
                   hover:border-white/[0.13] hover:-translate-y-1
                   shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset,0_0_0_1px_rgba(0,0,0,0.5),0_24px_48px_-12px_rgba(0,0,0,0.6)]
                   hover:shadow-[0_1px_0_0_rgba(255,255,255,0.07)_inset,0_0_0_1px_rgba(0,0,0,0.5),0_32px_64px_-16px_rgba(0,0,0,0.8),0_0_80px_-20px_rgba(139,92,246,0.13)]"
        >

            <!-- ── Header: index + title + actions ── -->
            <div class="flex items-start justify-between gap-4 px-6 pt-7 pb-5 md:px-10 md:pt-9 border-b border-white/[0.05]">

                <div class="flex items-start gap-4 md:gap-5 min-w-0">
                    <!-- Index number -->
                    <span
                        class="shrink-0 select-none font-serif text-xl md:text-2xl tracking-tight pt-1
                               text-violet-400/40 group-hover:text-violet-400/65 transition-colors duration-500"
                    >
                        {{ String(index + 1).padStart(2, '0') }}
                    </span>

                    <!-- Title -->
                    <h3
                        class="font-serif text-2xl md:text-3xl leading-tight tracking-tight
                               text-violet-50/90 group-hover:text-white transition-colors duration-500"
                    >
                        {{ title }}
                    </h3>
                </div>

                <!-- Action buttons (fade in on hover) -->
                <ul class="shrink-0 flex flex-col gap-2 items-end
                           opacity-40 translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
                    <li>
                        <a
                            :href="githubLink"
                            target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center gap-1.5 text-[0.65rem] font-medium tracking-widest uppercase
                                   text-white/50 bg-white/[0.04] border border-white/[0.08] px-3 py-1.5 rounded-full
                                   hover:text-white/90 hover:bg-white/[0.09] hover:border-white/[0.16]
                                   transition-all duration-200"
                        >
                            <Github class="size-3.5 opacity-70" />
                            Código
                            <i class="pi pi-arrow-up-right text-[9px]"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            :href="liveLink || githubLink"
                            target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center gap-1.5 text-[0.65rem] font-medium tracking-widest uppercase
                                   text-violet-300/85 bg-violet-500/10 border border-violet-500/30 px-3 py-1.5 rounded-full
                                   hover:text-white hover:bg-violet-500/20 hover:border-violet-400/50
                                   transition-all duration-200"
                        >
                            <i class="pi pi-eye text-[10px]"></i>
                            Ver proyecto
                            <i class="pi pi-arrow-up-right text-[9px]"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- ── Body: image + meta ── -->
            <div class="flex flex-col md:flex-row">

                <!-- Image -->
                <div class="md:w-[55%] shrink-0 relative overflow-hidden min-h-[200px] md:min-h-[280px] max-h-[340px] md:max-h-[400px]">
                    <!-- Fade edge toward meta panel -->
                    <div
                        class="absolute inset-0 z-10 pointer-events-none
                               hidden md:block"
                        style="background: linear-gradient(to right, transparent 55%, rgba(3,7,18,0.65) 100%)"
                        aria-hidden="true"
                    ></div>
                    <div
                        class="absolute inset-0 z-10 pointer-events-none md:hidden"
                        style="background: linear-gradient(to bottom, transparent 45%, rgba(3,7,18,0.7) 100%)"
                        aria-hidden="true"
                    ></div>

                    <img
                        :src="image"
                        :alt="`Screenshot of ${title}`"
                        class="w-full h-full object-cover object-top
                               scale-100 group-hover:scale-[1.04]
                               saturate-[0.82] brightness-90 group-hover:saturate-100 group-hover:brightness-100
                               transition-all duration-[900ms] ease-out"
                    />
                </div>

                <!-- Description + stack -->
                <div class="flex flex-col justify-between gap-6 md:gap-0 px-6 py-6 md:px-8 md:py-8">

                    <p class="text-[0.82rem] md:text-sm leading-[1.8] font-normal tracking-wide
                               text-white/65 group-hover:text-white transition-colors duration-500">
                        {{ description }}
                    </p>

                    <div>
                        <p class="text-[0.58rem] font-medium tracking-[0.12em] uppercase text-white/22 mb-3">
                            Stack
                        </p>
                        <ul class="flex flex-wrap gap-2">
                            <li v-for="tech in technologies" :key="tech.name">
                                <span :class="`inline-flex items-center gap-1 text-[0.65rem] font-normal tracking-wide
                                              px-2.5 py-1 rounded-full opacity-70 group-hover:opacity-100
                                              transition-opacity duration-300 ${tech.class}`">
                                    <component :is="tech.icon" v-if="tech.icon" class="size-3" />
                                    {{ tech.name }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </article>
</template>