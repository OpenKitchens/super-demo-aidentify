import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCoordinateStore = defineStore('coordinate', () => {

  const data = ref({"point1": {"xPos": 0, "yPos": 0}, "point2": {"xPos": 0, "yPos": 0}})
  const state = ref('simple-lama')
  const width = ref()
  const height = ref()

  return { data, state, width, height }
})
