<template>
  <div>
    <Header>
          <div slot="title" class="van-nav-bar__title van-ellipsis">个人中心</div>
    </Header>
      <div id="content">
        <div class="noIn">
         <router-view/>
        </div>
      </div>
    <TabBar />
  </div>
</template>
<script>
import TabBar from '@/components/TabBar';
import Header from '@/components/Header';
import Login from '@/components/Login';
export default{
  name: 'our',
  data(){
    return{
      show:false,
      left:false
    }
  },
  components: {
    TabBar,
    Header,
  }
}
</script>

<style scoped="scoped">
</style>
