<script setup>

import axios from 'axios';
import { ref } from "vue"
import { useViewControlStore } from '@/stores/viewcontrol.js'
const store = useViewControlStore()

import { useClassifyStore } from '@/stores/classify.js'
const classifyStore = useClassifyStore()

import { useImageStore } from '@/stores/image.js' // imageストア用
const image = useImageStore()

import { useUrlStore } from '@/stores/url.js'
const url = useUrlStore()

//store.router("loading")

const data = ref("wait...")

const formData = new FormData();
  formData.append('file', image.data);

  console.log("hello")

axios.post(`${url.data}/classify-image/`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
  .then(response => {
    classifyStore.data = response.data.danger
    console.log(response.data.danger)
    data.value = response.data.danger
  })
  .catch(error => {
    console.error(error);
  });

</script>
<template>
  <p class="text-center text-white">危険度: {{ data }}/100</p>
</template>