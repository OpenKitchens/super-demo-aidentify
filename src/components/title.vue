<script setup>
import { useViewControlStore } from '@/stores/viewcontrol.js'
const store = useViewControlStore()

console.log(store.viewpinia)
</script>
<template>
  <div class="relative block">
    <h2 class="text-2xl font-bold text-center text-white">AIで個人情報を隠す</h2>
    <div class="mt-2 text-sm text-center text-[#ffffffee]">
      <p>画像から個人情報を削除して</p>
      <p>安心なインターネットライフを！</p>
    </div>
    <button class="mt-5 mx-auto rounded-xl bg-stone-300 text-lg px-5 py-2 font-bold bg-stone-200 bg-white text-black" @click="store.router('uploadimage')">画像をアップロード</button>
  </div>
</template>