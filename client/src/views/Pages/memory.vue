<template>
  <div class="memory">
    <memory-album v-for="(index) in (parseInt(content.length/activeIndex) + 1)"  :content="content.slice(activeIndex * (index-1), activeIndex * index)"/>

    <n-button size="" color="" @click="UploadControl" style="position: fixed; right: 1vw; bottom: 1vh;">
      {{ info }}
    </n-button>
    <upload-tool v-if="showUpload"></upload-tool>
  </div>
</template>

<script setup>
import MemoryAlbum from '../../components/MemoryAlbum.vue'
import UploadTool from '../../components/UploadTool.vue';
import { ref, reactive, onMounted, onUpdated } from 'vue';
import { getAlbum, baseURL } from '../../api/index'
import { useMessage } from 'naive-ui'

// 获取数据
onMounted(()=>{
  getData()
})

const message = useMessage()
const info = ref('添加图片')
const showUpload = ref(false)

const content = reactive([])
const activeIndex = isMobile() ? 3 : 6

const UploadControl = ()=>{
  showUpload.value = !showUpload.value
  if(info.value === '添加图片')  info.value = '关闭'
  else info.value = '添加图片'
}

// 获取并拼接图片url
const getData= async ()=>{
  let { data } = await getAlbum()
  // 若获取数据失败
  if(!data.data) return message.error(data.msg, data.data)

  data.data.forEach((item, index)=>{
    content[index] = {
      title: item.title,
      url: baseURL + item.url,
      actived: index % activeIndex === 0
    }
  })
}

function isMobile() {
    let flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return flag;
}
</script>

<style lang="scss" scoped>
.memory {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>