<script setup>
import { ref } from 'vue'
import { useUrlStore } from '@/stores/url.js'

const url = useUrlStore()
const endpoint = ref()

const kakiko = () => {
  localStorage.setItem('endpointValue', endpoint.value)
}
</script>

<template>
  <div>
    <div class="my-5"><button @click="url.change('w')"
        class="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition active:scale-110 ">wired-kitten-adequately</button>
    </div>
    <div class="my-5"><button @click="url.change('c')"
        class="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition active:scale-110 ">cool-emu-learning</button>
    </div>
    <div class="my-5"><button @click="url.change('p')"
        class="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition active:scale-110 ">powerful-centrally-chimp</button>
    </div>

    <input v-model="endpoint">
    <button @click="kakiko">カキコ</button>
  </div>
</template>
