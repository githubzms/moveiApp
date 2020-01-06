<template>
  <div>
    <Header title="电影列表" :show="show" :left="left" />
    <div id="content">
      <div class="box-content">
        <van-tabs @click="onClick">
          <van-tab title="正在热映">
            <ListCard/>
          </van-tab>
          <van-tab title="即将上映">
            <Jlist/>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <TabBar />
  </div>
</template>
<script>
  import TabBar from '@/components/TabBar';
  import Header from '@/components/Header';
  import ListCard from '@/components/ListCard';
  import Jlist from '@/components/Jlist';
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
      ListCard,
      Jlist
    }
  }
</script>

<style scoped>
 /* .box-content {
    padding: 0 10px;
  } */
</style>
