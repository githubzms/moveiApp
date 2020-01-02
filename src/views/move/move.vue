<template>
  <div>
  <Header title="move"/>
    hello moves
    <TabBar />
  </div>
</template>
<script>
import TabBar from '@/components/TabBar';
import Header from '@/components/Header';
export default{
  name: 'move',
  components: {
    TabBar,
    Header
  }
}
</script>

<style>
</style>
