<template>
  <div class="slider-container" ref="slider">
    <!-- 左侧图 -->
    <div class="left-slide" :style="{ transform: 'translateY(-' + distance + 'px)' }">
      <div v-for="(item, index) in props.content" :style="{ backgroundImage: `url('${item.url}')` }"></div>
    </div>

    <!-- 右侧图 -->
    <div class="right-slide" :style="{ transform: 'translateY(' + distance + 'px)', top: -(props.content.length - 1) * 100 + 'vh' }">
      <div v-for="(item, index) in props.content" :style="{ backgroundColor: props.content[content.length-index-1].color }">
        <h1>{{ props.content[content.length-index-1].title }}</h1>
        <p class="text" v-html="props.content[content.length-index-1].text"></p>
      </div>
    </div>

    <!-- 图片切换按钮 -->
    <div class="action-buttons">
      <button class="up-button" @click="changeSlide('up')">
        <n-icon :component='ArrowUp' size="20" color="black"></n-icon>
      </button>
      <button class="down-button" @click="changeSlide('down')">
        <n-icon :component='ArrowDown' size="20" color="black"></n-icon>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import { ArrowUp, ArrowDown } from "@vicons/ionicons5";

const props = defineProps({
  content:{
    title: '',
    text: '',
    url: '',
    color: ''
  }
})

// 获取sliderContainer元素
let slider = ref('')
let distance = ref(0)
let activeSlideIndex = 0

// 图片切换实现
const changeSlide = (direction) => {
  let sliderHeight = slider.value.clientHeight
  if (direction === 'down') {
    activeSlideIndex++
    if (activeSlideIndex > props.content.length - 1) {
      activeSlideIndex = 0
    }
  } else if (direction === 'up') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = props.content.length - 1
    }
  }
  distance.value = activeSlideIndex * sliderHeight
}
</script>

<style lang="scss" scoped>
.slider-container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  .left-slide {
    height: 100%;
    position: absolute;
    top: 0;
    width: 65%;
    left: 0;
    transition: transform 0.5s ease-in-out;
  }

  .right-slide {
    height: 100%;
    left: 65%;
    width: 35%;
    position: absolute;
    top: 0;
    transition: transform 0.5s ease-in-out;

    h1 {
      font-size: 40px;
      margin-bottom: 10px;
      margin-top: -30px;
    }

    .text {
      margin: 0 50px;
      font-family: serif;
      color: #fff;
      font-weight: 400;
      font-size: 16px;
    }
  }
}

.right-slide>div {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.left-slide>div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
}

button {
  background-color: #fff;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
  padding: 15px;
}

button:hover {
  color: #222;
}

button:focus {
  outline: none;
}

.slider-container .action-buttons button {
  position: absolute;
  left: 65%;
  top: 50%;
  z-index: 100;
}

.slider-container .action-buttons .down-button {
  transform: translateY(100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.slider-container .action-buttons .up-button {
  transform: translateX(-100%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
</style>