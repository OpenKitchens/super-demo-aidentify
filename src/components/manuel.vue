<script setup>
import { ref } from "vue"
const show = ref(true)
</script>
<template>
  <div class="relative" v-show="show">
    <button class="absolute right-2 top-2 invert z-10" @click="show = false"><img src="@/assets/images/x.svg" class="w-7"></button>
    <div class="bg-[#22201c99] backdrop-blur-xl py-3 px-5 rounded-xl flex">
      <p class="text-5xl mr-2">👀</p>
      <div>
        <h1 class="text-xl font-bold text-white">AIで個人情報を隠そう</h1>
        <p class="text-stone-400">Editアイコンをクリックして編集モード</p>
        <p class="text-stone-400">に移行し、隠したいデータに合う</p>
        <p class="text-stone-400">プレビューをタップしてmagicを実行</p>
      </div>
    </div>
  </div>
</template>