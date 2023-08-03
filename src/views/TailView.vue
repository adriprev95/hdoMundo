<template>
    <Suspense>
        <template #default>
            <div>
                <section
                    class="h-screen bg-no-repeat bg-center bg-cover bg-[url('/src/assets/img/background.webp')] saturate-50 z-10 fixed overflow-hidden">
                    <main class="flex flex-col h-screen w-screen bg-gradient-to-b from-black to-transparent">
                        <button class="fixed w-5 md:w-10 mt-5 ml-5 rotate-90 animate-pulse"
                            @click="$router.push({ name: 'tailslibrary' })">
                            <ArrowDown></ArrowDown>
                        </button>
                        <button class="fixed  bottom-0 right-0 w-5 md:w-10 mb-5 mr-5 animate-pulse" @click="scrollY">
                            <ArrowDown></ArrowDown>
                        </button>
                        <section class="scrollbar-hide scroll-smooth overflow-scroll snap-y snap-mandatory">
                            <div v-for="page in pages" :key="page.page_num"
                                class="grid grid-cols-1 sm:grid-cols-2 justify-center content-center h-screen snap-always snap-center overscroll-none">
                                <PageComponent :photo_text="page.photo_text" :text="page.text">
                                </PageComponent>
                            </div>
                        </section>
                    </main>
                </section>
            </div>
        </template>
        <template #fallback>
            Loading
        </template>
    </Suspense>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getTailById } from '@/utils/ApiAcces'
import { onBeforeMount } from 'vue'
import type { Page, Tail } from '@/utils/typeTail';
import { useRoute } from 'vue-router';

import PageComponent from '@/components/PageComponent.vue';
import ArrowDown from '@/assets/img/ArrowDown.vue';


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

function scrollY() {
    const scroll = document.getElementById('scroll')
    let top = scroll!.scrollTop
    let heigth = scroll!.clientHeight
    console.log(heigth)
    scroll?.scrollTo(0, top + heigth);
}

</script>


<style scoped></style>