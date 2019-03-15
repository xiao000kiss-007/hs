<template>
  <div class="sign">
    <el-row class="login">
      <el-col :span="24">
        <template v-if="isLogin">
          <el-menu
            class="el-menu"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <el-menu-item index="#" >欢迎 {{name}}</el-menu-item>
            <el-menu-item index="login" @click="changeUser">更换用户</el-menu-item>
            <el-menu-item index="/register">注册新账号</el-menu-item>
            <el-menu-item index="/" @click="sginOut">安全退出</el-menu-item>
          </el-menu>
        </template>
        <div v-else>
          <el-menu
            class="el-menu"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <el-menu-item index="1" route="/login">登入</el-menu-item>
            <el-menu-item index="2" route="/register">注册</el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import jwt from "jsonwebtoken";

export default {
  created() {
    const userInfo = this.getUserInfo();
    if (userInfo !== null) {
      this.id = userInfo.id;
      this.name = userInfo.name;
      this.isLogin = true;
    } else {
      this.id = "";
      this.name = "";
      this.isLogin = false;
    }
  },
  data() {
    return {
      name: "",
      id: "",
      isLogin: ""
    };
  },
  methods: {
    getUserInfo() {
      const token = sessionStorage.getItem("hs-token");
      if (token !== null && token !== "null") {
        let decode = jwt.decode(token);
        //console.log(decode)
        return decode;
      } else {
        return null;
      }
    },
    sginOut() {
      sessionStorage.clear("hs-token"); // 将token清空
    },
    changeUser() {
      sessionStorage.clear("hs-token"); // 将token清空
      this.$router.push("/login"); // 进入login页面
    }
  }
};
</script>

<style lang="stylus" scoped>
a {
  color: #ffffff;
  text-decoration: none;
}

.login {
  background-color: #545c64;
  border-bottom: solid 1px #e6e6e6;
}

.el-menu {
  float: right;
  border-bottom: 0;

  &.el-menu--horizontal {
    border-bottom: 0;
  }
}
</style>


