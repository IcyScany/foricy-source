<template>
  <div class="album-container">
    <!-- <img src="../../static/Ablum/13.jpg" alt=""> -->
    <div class="panel" v-for="(item, index) in props.content" @click="show(index)" :class="{ 'active': item.actived }"
      :style="{ backgroundImage: `url(${item.url})` }">
      <h3>{{ item.title }}</h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content:{
    title: '', 
    actived: false, 
    url: ''
  }
})

// 展开图片
const show = (index) => {
  props.content.forEach((items, index) => {
    items.actived = false
  })
  props.content[index].actived = true
}
</script>

<style lang="scss" scoped>
.album-container {
  display: flex;
  align-items: center;
  width: 90vw;
  height: 100vh;
  flex-flow: wrap;

  img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
    transition: all 2.5s linear;
    filter: blur(2px); // 毛玻璃效果
  }
}

.panel {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80%;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  flex: 5%;
  margin: 50px 10px;
  position: relative;
  transition: all 700ms ease-in;
}

.panel h3 {
  font-size: 22px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 50%;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 480px) {
  .album-container{
    height: 50vh;
  }

  .panel.active h3 {
    font-size: 18px;
  }
}
</style>