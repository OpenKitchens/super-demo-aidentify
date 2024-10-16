import { ref } from "vue"
import { defineStore } from 'pinia'

export const useUrlStore = defineStore('url', () => {

  //https://powerful-centrally-chimp.ngrok-free.app
  //https://cool-emu-learning.ngrok-free.app

  const type = {
    "w": "https://wired-kitten-adequately.ngrok-free.app",
    "c": "https://cool-emu-learning.ngrok-free.app",
    "p": "https://powerful-centrally-chimp.ngrok-free.app"
  }

  const change = (changeType) => {
    data.value = type[changeType]
  }

  const data = ref("https://wired-kitten-adequately.ngrok-free.app")

  return { data, change }
})
