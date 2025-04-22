<script setup>
import TechnologyCard from '@/Components/TechnologyCard.vue';
</script>

<template>
    <div class="pt-18">
        <h1 class="text-2xl lg:text-4xl mb-8 text-gray-100 font-semibold">A Little bit about myself</h1>
        <p class="text-2xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem qui corporis consequatur possimus dolore iure, nobis a magnam repudiandae quas dolor voluptate! Voluptas a eveniet eius, magni recusandae iusto.</p>
        <h3 class="text-2xl mb-4">This is the stach i have been educating myself throughout my career as a developer:</h3>
        <div class="w-full bg-black/50 rounded-xl p-5 flex flex-wrap gap-x-6">
            <TechnologyCard />
            <TechnologyCard />
            <TechnologyCard />
            <TechnologyCard />
        </div>
    </div>
</template>