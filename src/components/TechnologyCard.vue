<script setup>
defineProps({
    name: {
        type: String
    },
    classes: {
        type: String
    },
    logo: {
        type: Object
    }
})
</script>

<template>
    <div class="size-30 bg-red-950/35 flex flex-col justify-evenly items-center text-xs rounded-sm">
        <span :class="`flex gap-x-1 rounded-full text-xs flex-wrap items-center ${classes} px-2 py-1`">
            <component :is="logo" class="size-8" />
        </span>
        {{ name }}
    </div>
</template>