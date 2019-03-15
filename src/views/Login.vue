
<template>
  <div class="login">
    <el-row class="nav">
      <el-col :xs="24" :sm="14">
        <Nav></Nav>
      </el-col>
      <el-col :xs="{span:24,offset:0}" :sm="{span:10,offset:0}">
        <Sgin></Sgin>
      </el-col>
    </el-row>
    <Login></Login>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Nav from "@/components/Nav.vue";
import Sgin from "@/components/Sgin.vue";

export default {
  components: {
    Login,
    Nav,
    Sgin
  }
};
</script>

<style lang="stylus" scoped>
</style>