<script setup>
import { ref } from "vue"
import { useSelectAIStore } from '@/stores/selectAI.js'
const store = useSelectAIStore()

const mosaicClass = ref("relative mr-4 p-2 rounded-xl border border-1 border-stone-700 backdrop-blur-xl bg-[#6e68612d] shadow-lg")
const inpaintClass = ref("relative mr-4 p-2 rounded-xl")
const check = ref("mosaic")

const mosaic = () => {
  mosaicClass.value = "relative mr-4 p-2 rounded-xl border border-1 border-stone-700 backdrop-blur-xl bg-[#6e68612d] shadow-lg"
  inpaintClass.value = "relative mr-4 p-2 rounded-xl"
  check.value = "mosaic"
  store.init()
  store.type.textMosaic = true
}

const inpaint = () => {
  inpaintClass.value = "relative mr-4 p-2 rounded-xl border border-1 border-stone-700 backdrop-blur-xl bg-[#6e68612d] shadow-lg"
  mosaicClass.value = "relative mr-4 p-2 rounded-xl"
  check.value = "inpaint"
  store.init()
  store.type.textInpaint = true
}
</script>
<template>
  <div class="w-[90vw]">
    <div
      class="bg-[#22201c99] py-2 px-2 rounded-2xl w-[90vw] border border-1 border-stone-800 backdrop-blur-xl fadeUp">
      <div class="flex">
        <div :class="mosaicClass" @click="mosaic">
          <img src="@/assets/images/check-circle.svg" class="absolute right-[-7px] top-[-7px] w-8" v-show="check == 'mosaic'">
          <img src="@/assets/images/hoge.png" class="w-16 rounded-xl">
          <p class="mt-2 text-bold text-white text-md text-center">モザイク</p>
        </div>
        <div :class="inpaintClass" @click="inpaint">
          <img src="@/assets/images/check-circle.svg" class="absolute right-[-7px] top-[-7px] w-8" v-show="check == 'inpaint'">
          <img src="@/assets/images/hoge.png" class="w-16 rounded-xl">
          <p class="mt-2 text-bold text-white text-md text-center">消しゴム</p>
        </div>
      </div>
    </div>
  </div>
</template>