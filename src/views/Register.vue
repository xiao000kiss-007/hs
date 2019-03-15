<template>
  <div class="register">
    <el-row class="nav">
      <el-col :xs="24" :sm="14">
        <Nav></Nav>
      </el-col>
      <el-col :xs="{span:24,offset:0}" :sm="{span:10,offset:0}">
        <Sgin></Sgin>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="{span:22,offset:1}" :sm="{span:7,offset:8}">
        <Register></Register>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";
import Nav from "@/components/Nav.vue";
import Sgin from "@/components/Sgin.vue";

export default {
  name: "register",
  components: {
    Register,
    Nav,
    Sgin
  }
};
</script>
