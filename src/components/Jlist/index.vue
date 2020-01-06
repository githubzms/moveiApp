<template>
  <div>
     <van-loading type="spinner" color="#f00" v-if="loading"/>
    <van-card v-else v-for="item in moveOnList" :key="item.id" :desc="item.star" :title="item.nm" :thumb="item.img|setWH('128.180')"
      :tag="item.sc+'分'">
      <div slot="tags">
        <van-tag plain type="danger">即将热映</van-tag>
      </div>
    </van-card>
    <div v-show="show" class="no-data">暂无数据</div>
  </div>

</template>

<script>
  export default {
    name: 'ListCard',
    data() {
      return {
        moveOnList: '',
        show:false,
        loading:true
      }
    },
    mounted() {
      this.axios.get('/api/movieComingList?cityId=10').then((res) => {
        let msg = res.data.msg;
        console.log(res.data.data.movieList);
        let list=res.data.data.movieList
        if (msg&&list) {
          this.moveOnList = res.data.data.movieList
          this.loading=false
        }else{
          this.show=true
           this.loading=false
        }
      })
    }
  }
</script>

<style>
</style>
