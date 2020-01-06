<template>
  <div>
    <Header title="条件搜索" :show="show" :left="left" />
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
    methods: {
      cancelRequest() {
        if (typeof this.source === 'function') {
          this.source('终止请求')
        }
      },
    },
    watch: {
      value(newval) {
        var that=this;
        this.cancelRequest();
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
    components: {
      TabBar,
      Header
    }
  }
</script>

<style>
</style>
