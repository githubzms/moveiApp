<template>
 <div>
   <van-cell-group>
     <van-field
       v-model="username"
       required
       clearable
       label="用户名"
       right-icon="question-o"
       placeholder="请输入用户名"
       @click-right-icon="$toast('手机号邮箱或者用户名')"
     />

     <van-field
       v-model="password"
       type="password"
       label="密码"
       placeholder="请输入密码"
       required
     />
   </van-cell-group>
     <div class="vanButton">
       <van-button  type="danger" @click='postInfo'>登录</van-button>
     </div>
 </div>
</template>

<script>
  export default {
    name:'Login',
    data(){
      return{
          username:'',
          password:''
      }
    },
    methods:{
      postInfo(){
        if(this.username==""){
          this.$toast({
            message:'请输入用户名或者邮箱',
            duration:1000
          });
          return;
        }
        if(this.password==""){
          this.$toast({
            message:'请输入密码',
            duration:1000
          });
          return;
        }
        this.axios.post('/api2/users/login',{
         username: this.username,
          password:this.password
        }).then(res=>{
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped="scoped">
  .vanButton{
    margin-top: 20px;
    text-align: center;
  }

</style>
