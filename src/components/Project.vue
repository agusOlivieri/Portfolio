<script setup>

defineProps({
    title: {
        type: String
    },
    description: {
        type: String
    },
    technologies: {
        type: Array
    },
    githubLink: {
        type: String
    }
})

</script>

<template>
    <div class="rounded-2xl p-6 flex flex-col">
        <div class="mb-22">
            <h3 class="text-2xl text-yellow-400 mb-1 font-medium">{{ title }}</h3>
            <p class="text-lg mb-6 font-medium text-white/85">{{ description }}</p>
            
            <ul class="flex gap-x-4 mb-2">
                <li v-for="tech in technologies">
                    <span class="flex gap-x-1 rounded-full text-xs flex-wrap items-center bg-slate-800 px-2 py-1">
                        <div class="size-5 rounded-full bg-white"></div>
                        {{ tech }}
                    </span>
                </li>
            </ul>
    
            <div class="mb-10 h-[400px] text-red-800 bg-white/65 rounded-4xl text-center flex justify-center items-center">Imagen de proyecto</div>
    
            <a :href="githubLink" target="_blank" rel="noopener noreferrer">
                <i></i>
                githubLink
            </a>
        </div>
    </div>
</template>