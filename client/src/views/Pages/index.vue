<template>
  <div class="pages" :class="{ 'show-nav': show_nav }">
    <!-- 按钮 -->
    <div class="circle-container">
      <div class="circle">
        <button id="close" @click="show_nav = !show_nav">
          <n-icon :component="Close" color="white"></n-icon>
        </button>
        <button id="open" @click="show_nav = !show_nav">
          <n-icon :component="Menu" color="white"></n-icon>
        </button>
      </div>
    </div>

    <!-- 页面主体 -->
    <router-view></router-view>
  </div>

  <!-- 导航 -->
  <nav>
    <ul>
      <li v-for="(item, index) in nav_list">
        <n-icon :component='Heart' size="20" color="#E91E63"></n-icon>
        <a @click="show_nav = false; GotoPage(item)">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Heart, Menu, Close } from "@vicons/ionicons5";
import { useRouter } from 'vue-router'

const router = useRouter()
let show_nav = ref(false)

const nav_list = [
  {name: 'Home', href: '/'},
  {name: 'Story', href: '/story'},
  {name: 'Memory', href: '/memory'}
]

const GotoPage = (page) => {
  router.push(page.href)
}

</script>

<style lang="scss" scoped>
.pages {
  width: 100vw;
  min-height: 100vh;
  z-index: 10;
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.4s linear;
  overflow: hidden;

  .circle-container {
    z-index: 5;
    position: fixed;
    top: -100px;
    left: -100px;
    width: 200px;
    height: 200px;

    .circle {
      background-color: #ff7979;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      position: relative;
      transition: transform 0.5s linear;

      #open{
        left: 60%;
        font-size: 28px;
      }

      #close{
        font-size: 28px;
        top: 60%;
        transform: rotate(90deg);
        transform-origin: top left;
      }

      button {
        cursor: pointer;
        position: absolute;
        top: 50%;
        left: 50%;
        height: 100px;
        background: transparent;
        border: 0;
        font-size: 26px;
        color: #fff;

        &:focus{
          outline: none;
        }
      }
    }
  }
}
.show-nav {
  position: fixed;
  transform: rotate(-15deg);
  .circle {
    transform: rotate(-90deg);
  }
}

.pages.show-nav+nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}

nav {
  position: fixed;
  bottom: 40px;
  left: 30;
  z-index: 100;

  a {
    color: #fafafa;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      color: #FF7979;
      font-weight: bold;
    }
  }

  ul {
    list-style-type: none;
    padding-left: 20px;

    li {
      text-transform: uppercase;
      color: #fff;
      margin: 40px 5px;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in;
    }

    li+li {
      margin-left: 25px;
      transform: translateX(-150%);
    }

    li+li+li {
      margin-left: 45px;
      transform: translateX(-200%);
    }
  }
}

@media (max-width: 480px) {
  .pages{
    .circle-container{
      top: -50px;
      left: -50px;
      width: 100px;
      height: 100px;

      .circle {
        #open{
          font-size: 18px;
          left: 55%;
          top: 25%;
        }

        #close{
          font-size: 18px;
          top: 55%;
          left: 75%;
        }
      }
    }
  }
}

</style>