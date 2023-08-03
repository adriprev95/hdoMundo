<template>
    <figure class="sm:w-2/3 lg:w-1/3" @click="$router.push({ name: 'tail', params: { id: id } })">
        <img :src="imgUrl" alt="" srcset="" class="transition ease-in-out delay-150  hover:scale-110 duration-300"
            @load="load">
        <div v-if="imgLoad === false">
            <span class="text-white text-center w-full">Cargando</span>
        </div>
    </figure>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
    imgUrl: string,
    id: number
}>()
let imgLoad = ref<Boolean>(false);
function load() {
    imgLoad.value = true
    console.log(imgLoad)
}
const imgUrl = ref(props.imgUrl);
const id = ref(props.id);
</script>

<style scoped></style>