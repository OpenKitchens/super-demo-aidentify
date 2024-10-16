<script setup>
import { ref, computed } from "vue"
import Title from "@/components/title.vue"
import Upload from "@/components/upload.vue"
import Background from "@/components/background.vue"

import { useViewControlStore } from '@/stores/viewcontrol.js'
const store = useViewControlStore()

const view = computed(() => store.viewpinia)

store.router("title")

const history = ref(false)

import { reactive } from 'vue'

const historyDatas = ref()

const historys = localStorage.getItem("historyDatas")
if (historys) {
  historyDatas.value = JSON.parse(historys)
} else {
  historyDatas.value = false
}


/*const historyDatas = ref(
  {img: "https://images.unsplash.com/photo-1727333002424-690e37e91aa5?q=80&w=2237&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", publishedAt: '2016-04-10'},
  {img: "https://images.unsplash.com/photo-1727333002424-690e37e91aa5?q=80&w=2237&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", publishedAt: '2016-04-10'},
  {img: "https://images.unsplash.com/photo-1727333002424-690e37e91aa5?q=80&w=2237&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", publishedAt: '2016-04-10'}
])*/
</script>

<template>
  <div>

    <div class="w-screen h-screen position fixed z-0 top-0 left-0">
      <Background />
    </div>
    <div class="position fixed top-8 left-8 z-50">
      <button @click="history = !history"
        class="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-neutral-800 font-medium text-neutral-200 transition-all duration-300 hover:w-32">
        <div
          class="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100 ml-12">
          History</div>
        <div class="absolute left-2.5"><img src="@/assets/images/list.svg" class="invert w-7 "></div>
      </button>
    </div>

    <Transition>
      <div v-show="history" class="h-dvh w-full top-0 right-0 fixed z-40">
        <h1 class="text-2xl font-bold text-white mt-24 ml-10 mb-6">History</h1>

        <ul v-show="historyDatas" class="ml-10">
          <li v-for="historyData in historyDatas">
            <img :src="historyData.img" class="rounded-md">
            <p>publishedAt {{ historyData.publishedAt }}</p>
          </li>
        </ul>

        <div v-show="!historyDatas" class="position absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h1 class="text-2xl text-center font-bold text-white">初めての方ですか？</h1>
          <p class="text-center text-white">まずはAidentifyをお試しください！</p>
        </div>
      </div>
    </Transition>

    <Transition>
      <div v-show="!history">
        <img src="@/assets/images/logo2.png"
          class="w-52 fixed top-[40vh] left-[50vw] translate-x-[-50%] translate-y-[-50%]" v-if="!view.uploadimage">
        <div class="fixed bottom-12 left-1/2 translate-x-[-50%]" v-if="!view.uploadimage">
          <Title />
        </div>

        <div class="fixed bottom-8 left-1/2 translate-x-[-50%] z-2" v-show="view.uploadimage">
          <Upload class="fadeUp" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
