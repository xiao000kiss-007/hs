<template>
  <div class="home">
    <el-row class="nav">
      <el-col :xs="24" :sm="14">
        <Nav></Nav>
      </el-col>
      <el-col :xs="{span:24,offset:0}" :sm="{span:10,offset:0}">
        <Sgin></Sgin>
      </el-col>
    </el-row>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="网站建设中。。。"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Nav from "@/components/Nav.vue";
import Sgin from "@/components/Sgin.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Nav,
    Sgin
  }
};
</script>
