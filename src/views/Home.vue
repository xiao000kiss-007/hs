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
    <HelloWorld msg="网站建设中。。。   深圳市恒深财务有限公司 版权所有 2018-2019 粤ICP备18024655号-1 粤公网安备 44030902000294号"/>
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
