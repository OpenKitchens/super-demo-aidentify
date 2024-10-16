import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useClassifyStore = defineStore('result', () => {

  const data = ref({})

  return { data }
})
