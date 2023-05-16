<template>
  <n-message-provider>
    <background-music></background-music>
    <router-view></router-view>
  </n-message-provider>
</template>

<script setup>
import BackgroundMusic from './components/BackgroundMusic.vue'
</script>

<style scoped>
</style>
