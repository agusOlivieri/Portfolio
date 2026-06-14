<script setup>

defineProps({
    id: {
        type: String
    }

})

</script>

<template>
    <section :id="id" class="w-full px-4 sm:px-16 md:px-24 mx-auto container lg:max-w-4xl md:max-w-2xl py-10">
        <slot></slot>
    </section>
</template>