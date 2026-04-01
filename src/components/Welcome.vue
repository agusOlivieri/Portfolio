<template>
    <!-- Wrapper ocupa todo el alto heredado del SectionContainer -->
    <div class="relative flex flex-col justify-center items-start w-full h-full">

        <!-- ── Línea decorativa vertical (desktop) ── -->
        <div
            class="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block
                   w-px h-32 bg-gradient-to-b from-transparent via-violet-400/30 to-transparent
                   animate-fade-in"
            aria-hidden="true"
        ></div>

        <!-- ── Contenido principal ── -->
        <div class="flex flex-col gap-6 md:gap-8 pl-0 lg:pl-8">

            <!-- Avatar -->
            <div class="flex items-center gap-4 animate-slide-up" style="animation-delay: 0ms;">
                <div class="relative">
                    <!-- Glow ring -->
                    <div
                        class="absolute inset-0 rounded-full
                               bg-gradient-to-br from-violet-500/40 to-transparent
                               blur-md scale-110 animate-pulse-slow"
                        aria-hidden="true"
                    ></div>
                    <!-- Ring border -->
                    <div class="absolute -inset-[3px] rounded-full bg-gradient-to-br from-violet-400/60 via-transparent to-violet-700/30"
                         aria-hidden="true"></div>
                    <img
                        src="../assets/images/avatar_generated.png"
                        alt="Profile picture"
                        class="relative w-16 h-16 md:w-30 md:h-30 rounded-full object-cover"
                    />
                </div>
            </div>

            <!-- Headline -->
            <div class="animate-slide-up" style="animation-delay: 80ms;">
                <h1 class="w-xl text-3xl md:text-4xl lg:text-5xl
                           font-normal leading-[1.05] tracking-tight text-white/90">
                    Hi, my name is Agustin <br />
                    and I am a
                    <br class="hidden sm:block" />
                    <span class="shimmer-text text-yellow-400 italic">Software Developer</span>
                </h1>
            </div>

            <!-- CTA scroll -->
            <div class="animate-slide-up" style="animation-delay: 240ms;">
                <a
                    href="#projects-section"
                    class="group inline-flex items-center gap-3 text-sm font-medium
                           text-white/50 hover:text-white/90 transition-colors duration-300 w-fit"
                >
                    <!-- Línea animada -->
                    <span
                        class="block w-8 h-px bg-white/25 group-hover:w-14 group-hover:bg-violet-400/70
                               transition-all duration-500 ease-out"
                        aria-hidden="true"
                    ></span>
                    Take a look to my work!
                    <i class="pi pi-arrow-down text-xs opacity-60 group-hover:opacity-100
                               group-hover:translate-y-0.5 transition-all duration-300"></i>
                </a>
            </div>

        </div>

    </div>
</template>

<style scoped>


/* .font-serif { font-family: 'DM Serif Display', Georgia, serif; } */

/* Entrada: fade + slide up */
@keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}
@keyframes pingSlow {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.4; transform: scale(1.8); }
}
@keyframes pulseSlow {
    0%, 100% { opacity: 0.4; }
    50%       { opacity: 0.7; }
}

@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}

.shimmer-text {
  background: linear-gradient(
    100deg,
    #facc15 0%,
    #facc15 40%,
    #fff8c0 48%,
    #ffffff 52%,
    #facc15 58%,
    #facc15 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 4.8s linear infinite;
}

.animate-slide-up {
    animation: slideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.animate-fade-in {
    animation: fadeIn 1.2s ease both;
}
.animate-ping-slow {
    animation: pingSlow 2.2s ease-in-out infinite;
}
.animate-pulse-slow {
    animation: pulseSlow 3s ease-in-out infinite;
}
</style>