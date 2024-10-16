import { ref } from "vue"
import { defineStore } from 'pinia'

export const useEndpointStore = defineStore('endpoint', () => {
  const data = ref("")

  return { data, change }
})
