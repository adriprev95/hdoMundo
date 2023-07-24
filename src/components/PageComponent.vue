<template>
    <figure class="col-span-1 px-11 sm:mx-auto w-full sm:w-2/3"><img :src="photo_text" alt="" srcset=""
            class="bg-slate-100">
    </figure>
    <article class="col-span-1 flex flex-col justify-center content-center">
        <h1 v-for="texto, index in text" :key="index"
            class="text-justify justify-center font-abhayasemibold text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 2xl:px-11 px-11 py-7 text-white">
            {{ texto }}
        </h1>
    </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const props = defineProps<{
    photo_text: string,
    text: string | string[]
}>()

const photo_text = ref(props.photo_text);
const text = ref(props.text)
</script>

<style scoped></style>