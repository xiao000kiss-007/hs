<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我们的服务</template>
        <el-menu-item index="2-1">代办事务</el-menu-item>
        <el-menu-item index="2-2">客户信息</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">税收政策</el-menu-item>
      <el-submenu index="4">
        <template slot="title">我的工作台</template>
        <el-menu-item index="/admin">代办事务</el-menu-item>
        <el-submenu index="4-2">
          <template slot="title">客户信息</template>
          <el-menu-item index="/admin/customer">客户信息管理</el-menu-item>
          <el-menu-item index="/admin/addcustomer">添加客户信息</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="4-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="/about">关于我们</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="stylus" scoped>
a {
  color: #ffffff;
  text-decoration: none;
}
</style>

