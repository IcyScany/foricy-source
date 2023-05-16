<template>
  <!-- BGM -->
  <n-icon class="musicplay" :component='MusicalNotes' size="28" color="#e6695b" @click="musicPlay()"></n-icon>
  <audio id="bgm" src="./1.mp3" autoplay="autoplay" loop="loop" preload="preload"></audio>
</template>

<script setup>
import { MusicalNotes } from "@vicons/ionicons5";

const musicPlay = () => {
  var audio = document.getElementById('bgm');
  if (audio.paused) {
    audio.play();
  }else{
    audio.pause();
  }
}
</script>

<style lang="scss" scoped>
.musicplay {
   color: #e6695b;
   position: fixed;
   top: 20px;
   right: 30px;
   font-size: 25px;
   cursor: pointer;
   z-index: 10;
 }
</style>
