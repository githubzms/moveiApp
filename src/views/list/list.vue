<template>
  <div>
   <Header>
         <div slot="title" class="van-nav-bar__title van-ellipsis">电影列表</div>
   </Header>
    <div id="content">
      <div class="box-content">
        <van-tabs @click="onClick" sticky :offset-top="46">
          <van-tab title="正在热映">
            <keep-alive>
              <router-view name="listcard"/>
            </keep-alive>
          </van-tab>
          <van-tab title="即将上映">
           <keep-alive>
             <router-view name="jlist"/>
           </keep-alive>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <TabBar />
     <router-view name="detail"/>
  </div>
</template>
<script>
  import TabBar from '@/components/TabBar';
  import Header from '@/components/Header';
  export default {
    name: 'list',
    data() {
      return {
        show: false,
        left: false
      }
    },
    methods: {
      onClick(name, title) {
        console.log(name)
      }
    },
    components: {
      TabBar,
      Header,
    }
  }
</script>

<style scoped>
  /* .box-content {
    padding: 0 10px;
  } */
</style>
