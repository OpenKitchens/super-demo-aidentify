<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<template>
  <div class="flex">
    <button><img src="@/assets/images/back.svg" @click='router.push("/")'></button>
    <p class="rounded-full px-3 py-1 bg-stone-800 ml-3 text-stone-400">Edit</p>
    <p class="rounded-full px-3 py-1 bg-stone-800 ml-3 text-stone-400">AI</p>
  </div>
</template>