import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useResultStore = defineStore('result', () => {

  const data = ref({})

  return { data }
})
