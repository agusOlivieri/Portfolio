<script setup>

defineProps({
    clases: {
        type: String
    },
    id: {
        type: String
    }

})

</script>

<template>
    <section :id="id" :class="`${clases} w-full px-24 mx-auto container lg:max-w-4xl md:max-w-2xl`">
        <slot></slot>
    </section>
</template>