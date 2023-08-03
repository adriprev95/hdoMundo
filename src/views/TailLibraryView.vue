<template>
    <Suspense>
        <template #default>
            <section
                class="h-screen bg-no-repeat bg-center bg-cover bg-[url('/src/assets/img/background.webp')] saturate-50">
                <main class="flex flex-col h-screen w-screen bg-gradient-to-b from-black to-transparent">
                    <header
                        class="pt-24 mx-5 sm:mx-11 md:mx-20 lg:mx-40 2xl:mx-72 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20">
                        <h1
                            class="text-center justify-center font-abhayasemibold font-extrabold text-4xl sm:text-7xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white">
                            Historias de otro mundo
                        </h1>

                    </header>
                    <section
                        class="grow grid grid-cols-1 px-20 gap-9 justify-center content-center place-content-start place-items-center">
                        <TailCardComponent v-for="tail in listTails" :key="tail.id" :id="tail.id"
                            :img-url="tail.poster_path">
                        </TailCardComponent>
                    </section>
                </main>
            </section>
        </template>
        <template #fallback>
            <h1 class=" text-4xl text-center">Loading...</h1>
        </template>
    </Suspense>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getTails } from '@/utils/ApiAcces'
import { onBeforeMount } from 'vue'
import type { Page, Tail } from '@/utils/typeTail';
import TailCardComponent from '@/components/TailCardComponent.vue';

const listTails = ref<Array<Tail>>();


onBeforeMount(async () => {
    listTails.value = await getTails()
    console.log(listTails.value)
})
</script>

<style lang="scss" scoped></style>