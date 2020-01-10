<template>
  <div>
    <van-cell-group>
      <van-field v-model="username" required clearable label="用户名" right-icon="question-o" placeholder="请输入用户名"
        @click-right-icon="$toast('手机号邮箱或者用户名')" />

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      <van-field v-model="codeImg" center clearable label="验证码" placeholder="请输入图形验证码">
        <van-button slot="button" size="small"  style="height: 70px;width: 120px;" @click="changeImg">
          <img :src="src" alt="" style="width: 80%;height: 100%;" > 
        </van-button>
      </van-field>
    </van-cell-group>
    <div class="vanButton">
      <van-button type="danger" @click="postInfo">登录</van-button>
      <div class="btn-info">
        <router-link to="/our/register">
          <van-button type="primary">注册</van-button>
        </router-link>
        <router-link to="/our/updatepassword">
          <van-button type="primary">修改密码</van-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: "",
        codeImg: '',
        src:'/api2/users/getcodeImg'
      };
    },
    methods: {
      changeImg(){
          this.src="/api2/users/getcodeImg?"+Math.random();
      },
      postInfo() {
        if (this.username == "") {
          this.$toast({
            message: "请输入用户名或者邮箱",
            duration: 1000
          });
          return;
        }
        if (this.password == "") {
          this.$toast({
            message: "请输入密码",
            duration: 1000
          });
          return;
        }
        this.axios
          .post("/api2/users/login", {
            username: this.username,
            password: this.password,
            codeImg:this.codeImg
          })
          .then(res => {
            let status = res.data.status;
            console.log(status)
            if (status == 0) {
              this.$toast({
                message: "登录成功",
                duration: 1000
              });
              this.$router.push("/our/center");
            } else {
              this.$toast({
                message: "登录失败"+res.data.msg,
                duration: 1000
              });
              this.changeImg();
            }
            console.log(res);
          });
      }
    }
  };
</script>

<style scoped="scoped">
  .vanButton {
    margin-top: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .btn-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
</style>