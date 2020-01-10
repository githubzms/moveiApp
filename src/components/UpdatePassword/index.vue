<template>
  <div>
    <van-cell-group>
      <van-field v-model="email" required clearable label="邮箱" placeholder="请输入邮箱" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      <van-field v-model="code" label="验证码" placeholder="输入邮箱地址发送验证码" required>
        <van-button slot="button" size="small" type="primary" @click="getCode" :disabled="disabled">{{codeInfo}}</van-button>
      </van-field>
    </van-cell-group>
    <van-button type="danger" @click="post_register" style="width:100%;margin-top:20px">修改</van-button>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      code: "",
      codeInfo:'发送验证码',
      disabled:false
    };
  },
  methods: {
    // 获取验证码
    getCode() {
      let email = this.email;
      if(email===""){
         this.$toast({
            message: "请输入正确的邮箱地址",
            duration: 1000
          });
        return;
      }
      this.axios.get(`/api2/users/code?email=${email}`).then(res => {
        let status = res.data.status;
        if (status == 0) {
          this.$toast({
            message: "验证码发送成功，请注意查收",
            duration: 1000
          });
          this.countDown();
        } else {
          this.$toast({
            message: "验证码发送失败",
            duration: 1000
          });
        }
      });
    },
    countDown(){
      this.disabled=true;
      let count=60;
      let timer=setInterval(()=>{
        count--;
        this.codeInfo=`${count}秒`;
        if(count===0){
          count=60;
          this.disabled=false;
          this.codeInfo='重新发送';
          clearInterval(timer);
        }
      },1000)
    },
    post_register(){
      this.axios.post('/api2/users/findpsd',{   
        password:this.password,
        email:this.email,
        code:this.code
      }).then(res=>{
        let status=res.data.status;
        if(status==0){
           this.$toast({
            message: "修改成功",
            duration: 1000
          });
          this.$router.push('/our/login')
        }else{
           this.$toast({
            message: `修改失败${res.data.msg}`,
            duration: 1000
          });
        }
      })
    }
  }
};
</script>

<style>
</style>
