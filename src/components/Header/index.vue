<template>
  <div>
    <van-nav-bar :title="title" fixed border/>
  </div>
</template>

<script>
  export default{
    name:"Header",
    props:{
      title:{
        type:String,
        default:'你懂得'
      }
    }
  }
</script>

<style>
</style>
