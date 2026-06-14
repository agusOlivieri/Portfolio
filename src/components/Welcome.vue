<template>
  <div class="relative flex flex-col justify-center items-start w-full h-full gap-6 md:gap-7">

    <!-- ── System status bar ── -->
    <div
      class="animate-slide-up font-retro text-xs text-terminal/60 tracking-widest"
      style="animation-delay: 0ms;"
    >
      <span class="mr-2 text-terminal">●</span>
      SYS:ONLINE &nbsp;|&nbsp; STATUS:AVAILABLE
    </div>

    <!-- ── Avatar + ID card ── -->
    <div class="animate-slide-up flex items-center gap-6 md:gap-8" style="animation-delay: 80ms;">

      <!-- Pixel avatar with terminal border -->
      <div class="relative shrink-0">
        <div
          class="w-52 h-52 overflow-hidden rounded-full"
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

      </div>

      <!-- Name block -->
      <div>
        <div class="font-pixel text-[8px] text-terminal/60 mb-2 tracking-wider">ID_CARD:</div>
        <div class="font-retro text-3xl md:text-4xl text-white font-bold leading-tight tracking-tight">
          AGUSTIN<br />OLIVIERI
        </div>
        <div class="font-retro text-cyber text-sm tracking-wider flex items-center gap-1.5">
          <span class="mt-0.5">ARG</span>
          <svg class="w-4.5 h-3 shrink-0 rounded-xs" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="9" height="2" fill="#74ACDF"/>
            <rect y="2" width="9" height="2" fill="#FFFFFF"/>
            <rect y="4" width="9" height="2" fill="#74ACDF"/>
            <circle cx="4.5" cy="3" r="0.5" fill="#F6B40E"/>
            <path d="M4.5,2.2 L4.5,3.8 M3.7,3 L5.3,3 M3.9,2.4 L5.1,3.6 M3.9,3.6 L5.1,2.4" stroke="#F6B40E" stroke-width="0.15"/>
            <circle cx="4.5" cy="3" r="0.25" fill="#E58C0A"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- ── Role typewriter ── -->
    <div class="animate-slide-up" style="animation-delay: 160ms;">
      <div class="font-retro text-xs text-terminal/50 mb-1">$&gt; ./role.sh</div>
      <div class="font-retro text-2xl md:text-3xl text-white typewriter-line">
        Information Systems Engineering Student
      </div>
    </div>

    <!-- ── Badge indicators ── -->
    <div class="animate-slide-up flex flex-wrap gap-3" style="animation-delay: 240ms;">
      <div class="border border-terminal/40 px-3 py-1.5 font-retro text-xs hover:border-terminal/80 hover:bg-terminal/5 transition-all duration-300">
        <span class="text-terminal">●</span>&nbsp;Full-Stack Dev
      </div>
      <div class="border border-retro-amber/40 px-3 py-1.5 font-retro text-xs hover:border-retro-amber/80 hover:bg-retro-amber/5 transition-all duration-300">
        <span class="text-retro-amber">●</span>&nbsp;Seeking an Intership
      </div>
    </div>

    <!-- ── CTA ── -->
    <div class="animate-slide-up" style="animation-delay: 320ms;">
      <a
        href="#projects-section"
        class="group font-retro text-sm text-terminal hover:text-white transition-colors duration-300 flex items-center gap-2 animate-text-pulse"
      >
        <span class="text-terminal/60 group-hover:text-terminal transition-colors">&gt;_</span>
        VIEW_MY_PROJECTS()
      </a>
    </div>

  </div>
</template>

<style scoped>
/* Typewriter: expands from 0 to full width character by character */
.typewriter-line {
  border-right: 3px solid #bd00ff;
  animation:
    typeExpand 3s steps(50) infinite,
    caretBlink 0.65s step-end 0.8s infinite;
}

@keyframes typeExpand {
  0% { max-width: 0; }
  35% { max-width: 101%; }
  65% { max-width: 101%; }
  100% { max-width: 0; }
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

@keyframes textPulse {
  0%, 100% {
    opacity: 0.55;
    text-shadow: 0 0 2px rgba(189, 0, 255, 0.2);
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 8px rgba(189, 0, 255, 0.8), 0 0 15px rgba(189, 0, 255, 0.4);
  }
}
.animate-text-pulse {
  animation: textPulse 2s ease-in-out infinite;
}
.animate-text-pulse:hover {
  opacity: 1;
  text-shadow: 0 0 12px rgba(189, 0, 255, 0.8), 0 0 20px rgba(189, 0, 255, 0.4);
}
</style>