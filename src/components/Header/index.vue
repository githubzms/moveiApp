<template>
  <div>
    <!-- @click-left="onClickLeft" -->
    <van-nav-bar :title="title" fixed border @click-right="onClickRight" :left-arrow="left" >
      <van-icon name="search" slot="right" v-show="show" />
       <van-icon name="location-o" slot="left" v-if="show"  @click="goCity">
          {{$store.state.city.nm}}
       </van-icon>

    </van-nav-bar>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: {
      title: {
        type: String,
        default: '你懂得'
      },
      show: {
        type: Boolean,
        default: true
      },
      left: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClickRight() {
        this.$router.push({
          path: '/search'
        })
      },
      // onClickLeft(){
      //   history.go(-1)
      // },
      goCity(){
        this.$router.push({path:'/city'})
      }
    }
  }
</script>

<style>
  .van-nav-bar{
    background-color: #f00 !important;

  }
  .van-nav-bar .van-nav-bar__title{
      color: #fff;
  }
  .van-nav-bar .van-icon{
    color: #fff !important;
  }
</style>
