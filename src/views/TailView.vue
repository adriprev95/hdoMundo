<template>
    <div>
        <section
            class="h-screen bg-no-repeat bg-center bg-cover bg-[url('/src/assets/img/6313772.jpg')] saturate-50 z-10 fixed overflow-hidden">
            <main class="flex flex-col h-screen w-screen bg-gradient-to-b from-black to-transparent">
                <section class="scrollbar-hide overflow-scroll">
                    <div v-for="page in pages" :key="page.page_num"
                        class="grid grid-cols-1 sm:grid-cols-2 justify-center content-center h-screen scroll-smooth">
                        <PageComponent :photo_text="page.photo_text" :text="page.text"></PageComponent>
                    </div>
                </section>
            </main>
        </section>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getTailById } from '@/utils/ApiAcces'
import { onBeforeMount } from 'vue'
import type { Page, Tail } from '@/utils/typeTail';
import { useRoute } from 'vue-router';
import PageComponent from '@/components/PageComponent.vue';

const route = useRoute();
const id = route.params.id;
const tail = ref<Tail>()
const pages = ref<Array<Page>>()

onBeforeMount(async () => {
    try {
        const res = await getTailById(id);
        console.log('Respuesta de la API:', res);
        if (Array.isArray(res) && res.length > 0) {
            tail.value = res[0]; // La respuesta es un array, así que seleccionamos el primer elemento
            pages.value = tail.value?.pages || [];
            console.log('Páginas:', pages.value);
            console.log('Tail:', tail.value);
        } else {
            console.error('La respuesta de la API no es válida.');
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
})
</script>


<style scoped></style>