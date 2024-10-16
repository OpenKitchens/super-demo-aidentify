import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useImageStore = defineStore('image', () => {

  const data = ref({})

  return { data }
})
