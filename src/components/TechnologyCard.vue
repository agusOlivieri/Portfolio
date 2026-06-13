<script setup>
defineProps({
  name:    { type: String },
  classes: { type: String },
  logo:    { type: Object },
})
</script>

<template>
  <div
    class="group w-28 h-28 flex flex-col justify-center items-center gap-2
           font-retro text-xs text-center
           border border-terminal/25 transition-all duration-300
           hover:border-terminal hover:bg-terminal/5
           cursor-default relative overflow-hidden"
    style="background: rgba(15,15,26,0.8); border-radius: 0;"
  >
    <!-- Hover glow -->
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style="box-shadow: 0 0 16px rgba(189,0,255,0.2) inset;"
      aria-hidden="true"
    ></div>

    <!-- Icon -->
    <div
      :class="`relative z-10 rounded-none px-2 py-2 border transition-all duration-300 ${classes}
               group-hover:animate-float`"
    >
      <component :is="logo" class="size-7" />
    </div>

    <!-- Name -->
    <span class="relative z-10 text-[9px] text-gray-400 group-hover:text-terminal transition-colors duration-300 leading-tight px-1">
      {{ name }}
    </span>

    <!-- Pixel corner dots -->
    <div class="absolute top-0 left-0 w-1.5 h-1.5 bg-terminal/30 group-hover:bg-terminal transition-colors duration-300"></div>
    <div class="absolute bottom-0 right-0 w-1.5 h-1.5 bg-terminal/30 group-hover:bg-terminal transition-colors duration-300"></div>
  </div>
</template>