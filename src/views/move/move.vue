<template>
  <div>
    <Header>
      <van-icon name="location-o" color="#1989fa" slot="left" @click="goCity" >
        {{$store.state.city.nm}}
      </van-icon>
      <div slot="title" class="van-nav-bar__title van-ellipsis">来电</div>
      <van-icon name="search" slot="right" @click="goSearch"/>
    </Header>
    <div id="content">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <TabBar />
  </div>
</template>
<script>
  import TabBar from '@/components/TabBar';
  import Header from '@/components/Header';
  export default {
    name: 'move',
    data() {
      return {
        show: true,
        left: false,
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg'
        ]
      }
    },
    activated() {
      this.axios.get('api/getLocation').then(res=>{
        let msg=res.data.msg;
        if(msg==='ok'){
          let data=res.data.data
          if(this.$store.state.city.id==data.id)return;
          this.$dialog.confirm({
            title: '提示',
            message: `检测到您当前地址为 ${data.nm} ,是否切换`
          }).then(() => {
            // on confirm
            let nm=data.nm,id=data.id;
            window.localStorage.setItem('nm',nm)
            window.localStorage.setItem('id',id)
            this.$store.commit('city/City_Info',{nm,id})
          }).catch(() => {
            // on cancel
          });
        }
      })
    },
    methods:{
      goCity(){
        this.$router.push({path:'/city'})
      },
      goSearch() {
        this.$router.push({
          path: '/search'
        })
      },
    },
    components: {
      TabBar,
      Header,
    }
  }
</script>

<style scoped="scoped">
  img{
    width: 100%;
  }
</style>
