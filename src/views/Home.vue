<template>
<div class="home-wrap">
  <section class="home-left">
    <div class="home-left__logo">LOGO</div>
    <div class="home-left__list">
      <ul class="left__list__ul">
        <li
          v-for="(item, index) in menuList"
          :key="index"
          class="left__list__li btn-active"
          :class="{'menu-change': changeIndex === index}"
          @click="menuChange(index)"
        >
          <i class="iconfont" :class="item.icon"></i>{{item.name}}
        </li>
      </ul>
    </div>
  </section>
  <section class="home-right">
    <div class="home-right__banner">
      广告图
    </div>
    <div class="home-right__searchline">
      <div class="home-right__search">
        <el-input placeholder="请输入搜索内容"></el-input>
        <el-button type="primary">搜索</el-button>
      </div>
      <!-- <div class="home-right__sel">
        <div class="home-right__sel__sign">
          <span>登录</span><span>注册</span>
        </div>
        <div class="home-right__sel__user">
          早上好，<span>*****</span>
        </div>
      </div> -->
    </div>
    <div class="home-right-list">
      <ul class="right-list__ul">
        <li class="right-list__li" v-for="(item, index) in dataList" :key="index">
          <div class="right-list__user">
            <img class="right-list__user__photo" :src="item.userPhoto" alt="用户头像">
            <div class="right-list__user__right">
              <div class="list-title">{{item.title}}</div>
              <div class="list-subtitle">{{item.subtitle}}</div>
              <div class="list-date">{{item.createDate}}</div>
            </div>
          </div>
          <img class="right-list__shopimg" :src="item?.img" alt="商品图">
        </li>
      </ul>
    </div>
  </section>
</div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
// import * as  HomeInterface from '@/interface/HomeInterface'
// import { HomeList } from '@/interface/HomeInterface'
let dataList: Array<any> = reactive([])
const getRightDataList = () => {
  fetch('/api/getDefaultList').then(res => res.json().then(res => {
    res.data.forEach((element: any) => {
      dataList.push(element)
    })
  }))
}
getRightDataList()
const menuList = reactive([{
  name: '首页',
  icon: 'icon-shouye'
}, {
  name: 'App',
  icon: 'icon-app'
}, {
  name: '小程序',
  icon: 'icon-xiaochengxu'
}, {
  name: '公众号',
  icon: 'icon-gongzhonghao'
}, {
  name: '本地',
  icon: 'icon-bendifuwu'
}, {
  name: '租房',
  icon: 'icon-zufang'
}, {
  name: '二手',
  icon: 'icon-ershoujiaoyi'
}, {
  name: '招聘',
  icon: 'icon-zhaopin'
}])
let changeIndex = ref(0)
const menuChange = (index: number) => {
  if (index !== changeIndex.value) {
    changeIndex.value = index
  }
}
</script>

<style lang="scss" scoped>
// @import '@/styles/color.'scss;
.home-wrap {
  height: 100%;
  display: flex;
  .home-left {
    width: 300px;
    min-width: 300px;
    max-width: 300px;
    padding: 20px;
    background: #f9f9f9;
    border-right: solid 1px #eff0f1;
    box-sizing: border-box;
    .home-left__logo {
      height: 80px;
      width: 100%;
      font-size: 40px;
      text-align: center;
      line-height: 80px;
    }
    .home-left__list {
      .left__list__ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 20px;
      }
      .left__list__li {
        width: 70px;
        height: 125px;
        margin: 10px;
        text-align: center;
      }
      .iconfont {
        display: block;
        width: 60px;
        height: 60px;
        font-size: 60px;
        padding: 10px;
        background: #EDEFF8;
        margin-bottom: 10px;
        border-radius: 10px;
      }
      .menu-change {
        .iconfont {
          background: #ff8f66;
          color: #fff;
        }
      }
    }
  }
  .home-right {
    width: calc(100% - 300px);
    padding: 20px;
    overflow: auto;
    .home-right__banner {
      height: 120px;
      width: 100%;
      background: #f9f9f9;
    }
    .home-right__searchline {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .home-right__search {
      width: 400px;
      display: flex;
      border-radius: 20px;
      border: solid 1px #eff0f1;
      height: 40px;
      margin-bottom: 20px;
      :deep(.el-input__inner),
      :deep(.el-button) {
        border: none;
      }
      :deep(.el-input__inner) {
        border-radius: 20px 0 0 20px;
      }
      :deep(.el-button) {
        position: relative;
        top: -1px;
        height: 42px;
        border-radius: 0 20px 20px 0;
      }
    }
    .right-list__ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .right-list__li {
      width: 28%;
      padding: 10px;
      margin: 10px;
      border: solid 1px #eff0f1;
    }
    .right-list__user {
      display: flex;
      align-items: center;
      .right-list__user__photo {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .right-list__user__right {
        .list-title {
          font-weight: bold;
        }
        .list-subtitle {
          font-size: 12px;
          color: #5D6F80;
          padding: 6px 0;
          height: 36px;
          line-height: 1.5;
        }
        .list-date {
          color: #5D6F80;
        }
      }
    }
    .right-list__shopimg {
      width: 100%;
      height: 180px;
      margin-top: 20px;
    }
  }
}
</style>
