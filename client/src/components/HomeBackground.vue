<template>
  <div class="home-bg">
    <img :src=url1 alt="" :style="{ opacity: opa1 }">
    <img :src=url2 alt="" :style="{ opacity: opa2 }">
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import { getHome } from '../api';
import { baseURL } from '../api';

onMounted(async()=>{
  await getData()
  showBg()
})

let img_list = reactive([])

// 索引值，透明度
let url1 = ref('')
let url2 = ref('')
let index1 = ref(1)
let index2 = ref(0)
let opa1 = ref(1)
let opa2 = ref(0)

// 获取数据
const getData = async ()=>{
  let { data } = await getHome()
  data.data.forEach((item, index)=>{
    img_list[index] = baseURL + item.url
  })
}

// 轮播实现
const showBg = () => {
  let num = img_list.length
  url1.value = img_list[0]
  url2.value = img_list[1]

  // 图片效果，循环 + 渐入渐出
  setInterval(()=>{
    opa1.value = opa1.value ? 0 : 1
    opa2.value = opa2.value === 0 ? 1 : 0
    if(opa1.value === 1){
      index1.value = (index1.value + 2) % num
      url1.value = img_list[index1.value]
    }
    else{
      index2.value = (index2.value + 2) % num
      url2.value = img_list[index2.value]
    }
  }, 6500)
}
</script>

<style lang="scss" scoped>
.home-bg {
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  min-height: 900px;
  overflow: hidden;
  position: fixed;
  z-index: -10;

  img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
    transition: all 2s linear;
    filter: blur(2px); // 毛玻璃效果
  }
}
</style>