<script setup>
// Contact boot lines — appear via staggered CSS animation delays
const bootLines = [
  { delay: '0ms',   color: 'text-terminal',     text: '$> INITIALIZING CONTACT_PROTOCOL.EXE...' },
  { delay: '400ms', color: 'text-gray-400',      text: '$> SCANNING AVAILABLE CHANNELS...' },
  { delay: '800ms', color: 'text-terminal',      text: '$> [OK] CHANNELS FOUND: 3' },
  { delay: '1200ms', color: 'text-retro-amber',  text: '$> CONNECTING...' },
  { delay: '1600ms', color: 'text-white',         text: '$> CONNECTION ESTABLISHED ✓' },
  { delay: '2000ms', color: 'text-cyber',         text: '$> READY. SELECT A CHANNEL TO BEGIN:' },
]
</script>

<template>
  <div class="w-full max-w-xl">

    <!-- Section header -->
    <div class="flex items-center gap-4 mb-8">
      <div class="font-pixel text-[9px] text-terminal tracking-wider">
        &gt; CONTACT.EXE
      </div>
      <div class="flex-1 h-px bg-terminal/20"></div>
    </div>

    <!-- Terminal console window -->
    <div class="terminal-window w-full">

      <!-- Window header bar -->
      <div class="terminal-header">
        <span>■</span>
        <span>CONTACT_TERMINAL v1.0.0</span>
        <div class="ml-auto flex gap-2">
          <div class="w-2.5 h-2.5 bg-red-500/80"></div>
          <div class="w-2.5 h-2.5 bg-retro-amber/80"></div>
          <div class="w-2.5 h-2.5 bg-terminal/80"></div>
        </div>
      </div>

      <!-- Boot sequence -->
      <div class="terminal-body space-y-1.5">
        <div
          v-for="(line, i) in bootLines"
          :key="i"
          class="boot-line font-retro text-xs md:text-sm"
          :class="line.color"
          :style="`animation-delay: ${line.delay};`"
        >
          {{ line.text }}
        </div>

        <!-- Channels -->
        <div
          class="boot-line mt-6 space-y-3"
          style="animation-delay: 2400ms;"
        >
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/agustin-olivieri/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 font-retro text-sm text-terminal/80
                   hover:text-pixel-bg hover:bg-terminal
                   border border-terminal/40 px-4 py-3
                   transition-all duration-200 group"
          >
            <i class="pi pi-linkedin text-lg"></i>
            <span>[LINKEDIN]</span>
            <span class="ml-auto font-pixel text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">OPEN_&gt;</span>
          </a>

          <!-- Instagram -->
          <a
            href="https://www.instagram.com/agus.olivieri17/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 font-retro text-sm text-cyber/80
                   hover:text-pixel-bg hover:bg-cyber
                   border border-cyber/40 px-4 py-3
                   transition-all duration-200 group"
          >
            <i class="pi pi-instagram text-lg"></i>
            <span>[INSTAGRAM]</span>
            <span class="ml-auto font-pixel text-[8px] opacity-0 group-hover:opacity-100 transition-opacity">OPEN_&gt;</span>
          </a>

          <!-- Email -->
          <div
            class="flex items-start gap-3 font-retro text-sm text-retro-amber/80
                   border border-retro-amber/30 px-4 py-3"
          >
            <i class="pi pi-envelope text-lg mt-0.5"></i>
            <div>
              <div>[EMAIL]</div>
              <a
                href="mailto:agustinolivieri30@gmail.com"
                class="text-xs text-retro-amber/60 hover:text-retro-amber select-all transition-colors"
              >
                agustinolivieri30@gmail.com
              </a>
            </div>
          </div>
        </div>

        <!-- Blinking cursor prompt at end -->
        <div
          class="boot-line font-retro text-sm text-terminal/50 mt-4 flex items-center gap-1"
          style="animation-delay: 2800ms;"
        >
          $&gt; <span class="blink text-terminal">█</span>
        </div>
      </div>
    </div>

  </div>
</template>