<template>
  <div class="relative flex flex-col justify-center items-start w-full h-full gap-6 md:gap-7">

    <!-- ASCII corner decorations -->
    <div
      class="absolute top-6 left-0 right-0 font-retro text-terminal/20 text-xs leading-none pointer-events-none select-none hidden md:block"
      aria-hidden="true"
    >┌────────────────────────────────────────────────────────────────┐</div>
    <div
      class="absolute bottom-6 left-0 right-0 font-retro text-terminal/20 text-xs leading-none pointer-events-none select-none hidden md:block"
      aria-hidden="true"
    >└────────────────────────────────────────────────────────────────┘</div>

    <!-- ── System status bar ── -->
    <div
      class="animate-slide-up font-retro text-xs text-terminal/60 tracking-widest"
      style="animation-delay: 0ms;"
    >
      <span class="blink mr-2 text-terminal">●</span>
      SYS:ONLINE &nbsp;|&nbsp; USER:AGUSTIN_OLIVIERI &nbsp;|&nbsp; STATUS:AVAILABLE
    </div>

    <!-- ── Avatar + ID card ── -->
    <div class="animate-slide-up flex items-center gap-6 md:gap-8" style="animation-delay: 80ms;">

      <!-- Pixel avatar with terminal border -->
      <div class="relative shrink-0">
        <div
          class="w-20 h-20 md:w-24 md:h-24 overflow-hidden"
          style="
            box-shadow:
              0 0 0 3px #0a0a0f,
              0 0 0 5px #bd00ff,
              0 0 0 9px #0a0a0f,
              0 0 20px rgba(189,0,255,0.35);
          "
        >
          <img
            src="../assets/images/avatar_generated.png"
            alt="Agustin Olivieri"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Online indicator -->
        <div
          class="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-terminal blink"
          style="box-shadow: 0 0 8px #bd00ff;"
          aria-label="Online"
        ></div>
      </div>

      <!-- Name block -->
      <div>
        <div class="font-pixel text-[8px] text-terminal/60 mb-2 tracking-wider">ID_CARD:</div>
        <div class="font-retro text-3xl md:text-4xl text-white font-bold leading-tight tracking-tight">
          AGUSTIN<br />OLIVIERI
        </div>
        <div class="font-retro text-cyber text-sm mt-1 tracking-wider">ARG • Software Eng. Student</div>
      </div>
    </div>

    <!-- ── Role typewriter ── -->
    <div class="animate-slide-up" style="animation-delay: 160ms;">
      <div class="font-retro text-xs text-terminal/50 mb-1">$&gt; ./role.sh</div>
      <div class="font-retro text-2xl md:text-3xl text-white typewriter-line">
        Software Developer
      </div>
    </div>

    <!-- ── Badge indicators ── -->
    <div class="animate-slide-up flex flex-wrap gap-3" style="animation-delay: 240ms;">
      <div class="border border-terminal/40 px-3 py-1.5 font-retro text-xs hover:border-terminal/80 hover:bg-terminal/5 transition-all duration-300">
        <span class="text-terminal">●</span>&nbsp;Full-Stack Dev
      </div>
      <div class="border border-cyber/40 px-3 py-1.5 font-retro text-xs hover:border-cyber/80 hover:bg-cyber/5 transition-all duration-300">
        <span class="text-cyber">●</span>&nbsp;Open Source
      </div>
      <div class="border border-retro-amber/40 px-3 py-1.5 font-retro text-xs hover:border-retro-amber/80 hover:bg-retro-amber/5 transition-all duration-300">
        <span class="text-retro-amber">●</span>&nbsp;Open to Work
      </div>
    </div>

    <!-- ── CTA ── -->
    <div class="animate-slide-up" style="animation-delay: 320ms;">
      <a
        href="#projects-section"
        class="group font-retro text-sm text-terminal hover:text-white transition-colors duration-300 flex items-center gap-2"
      >
        <span class="text-terminal/60 group-hover:text-terminal transition-colors">&gt;_</span>
        VIEW_MY_PROJECTS()
        <span class="blink text-terminal">█</span>
      </a>
    </div>

  </div>
</template>

<style scoped>
/* Typewriter: expands from 0 to full width character by character */
.typewriter-line {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid #bd00ff;
  max-width: 0;
  animation:
    typeExpand 2s steps(20, end) 0.8s forwards,
    caretBlink 0.75s step-end 0.8s infinite;
}

@keyframes typeExpand {
  from { max-width: 0; }
  to   { max-width: 20ch; }
}
@keyframes caretBlink {
  0%, 50%   { border-right-color: #bd00ff; }
  51%, 100% { border-right-color: transparent; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-slide-up {
  animation: slideUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
}
</style>