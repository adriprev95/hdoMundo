<template>
    <figure class="sm:w-2/3 lg:w-1/3" @click="$router.push({ name: 'tail', params: { id: id } })">
        <img :src="imgUrl" alt="" srcset="" class="transition ease-in-out delay-150  hover:scale-110 duration-300"
            @load="load">
        <div v-if="imgLoad === false" class="flex flex-col">
            <SpinnerLoad class="animate-spin w-12 h-12 mx-auto"></SpinnerLoad>
        </div>
    </figure>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SpinnerLoad from '@/assets/img/SpinnerLoad.vue'
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