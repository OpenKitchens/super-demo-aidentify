<script setup>
import { ref, computed } from "vue"
import { useViewControlStore } from '@/stores/viewcontrol.js'
const store = useViewControlStore()

const bucket = () => {
  store.router("editPaint")

  bucketClass.value = active
  textClass.value = passive
  label.value = "bg-white w-14 h-14 rounded-[1.2rem] position absolute top-1/2 translate-y-[-50%] circleAnimeBucket"
}

const text = () => {
  store.router("editText")

  bucketClass.value = passive
  textClass.value = active
  label.value = "bg-white w-14 h-14 rounded-[1.2rem] position absolute top-1/2 translate-y-[-50%] circleAnimeText"
}

const active = "w-14 h-14 rounded-[1.2rem] relative z-10"
const passive = "w-14 h-14 rounded-[1.2rem] invert relative z-10"

const bucketClass = ref(active)
const textClass = ref(passive)

const label = ref("bg-white w-14 h-14 rounded-[1.2rem] position absolute top-1/2")

bucket()

const view = computed(() => store.viewpinia)
if(view.editPaint){
  bucket()
  console.log("editPaint")
}
</script>

<template>
  <div class="bg-neutral-800 backdrop-blur-md rounded-3xl p-1 border border-1 border-stone-600 w-30 relative w-16 h-32 flex flex-col-reverse gap-y-2">

    <button :class="bucketClass" @click="bucket">
      <img src="@/assets/images/bucket.svg" class="mx-auto w-6 h-6"></button>
    <button :class="textClass" @click="text">
      <img src="@/assets/images/cursor.svg" class="mx-auto w-6 h-6"></button>
    <div :class="label"></div>
  </div>
</template>
<style scoped>
.circleAnimeText {
  animation: circleAnimeText 0.5s;
  margin-top: -2rem;
}

@keyframes circleAnimeText {
  from {
    margin-top: 2rem;
  }

  to {
    margin-top: -2rem;
  }
}

.circleAnimeBucket {
  animation: circleAnimeBucket 0.5s;
  margin-top: 2rem;
}

@keyframes circleAnimeBucket {
  from {
    margin-top: -2rem;
  }

  to {
    margin-top: 2rem;
  }
}
</style>