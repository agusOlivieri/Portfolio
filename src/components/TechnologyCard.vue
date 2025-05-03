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
    <div class="size-30 bg-blue-950/30 hover:bg-blue-950/50 transition text-xs flex flex-col justify-evenly items-center text-center rounded-sm">
        <span :class="`rounded-full ${classes}`">
            <component :is="logo" class="size-8" />
        </span>
        {{ name }}
    </div>
</template>