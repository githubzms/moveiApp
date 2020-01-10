<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了">
      <van-card v-for="item in moveOnList" :key="item.id" :desc="item.star" :title="item.nm" :thumb="item.img|setWH('128.180')"
        :tag="item.sc+'分'" @click="toDetail(item.id)">
        <div slot="tags">
          <van-tag plain type="danger">即将热映</van-tag>
        </div>
      </van-card>
    </van-list>
  </div>

</template>

<script>
  export default {
    name: 'ListCard',
    data() {
      return {
        moveOnList: '',
        finished: false,
        loading: true
      }
    },
    mounted() {
      this.axios.get('/api/movieComingList?cityId=10').then((res) => {
        let msg = res.data.msg;
        console.log(res.data.data.movieList);
        let list = res.data.data.movieList
        if (msg && list) {
          this.moveOnList = res.data.data.movieList
          this.loading = false
        } else {
          this.finished = true
          this.loading = false
        }
      })
    },
    methods:{
      toDetail(id) {
        this.$router.push({path:`/list/detail/${id}`})
      }
    }
  }
</script>

<style>
</style>
