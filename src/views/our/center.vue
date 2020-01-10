<template>
  <div>
    <div class="center-head">
      <div>
        <img :src="$store.state.user.userHead" alt="" class="userhead">
      </div>
      您好：{{$store.state.user.name}};
      <span v-if="$store.state.user.isAdmin">
        超级管理员<a href="/admin" target="_black">进入后台管理</a>
      </span>
      <span v-else>
        普通会员
      </span>
    </div>

    <div>
      <van-button type="info" @click="logout">退出登录</van-button>
      <van-uploader :after-read="afterRead">
        <van-button icon="photo" type="primary">更换头像</van-button>
      </van-uploader>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "centerview",
    methods: {
      // 更换图像
      afterRead(file) {
        let fileInfo = file.file;
        let param = new FormData();
        param.append('file', fileInfo, fileInfo.name);
        let config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        };
        this.axios.post('/api2/users/uploadImg', param, config).then(res => {
          let status = res.data.status;
          if (status == 0) {
            this.$toast({
              message: "更新成功",
              duration: 1000
            });
            this.$store.commit('user/UserInfo', {
              name: this.$store.state.user.username, 
              isAdmin:this.$store.state.user.isAdmin,
              userHead: res.data.data.userHead+'?'+Math.random()
            })
          } else {
            this.$toast({
              message: "更新失败",
              duration: 1000
            });
          }
        })
      },
      logout() {
        this.$dialog
          .confirm({
            title: "提示",
            message: "确定要退出？"
          })
          .then(() => {
            this.axios.get("/api2/users/logout").then(res => {
              this.$toast({
                message: "退出成功",
                duration: 1000
              });
              this.$store.commit('user/UserInfo', { name: '' })
              let status = res.data.status;
              if (status === 0) {
                this.$router.push("/our/login");
              }
            });
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    beforeRouteEnter(to, from, next) {
      axios.get('/api2/users/getuser').then(res => {
        let status = res.data.status;
        if (status === 0) {
          next(vm => {
            localStorage.setItem('name', res.data.data.username)
            localStorage.setItem('isAdmin', res.data.data.isAdmin)
            localStorage.setItem('userHead', res.data.data.userHead)
            vm.$store.commit('user/UserInfo', { name: res.data.data.username, isAdmin: res.data.data.isAdmin, userHead: res.data.data.userHead })
          });
        } else {
          next('/our/login')
        }
      })

    }
  };
</script>

<style scoped>
  .center-head {
    height: 200px;
    text-align: center;
    background-color: rgb(255, 94, 0, 0.5);
  }
  .userhead{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #fff;
    box-shadow: 0 2px 15px #fff;
  }
</style>