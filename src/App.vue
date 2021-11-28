<template>
  <div class="app-wrap">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useRouter } from 'vue-router'
const router = useRouter()
// 当前路由名称test
const currentTab = computed(() => {
  return router.currentRoute.value.name
})
const routerList = [
  { name: 'home', path: '/', text: '你是猪吗' },
  { name: 'user', path: '/user', text: '袁老大' }
]
</script>
<style lang="scss">
@import './styles/index.scss'; // 全局自定义样式
#app {
  height: 100%;
}
.app-wrap {
  height: 100%;
  width: 100%;
}
</style>
