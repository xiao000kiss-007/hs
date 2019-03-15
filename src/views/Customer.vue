<template>
  <el-row class="customer">
    <Customer></Customer>
  </el-row>
</template>
<script>
// @ is an alias to /src

import Customer from "@/components/Customer.vue";

export default {
  components: {
    Customer
 
  }
};
</script>

<style lang="stylus" scoped>
.main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>