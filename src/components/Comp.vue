<template>
  {{name}}
  {{counter}}
  <button @click="store.commit('add')">
    加
  </button>
  <button @click="reduce">
    减
  </button>
</template>
<script setup lang="ts">
import { Message } from 'element3'
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
  Message.success('傻妞，想啥呢') 
}
defineProps({
  userinfo: {
    type: Object as PropType<UserInfo>,
    required: true
  }
})
</script>