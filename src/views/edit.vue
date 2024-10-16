<script setup>
import Topbar from "@/components/topbar.vue"
import Manuel from "@/components/manuel.vue"
import Infobar from "@/components/infobar.vue"
import Action from "@/components/action.vue"
import EditUI from "@/components/editui.vue"
import Render from "@/components/render.vue"
import Loading from "@/components/loading.vue"
import { computed } from "vue"
import { useViewControlStore } from '@/stores/viewcontrol.js'

import StartInfo from "@/components/startinfo.vue"
const store = useViewControlStore()

const view = computed(() => store.viewpinia)
</script>

<template>
  <div>
    <div class="bg-[#110a0a] w-screen h-dvh fixed z-[-2] top-0 left-0"></div>
    <Loading v-show="view.loading" class="fixed top-0 left-0 z-20 w-screen" />
    <div class="bg-gradient-to-b from-black via-[#00000055]/70 w-[100vw] left-0 fixed top-0 z-20">
      <div class="relative flex mx-6">
        <Topbar class="mx-auto w-[85vw] mt-6 mb-8" />
        <!--<button class="ml-auto"><img src="@/assets/images/settings.svg" @click='router.push("/")' class="invert w-6"></button>-->
      </div>
    </div>
    <div class="fixed top-0 left-0 w-screen z-10" v-show="!view.editText">
      <div class="mt-20 relative" v-show="false">
        <Manuel class="mx-auto w-[92vw]" />
      </div>
    </div>

    <div class="fixed bottom-0 left-0 bg-gradient-to-t from-black via-[#00000055]/70 z-40" v-show="!view.editText">
      <div class="relative block w-[100vw]">
        <div class="mb-2 mt-10">
          <Infobar />
        </div>
      </div>
      <div class="mb-8">
        <Action />
      </div>
    </div>

    <div class="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] w-[100vw] z-1">
      <Render />
    </div>

    <Transition>
      <div class="fixed bottom-16 left-0 z-50" v-show="view.editTab || view.editPaint || view.editText">
        <div class="relative block w-[100vw] left-0">
          <EditUI />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease, transform 0.5s;
  transform: translateX(0);
  transform: translateY(0px);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(0);
  transform: translateY(100px);
}

.v-leave-active {
  /*opacity: 0;*/
  transform: translateX(0);
  transform: translateY(100px);
}
</style>