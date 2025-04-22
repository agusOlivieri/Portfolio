<script setup>
defineProps({
    name: {
        type: String
    },
    logo: {
        type: String
    }
})
</script>

<template>
    <div class="size-25 bg-red-950/35 flex flex-col justify-around items-center text-xs rounded-sm">
        <div class="size-8 rounded-full bg-white"></div>
        Tech Name
    </div>
</template>