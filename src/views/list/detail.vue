<template>
  <div class="detail-content">
    <div>
      <Header>
            <van-icon name="arrow-left" color="#1989fa" slot="left" @click="goback"/>
            <div slot="title" class="van-nav-bar__title van-ellipsis">电影详情</div>
      </Header>
      <div id="content">
        详情页面
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  export default {
    name:'Detail',
    components:{
      Header
    },
    props:['moveId'],
    mounted() {
      console.log(this.moveId);
      this.axios.get(`/api/detailmovie?movieId=${this.moveId}`).then(res=>{
        console.log(res);
      })
    },
    methods:{
      goback(){
       this.$router.back()
      }
    }
  }
</script>

<style scoped="scoped">
  .detail-content{
    position: absolute;top: 0;left: 0;width: 100%;min-height: 100%;background-color: #fff;z-index: 100;color: #333;
    animation:.3s detailIn;
  }
  @keyframes detailIn{
   0%{transform: translateX(100%)}
   100%{transform: translateX(0)}
  }
</style>
