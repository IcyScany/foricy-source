<template>
  <n-card class="upload-box" title="上传数据">
    <n-form>
      <!-- 标题 -->
      <n-form-item label="标题">
        <n-input v-model:value="title" placeholder="请输入标题" keydown.enter.prevent/> 
      </n-form-item>
    </n-form>

    <!-- 图片上传 -->
    <n-upload
      directory-dnd
      :default-upload="false"
      @change="beforeUpload"
    >
      <n-upload-dragger>
        <div style="margin-bottom: 1vh">
          <n-icon size="40" :depth="3">
            <archive-icon />
          </n-icon>
        </div>
        <n-text style="font-size: 16px">
          点击或者拖动图片到该区域来上传
        </n-text>
      </n-upload-dragger>
    </n-upload>

    <!-- 上传确认 -->
    <n-button
      :disabled="false"
      @click="addData"
    >
      确认上传
    </n-button>
  </n-card>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useMessage } from 'naive-ui'
import { ArchiveOutline as ArchiveIcon, Reload } from '@vicons/ionicons5'
import { addAlbum } from '../api';

const message = useMessage()

const formData = reactive(new FormData())
const title = ref('')


// 上传图片
const beforeUpload = async (file) => {
  let type = file.file.file.type
  const isJpgOrPng = type === 'image/jpeg' || type === 'image/png' || type === 'image/jpg' || type === 'image/gif';
    if (!isJpgOrPng) {
      return message.error('请上传jpeg/jpg/png/gif格式的图片!');
    }
    const isLt1M = file.file.file.size / 1024 / 1024 < 5;
    if (!isLt1M) {
      return message.error('图片必须小于5M!');
    }
    formData.append('file', file.file.file)
  return false
}


// 新增数据
const addData = async ()=>{
  formData.append('title', title.value)
  let { data } = await addAlbum(formData)
  if(data.data) message.success(data.msg)
  else message.error(data.msg)
  setTimeout(()=>{
    location.reload()
  },2000)
}
</script>

<style lang="scss" scoped>
.upload-box{
  width: 40vw;
  position: fixed;
  display: flex;
  text-align: center;
  margin: auto;
}

@media screen and (max-width: 788px){
  .upload-box{
    width: 70vw;
    position: fixed;
    left: 50%;
    top: 25%;
    transform: translate(-35vw, 0vh);
    display: flex;
    text-align: center;
}
}
</style>
