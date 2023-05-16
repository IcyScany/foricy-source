<template>
  <div class="home">
    <home-background />
    <time-counter />
  </div>
</template>

<script setup>
import TimeCounter from '../../components/TimeCounter.vue'
import HomeBackground from '../../components/HomeBackground.vue'
import { useMessage } from 'naive-ui'

let message = useMessage()
if (! isMobile()) {
  message.success('按F11进入全屏模式观赏更佳噢', {duration: 1500})
}

function isMobile() {
  let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return flag;
}

</script>

<style scoped>
.home{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
