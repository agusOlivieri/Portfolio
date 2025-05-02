<script setup>
import Github from '@/assets/icons/Github.vue';

const props = defineProps({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    technologies: {
        type: Array,
    },
    githubLink: {
        type: String
    }
})

// console.log(props.image)

</script>

<template>
    <div class="rounded-2xl p-6 flex flex-col">
        <div class="mb-16">
            <h3 class="text-2xl text-yellow-400 mb-1 font-medium">{{ title }}</h3>
            <p class="text-lg mb-6 font-medium text-white/85">{{ description }}</p>
            
            <ul class="flex gap-x-2 mb-2">
                <li v-for="tech in technologies">
                    <span :class="`flex gap-x-1 rounded-full text-xs flex-wrap items-center ${tech.class} px-2 py-1`">
                        <!-- <div class="size-5 rounded-full bg-white"></div> -->
                        <component :is="tech.icon" class="size-4" />
                        {{ tech.name }}
                    </span>
                </li>
            </ul>
            
            <img :src="image" class="rounded-xl"/>
            <!-- <div class="relative p-3 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border-2 lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                <div class="h-[400px] bg-white/25 text-red-800 rounded-4xl text-center flex justify-center items-center">Imagen de proyecto</div>
            </div> -->
            
            <ul class="flex gap-x-4 mt-2 justify-end text-sm">
                <a :href="githubLink" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-1 bg-white/15 px-2 py-1 rounded-full hover:bg-white/30 transition" >
                    <Github class="size-4"/>
                    Repository
                </a>
                <a :href="githubLink" target="_blank" rel="noopener noreferrer" class="flex items-center gap-x-1 bg-white/15 px-2 py-1 rounded-full hover:bg-white/30 transition" >
                    <i class="pi pi-eye"></i>
                    Take a look!
                </a>
            </ul>
        </div>
    </div>
</template>