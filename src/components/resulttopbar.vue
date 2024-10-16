<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

import { useViewControlStore } from '@/stores/viewcontrol.js'
const store = useViewControlStore()
</script>
<template>
  <div class="flex">
    <button><img src="@/assets/images/back.svg" @click='router.push("edit");store.router("edit")'></button>
    <p class="rounded-full px-3 py-1 bg-stone-800 ml-3 text-stone-400">result</p>
    <p class="rounded-full px-3 py-1 bg-stone-800 ml-3 text-stone-400">AI</p>
  </div>
</template>