<template>
  ifreme文件
  <button @click="changeParent">触发父组件</button>
</template>
<script setup lang="ts">
  const handleMessage = () => {
    console.log('父组件穿过来的消息')
  }
  window.addEventListener('message' ,handleMessage)
  const changeParent = () => {
    window.parent.postMessage({
      iframeSuccess: true
    }, '*')
  }
</script>