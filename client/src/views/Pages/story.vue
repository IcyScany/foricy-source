<template>
  <div class="story">
    <story-list :content="content"/>
  </div>
</template>

<script setup>
import StoryList from '../../components/StoryList.vue'
import { onMounted, reactive } from 'vue';
import { getStory, baseURL } from '../../api';

onMounted(()=>{
  getData()
})

// 页面数据
const content = reactive([])

const getData= async ()=>{
  let { data } = await getStory()
  data.data.forEach((item, index)=>{
    content[index] = {
      title: item.title,
      url: baseURL + item.url,
      text: item.text,
      color: item.color
    }
  })
}

</script>

<style lang="scss" scoped>
.memory {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>