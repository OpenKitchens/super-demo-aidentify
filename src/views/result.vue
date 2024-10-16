<script setup>
import Topbar from "@/components/resulttopbar.vue"
import EndAction from "@/components/endaction.vue"
import { useResultStore } from '@/stores/result.js'
import { ref } from "vue"

const result = useResultStore()

//const blob = new Blob([result.data], { type: 'image/jpeg' });
const imageUrl = ref(URL.createObjectURL(result.data))



/*const escapedString = URL.createObjectURL(blob)
const binaryString = escapeToBinary(escapedString);
const base64String = binaryToBase64(binaryString);

//const imageUrl = ref(`data:image/jpeg;base64,${base64String}`)


function escapeToBinary(escapedString) {
  // Unicodeエスケープシーケンスを16進数に変換する正規表現
  const regex = /\\u([\d\w]{4})/gi;
  return escapedString.replace(regex, (match, hex) => {
    return String.fromCharCode(parseInt(hex, 16));
  });
}

function binaryToBase64(binaryString) {
  const byteArray = new TextEncoder().encode(binaryString);
  return btoa(String.fromCharCode.apply(null, byteArray));
}*/

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result.split(',')[1]); // Base64部分のみ抽出
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

const historys = localStorage.getItem("historyDatas")
if (historys) {
  let data = JSON.parse(historys)

  blobToBase64(result.data).then(base64String => {
    data.push({ img: base64String, publishedAt: new Date().toLocaleDateString('sv-SE') })
    localStorage.setItem("historyDatas", JSON.stringify(data))
  })
} else {
  blobToBase64(result.data).then(base64String => {
    localStorage.setItem("historyDatas", JSON.stringify([{ img: base64String, publishedAt: new Date().toLocaleDateString('sv-SE') }]))
  })
}

</script>

<template>
  <div>
    <div class="bg-[#110a0a] w-screen h-dvh fixed z-[-2] top-0 left-0"></div>
    <div class="bg-gradient-to-b from-black via-[#00000055]/70 w-[100vw] left-0 fixed top-0">
      <div class="relative">
        <Topbar class="mx-auto w-[85vw] mt-6 mb-8" />
      </div>
    </div>

    <div class="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] w-[100vw] z-[-1]">
      <img v-if="imageUrl" :src="imageUrl" alt="アップロードされた画像" class="w-[100vw]" id="picture">
    </div>

    <div class="fixed bottom-0 left-0 bg-gradient-to-t from-black via-[#00000055]/70">
      <div class="mt-8 mb-6 w-[100vw]">
        <EndAction class="mx-auto" />
      </div>
    </div>
  </div>
</template>

<style></style>