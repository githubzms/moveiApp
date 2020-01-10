<template>
  <div>
    <Header>
          <van-icon name="arrow-left" color="#1989fa" slot="left" @click="goback"/>
          <div slot="title" class="van-nav-bar__title van-ellipsis">详情页</div>
    </Header>
    <div id="content">
      <van-search placeholder="请输入搜索关键词" v-model="value" clearable autofocus />
      <van-card v-for="item in moveOnList" :key="item.id" :desc="item.star" :title="item.nm" :thumb="item.img|setWH('128.180')"
        :tag="item.sc+'分'">
        <div slot="tags">
          <van-tag plain type="danger">{{item.pubDesc}}</van-tag>
        </div>
      </van-card>
    </div>
    <TabBar />
  </div>
</template>
<script>
  import TabBar from '@/components/TabBar';
  import Header from '@/components/Header';
  export default {
    name: 'search',
    data() {
      return {
        show: false,
        left: true,
        value: '',
        moveOnList: ''
      }
    },
    watch: {
      value(newval) {
        var that=this;
        that.cancelRequest();
        this.axios.get(`/api/searchList?cityId=10&kw=${newval}`, {
          cancelToken: new this.axios.CancelToken(function(c) {
            that.source = c;
          })
        }).then(res => {
          let msg = res.data.msg;
          let movies = res.data.data.movies;
          if (msg && movies) {
            this.moveOnList = res.data.data.movies.list
          }
        }).catch((err) => {
                if (this.axios.isCancel(err)) {
                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                } else {
                    //handle error
                    console.log(err);
                }
            })
      }
    },
    methods:{
      cancelRequest() {
        if (typeof this.source === 'function') {
          this.source('终止请求')
        }
      },
      goback(){
         this.$router.back()
      }
    },
    components: {
      TabBar,
      Header
    }
  }
</script>

<style>
</style>
