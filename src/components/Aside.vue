<template>
  <el-row class="aside">
    <el-col :span="24">
      <el-menu
        default-active="1"
        class="el-menu-vertical"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span>工作台</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/admin">待办事项</el-menu-item>
            <el-submenu index="1-2">
              <template slot="title">客户信息</template>
              <el-menu-item index="/admin/customer">客户信息管理</el-menu-item>
              <el-menu-item index="/admin/addcustomer">添加客户信息</el-menu-item>
            </el-submenu>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="/admin/customer" >
          <i class="el-icon-menu"></i>
          <span slot="title">客户信息管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {};
</script>

<style lang="stylus" scoped>
.el-menu {
  width: 100%;

  .el-menu-item {
    min-width: 100%;
  }
}
</style>
