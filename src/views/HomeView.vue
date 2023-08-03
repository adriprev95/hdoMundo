<template>
    <section
        class="h-screen bg-no-repeat bg-center bg-cover bg-[url('/src/assets/img/background.webp')] saturate-50 overflow-hidden">
        <main class="flex flex-col h-screen w-screen bg-gradient-to-b from-black to-transparent">
            <header
                class="pt-16 sm:pt-24 mx-5 sm:mx-11 md:mx-20 lg:mx-40 2xl:mx-72 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20">
                <h1
                    class="text-center justify-center font-abhayasemibold font-extrabold text-2xl sm:text-7xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl text-white">
                    Tras esta
                    puerta
                    se esconde
                    un
                    universo
                    entero
                    de maravillas y misterios
                </h1>
                <h3
                    class="text-center justify-center font-abhayasemibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white">
                    ¿Te atreves a
                    adentrarte en
                    historias de
                    otro
                    mundo?</h3>
            </header>
            <div class="grow flex flex-col justify-end items-center gap-6 py-10">
                <div class="col-span-1">
                    <figure class="w-10 md:w-20 animate-bounce">
                        <ArrowDown></ArrowDown>
                    </figure>
                </div>
                <div class="col-span-1">
                    <button class="w-52 md:w-72" @click="openDoor()">
                        <Transition mode="out-in">
                            <div v-if="doorFlag">
                                <DoorClose></DoorClose>
                            </div>
                            <div v-else>
                                <DoorOpen></DoorOpen>
                            </div>
                        </Transition>
                    </button>
                </div>
            </div>
        </main>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import DoorClose from '@/assets/img/DoorClose.vue'
import DoorOpen from '@/assets/img/DoorOpen.vue'
import ArrowDown from '@/assets/img/ArrowDown.vue';


let doorFlag = ref<Boolean>(true)
let router = useRouter();

const openDoor = () => {
    doorFlag.value = doorFlag.value ? !doorFlag.value : !doorFlag.value
    setTimeout(() => {
        router.push({ name: 'tailslibrary' })
    }, 1000);
}


</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>