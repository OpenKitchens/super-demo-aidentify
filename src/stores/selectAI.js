import { ref } from "vue"
import { defineStore } from 'pinia'

export const useSelectAIStore = defineStore('selectAI', () => {

  const data = ref(50)

  return { data }
})
