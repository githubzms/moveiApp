<template>
  <keep-alive>
     <router-view/>
  </keep-alive>
</template>

<style lang="scss">
#content{
  margin-top: 46px;
}
.no-data{
  color: #ccc;
  text-align: center;
  font-size: 14px;
  margin-top: 30px;
}
.van-loading.van-loading--spinner{
  position: fixed;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
}
</style>
