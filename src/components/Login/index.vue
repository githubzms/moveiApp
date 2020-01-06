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
       <van-button  type="danger">登录</van-button>
     </div>
 </div>
</template>

<script>
  export default {
    name:'Login',
    props:{
      username:{
        type:String
      },
      password:{
        type:String
      },
    }
  }
</script>

<style scoped="scoped">
  .vanButton{
    margin-top: 20px;
    text-align: center;
  }

</style>
