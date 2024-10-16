import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useViewControlStore = defineStore('counter', () => {
  const views = {
    "title": false,
    "uploadimage": false,
    "edit": false,
    "editTab": false,
    "editPaint": false,
    "editText": false,
    "loading": false,
    "result": false
  }

  const viewpinia = ref({})

  const router = (object) =>{
    viewpinia.value = { ...views }
    viewpinia.value[object] = true
    console.log(object)
  }



  return { viewpinia, router }
})
