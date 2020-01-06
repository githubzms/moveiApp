<template>
  <div>
     <van-loading type="spinner" color="#f00" v-if="loading"/>
    <van-card v-else v-for="item in moveOnList" :key="item.id" :desc="item.star" :title="item.nm" :thumb="item.img|setWH('128.180')"
      :tag="item.sc+'分'">
      <div slot="tags">
        <van-tag plain type="danger">正在热映</van-tag>
      </div>
    </van-card>
  </div>

</template>

<script>
  export default {
    name: 'ListCard',
    data() {
      return {
        moveOnList: '',
        loading:true
      }
    },
    activated() {
      let cityId=window.localStorage.getItem('id');
      this.axios.get(`/api/movieOnInfoList?CityId=${cityId}`).then((res) => {
        let msg = res.data.msg;
        console.log(res.data.data.movieList);
        if (msg === 'ok') {
          this.moveOnList = res.data.data.movieList
          this.loading=false
        }
        console.log(res)
      })
    }
  }
</script>

<style>
</style>
