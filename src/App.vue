<template>
<<<<<<< HEAD
  <keep-alive>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
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
=======
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
>>>>>>> ad20cc9f65b4597f5d7f1f9619eddd0ebc6a67be
}
</style>
