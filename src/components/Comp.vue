<template>
  {{name}}
  {{counter}}
  <button @click="add">
    加
  </button>
  <button @click="reduce">
    减
  </button>
  <el-input></el-input>
</template>
<script setup lang="ts">
import { PropType, computed, getCurrentInstance } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'
type UserInfo = {
  name: string,
  age: number,
  sex: string
}
const store = useStore(key)
const counter = computed(() => store.state.counter)
const name = computed(() => store.state.name)
function add() {
  store.commit('add')
}
const reduce = function() {
  console.log(2222)
  ElMessage.success('傻妞，想啥呢') 
}
defineProps({
  userinfo: {
    type: Object as PropType<UserInfo>,
    required: true
  }
})
</script>