<template>
    <figure class="px-20 h-1/2 sm:h-full sm:w-1/2 lg:w-1/3" @click="$router.push({ name: 'tail', params: { id: id } })">
        <img :src="imgUrl" alt="" srcset=""
            class=" bg-[url('/src/assets/img/6313772.jpg')] transition ease-in-out delay-150  hover:scale-110 duration-300">
    </figure>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
    imgUrl: string,
    id: number
}>()

const imgUrl = ref(props.imgUrl);
const id = ref(props.id);
</script>

<style scoped></style>