<template>
  <div>
    <el-container>
      <el-header>骚音带你看电影  <el-switch v-model="value" active-color="#ccc" inactive-color="#13ce66"></el-switch>
      <span class="username">
           欢迎您：{{$store.state.user.name}}
      </span>
      </el-header>
      <el-container>
        <el-aside width="200">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="value"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <router-link slot="title" tag="span" to="/admin/user">用户管理</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <router-link slot="title" tag="span" to="/admin/movie">电影管理</router-link>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <router-link slot="title" tag="span" to="/admin/adinfo">影院管理</router-link>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      value: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  beforeRouteEnter(to, from, next) {
    axios.get("/api2/users/getuser").then(res => {
      let status = res.data.status;
      if (status === 0) {
        next(vm => {
          vm.$store.commit("user/UserInfo", {
            name: res.data.data.username,
            isAdmin: res.data.data.isAdmin
          });
        });
      } else {
        next("/our/login");
      }
    });
  }
};
</script>
<style scoped>
.username{
    float: right;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>