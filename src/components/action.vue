<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router'

import { useViewControlStore } from '@/stores/viewcontrol.js' // viewcontrolストア用
import { useImageStore } from '@/stores/image.js' // imageストア用
import { useSelectAIStore } from '@/stores/selectAI.js' // selectAIストア用
import { useResultStore } from '@/stores/result.js' // resultストア用
import { useCoordinateStore } from '@/stores/coordinate.js'
import { useUrlStore } from '@/stores/url.js'
import { useEndpointStore } from '@/stores/endpoint.js'

//const endpoint = useEndpointStore()

const store = useViewControlStore()
const image = useImageStore()
const select = useSelectAIStore()
const result = useResultStore()
const coordinate = useCoordinateStore()
//const url = useUrlStore()

console.log(store.viewpinia)

const router = useRouter()

const uploadImage = () => {
  store.router("loading")

  const formData = new FormData();
  formData.append('image', image.data);
  formData.append('risk_level', select.data);

  formData.append('x1', parseFloat(coordinate.data.point1.xPos / coordinate.width))
  formData.append('y1', parseFloat(coordinate.data.point1.yPos / coordinate.height))
  formData.append('x2', parseFloat(coordinate.data.point2.xPos / coordinate.width))
  formData.append('y2', parseFloat(coordinate.data.point2.yPos / coordinate.height))

  console.log("x1:" + coordinate.data.point1.xPos / coordinate.width + "y1:" + coordinate.data.point1.yPos / coordinate.height + "x2:" + coordinate.data.point2.xPos / coordinate.width + "y2:" + coordinate.data.point2.yPos / coordinate.height)

  console.log(localStorage.getItem('endpointValue'))
  axios.post(localStorage.getItem('endpointValue'), formData, {
    responseType: 'blob',
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
    .then(response => {
      result.data = response.data
      router.push("result");
    })
    .catch(error => {
      console.error(error);
      router.push("result")
    });
}
</script>
<template>
  <div class="flex justify-between h-24 w-80 mx-auto">
    <div class="my-auto" @click="store.router('editPaint')"><button class="bg-white w-14 h-14 rounded-full"><img
          src="@/assets/images/edit.svg" class="mx-auto w-6" @click="store.router('editPaint')"></button>
    </div>
    <!--<div class="my-auto" @click="uploadImage"><button class="bg-indigo-500 w-20 h-20 rounded-full" @click="uploadImage"><img
          src="@/assets/images/magic.svg" class="mx-auto w-8"></button>
    </div>-->

    <button @click="uploadImage"
      class="group relative inline-flex items-center justify-center overflow-hidden transition hover:scale-110 bg-indigo-500 w-20 h-20 rounded-full "><span><img
          src="@/assets/images/magic.svg" class="mx-auto w-8"></span>
      <div
        class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
        <div class="relative h-full w-8 bg-white/20"></div>
      </div>
    </button>


    <div class="my-auto" @click="router.push('/')"><button class=" w-14 h-14 rounded-full"><img
          src="@/assets/images/house.svg" class="mx-auto w-8 invert" @click='router.push("/")'></button>
    </div>

  </div>
</template>