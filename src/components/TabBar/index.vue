<template>
<div>
  <van-tabbar route  active-color="#f00">
    <van-tabbar-item
      replace
      to="/move"
      icon="home-o"
    >
      首页
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/list"
      icon="video-o"
    >
      列表
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/our/center"
      icon="manager-o"
    >
      我的
    </van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
  export default{
    name:"TabBar",
  }
</script>

<style>
</style>
