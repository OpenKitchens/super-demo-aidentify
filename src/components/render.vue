<script setup>
import { ref, computed, onMounted } from 'vue';
import { useImageStore } from '@/stores/image.js'
const image = useImageStore()

import { useViewControlStore } from '@/stores/viewcontrol.js'
const store = useViewControlStore()

console.log(store.viewpinia)
const view = computed(() => store.viewpinia)

import { useCoordinateStore } from '@/stores/coordinate.js'
const coordinate = useCoordinateStore()

const imageUrl = ref(null);

const uploadedImage = ref(null) // refで画像要素を参照


// 画像の幅と高さを取得する関数
const getImageDimensions = () => {
  if (uploadedImage.value) {
    const width = uploadedImage.value.clientWidth
    const height = uploadedImage.value.clientHeight

    return {width: width,height: height}
  }
}

// 画像が表示されたら（DOMにマウントされたら）幅と高さを取得
onMounted(() => {
  getImageDimensions()
})

const file = image.data

// FileReader API を使って画像データを base64 文字列に変換
const reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = () => {
  imageUrl.value = reader.result;
};

const xPos = ref(0)
const yPos = ref(0)
const point1Style = ref({ left: '-10px', top: '-10px', width: "0px", height: "0px" })
const point2Style = ref({ left: '-10px', top: '-10px', width: "0px", height: "0px" })

const beforeXpos = ref(0)
const beforeYpos = ref(0)

const space = ref({ left: '0px', top: '0px', width: '0px', height: '0px' })

const point1 = ref(true)

const getClickPosition = (event) => {

  coordinate.width = getImageDimensions().width
  coordinate.height = getImageDimensions().height

  const image = event.target
  const rect = image.getBoundingClientRect()  // 画像の位置とサイズを取得

  // 画像内の相対座標を計算
  xPos.value = event.clientX - rect.left
  yPos.value = event.clientY - rect.top

  //coordinate.data = {"xPos": xPos, "yPos": yPos}

  //point1.value = "left:"+xPos+";top:"+yPos

  if (point1.value) {
    point1Style.value = { left: '-10px', top: '-10px' }
    point2Style.value = { left: '-10px', top: '-10px', width: "0px", height: "0px" }

    beforeXpos.value = 0
    beforeYpos.value = 0

    space.value = { left: '0px', top: '0px', width: '0px', height: '0px' }

    point1Style.value = { left: `${xPos.value}px`, top: `${yPos.value}px` }
    point1.value = !point1.value
    console.log("point1")
    beforeXpos.value = xPos.value
    beforeYpos.value = yPos.value
  } else {
    point2Style.value = { left: `${xPos.value}px`, top: `${yPos.value}px` }
    point1.value = !point1.value
    console.log("point2")

    let width = xPos.value - beforeXpos.value
    let height = yPos.value - beforeYpos.value

    coordinate.data = {"point1": {"xPos": beforeXpos, "yPos": beforeYpos}, "point2": {"xPos": xPos, "yPos": yPos}}
    coordinate.state = "special-lama"

    if (width < 0 && height < 0) {
      console.log("2")
      space.value = { left: `${xPos.value + 9.5}px`, top: `${beforeYpos.value + 10 - (-1 * (yPos.value - beforeYpos.value))}px`, width: `${beforeXpos.value - xPos.value}px`, height: `${-1 * (yPos.value - beforeYpos.value)}px` }
    } else if (width > 0 && height < 0) {
      console.log("1")
      space.value = { left: `${xPos.value + 9.5 - (-1 * (beforeXpos.value - xPos.value))}px`, top: `${beforeYpos.value + 10 - (-1 * (yPos.value - beforeYpos.value))}px`, width: `${-1 * (beforeXpos.value - xPos.value)}px`, height: `${-1 * (yPos.value - beforeYpos.value)}px` }
    } else if (width > 0 && height > 0) {
      console.log("4")
      space.value = { left: `${beforeXpos.value + 9.5}px`, top: `${beforeYpos.value + 10}px`, width: `${xPos.value - beforeXpos.value}px`, height: `${yPos.value - beforeYpos.value}px` }
    } else if (width < 0 && height > 0) {
      console.log("3")
      space.value = { left: `${xPos.value + 9.5}px`, top: `${beforeYpos.value + 10}px`, width: `${beforeXpos.value - xPos.value}px`, height: `${yPos.value - beforeYpos.value}px` }
    }
  }

  console.log("hello")
  console.log(`left: ${xPos}px; top: ${yPos}px`)
}


</script>
<template>

  <div class="select" v-show="view.editText">
    <div class="space fixed z-100 border-dashed border-2 border-[#ffffffaa] w-5 h-5 shadow-2xl shadow-black"
      :style="space"></div>
    <div class="point1 fixed z-100 rounded-full w-5 h-5 bg-[#ffffff] shadow-2xl shadow-black"
      :style="point1Style"></div>
    <div class="point2 fixed z-100 rounded-full w-5 h-5 bg-[#ffffff] shadow-2xl shadow-black"
      :style="point2Style"></div>
    <img v-if="imageUrl" :src="imageUrl" alt="アップロードされた画像" class="w-[100vw]" @click="getClickPosition" ref="uploadedImage">
    <p class="text-[#ffffff99] text-center">{{ xPos }},{{ yPos }}</p>
  </div>

  <div class="normal" v-show="!view.editText">
    <img v-if="imageUrl" :src="imageUrl" alt="アップロードされた画像" class="w-[100vw]">
  </div>
  <!--  {{ beforeXpos }}, {{ beforeYpos }}
  <p class="text-[#ffffff99] text-center">{{ space }}</p>
  <p class="text-[#ffffff99] text-center">{{ point1Style }}</p>
  <p class="text-[#ffffff99] text-center">{{ point2Style }}</p>
  -->
</template>

<style scoped>
.space {
  pointer-events: none;
}
</style>