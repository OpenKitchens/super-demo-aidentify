<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

import { useViewControlStore } from '@/stores/viewcontrol.js'
const store = useViewControlStore()

import { useResultStore } from '@/stores/result.js'
import { ref } from "vue"

const result = useResultStore()

//const blob = new Blob([result.data], { type: 'image/jpeg' });
const imageUrl = ref(URL.createObjectURL(result.data))
</script>
<template>
  <div class="flex justify-between h-24 w-80">
    <div class="my-auto"><button class="bg-white w-14 h-14 rounded-full"
        @click='router.push("edit"); store.router("edit")'><img src="@/assets/images/arrow-back.svg"
          class="mx-auto w-6"></button>
    </div>
    <div class="my-auto invert"><a :href="imageUrl" download="processed_image.jpg"
        class="group relative inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 transition-all duration-300 hover:w-44">
        <div
          class="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100 text-xl font-bold">
          download</div>
        <div class="absolute right-5"><img src="@/assets/images/download.svg" class="invert w-6 h-6"></div>
      </a>
    </div>
    <div class="my-auto"><button class="bg-white w-14 h-14 rounded-full"
        @click='router.push("/"); store.router("/")'><img src="@/assets/images/x.svg"
          class="mx-auto w-6"></button>
    </div>
  </div>
</template>