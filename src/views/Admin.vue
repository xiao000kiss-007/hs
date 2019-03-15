<template>
  <div class="admin">
    <el-row>
      <el-row class="nav">
        <el-col :xs="24" :sm="14">
          <Nav></Nav>
        </el-col>
        <el-col :xs="{span:24,offset:0}" :sm="{span:10,offset:0}">
          <Sgin></Sgin>
        </el-col>
      </el-row>
      <el-col :span="24">
        <Header></Header>
      </el-col>
      <el-col :xs="24" :sm="4">
        <Aside></Aside>
      </el-col>
      <el-col :xs="24" :sm="20">
        <div class="main">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Sgin from "@/components/Sgin.vue";
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";

export default {
  components: {
    Header,
    Aside,
    Nav,
    Sgin
  }
};
</script>

<style lang="stylus" scoped>
.main {
  background-color: #fff;
  color: #333;
  text-align: center;
}
</style>