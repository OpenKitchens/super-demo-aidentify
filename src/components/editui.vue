<script setup>
import { useViewControlStore } from '@/stores/viewcontrol.js'
import { computed } from "vue"
import { ref } from "vue"
import Toggle from "@/components/toggle.vue"
import Infobar from "@/components/infobar.vue"
import StyleBucket from "@/components/editui/styleBucket.vue"
import StyleText from "@/components/editui/styleText.vue"
const store = useViewControlStore()

console.log(store.viewpinia)
const view = computed(() => store.viewpinia)

import { useSelectAIStore } from '@/stores/selectAI.js'
const AIstore = useSelectAIStore()

const rotate = ref(10)

const close = () => {
  AIstore.data = rotate.value
  console.log(AIstore.data)
  store.router("edit")
}

</script>
<template>
  <div class="mx-auto w-[90vw]">
    <div class="flex mb-3 w-[90vw]">
      <Transition>
        <Toggle class="mr-2" v-show="!view.editText && !view.editTab" />
      </Transition>

      <Transition>
        <div v-show="view.editText">
          <div class="fixed top-0 right-0 w-full flex z-100">
            <div class="rounded-3xl bg-neutral-800 p-2 flex ml-auto mt-20 w-60 border border-neutral-700">
              <button
                class="rounded-full bg-[#ffffff20] p-2 rotate-0 transition-transform duration-300 hover:rotate-180"><img
                  src="@/assets/images/reload.svg" class="invert"></button>
              <p class="my-auto px-3 text-[#ffffffaa]">加工範囲を選択中...</p>
            </div>

            <button class="mt-20 ml-4 mr-auto opacity-80" @click="store.router('editPaint');"><img
                src="@/assets/images/x-circle.svg" class="invert w-6 h-6"></button>
          </div>

          <div class="fixed bottom-0 right-0 w-full z-100">
            <button class="w-60 bg-neutral-800 border-neutral-700 px-5 py-3 font-bold text-md text-white rounded-xl mb-12 mx-auto block"
              @click="store.router('editPaint');">完了</button>
          </div>
        </div>
      </Transition>

      <div v-show="view.editPaint" class="w-full">
        <div
          class="bg-neutral-800 backdrop-blur-md rounded-3xl border border-1 border-stone-600 p-1 w-30 relative w-full">
          <div class="flex">
            <p class="text-sm mx-3 mt-3 mb-4 font-bold text-stone-400">削除ボリューム {{ rotate }}</p>
            <button class="ml-auto invert"><img src="@/assets/images/x-circle.svg" class="w-6 h-6 mr-3 mb-1"
                @click="close()"></button>
          </div>
          <div class="wrapper mx-3 mb-2">
            <input type="range" min="0" max="100" v-model="rotate" /><!--step="10"-->
          </div>
        </div>
      </div>
    </div>
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

/*
.slider {
  -webkit-appearance: none;
  height: 40px;
  background: #ffffff5d;
  outline: none;
  opacity: 0.9;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 50px;
  padding-right: 10px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  background: #ffffff5d;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px;
}

.slider::-moz-range-thumb {
  width: 30px;
  height: 30px;
  background: #888;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px;
}
*/
</style>