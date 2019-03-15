<template>
  <el-row class="editcustomer">
    <EditCustomer></EditCustomer>
  </el-row>
</template>
<script>
// @ is an alias to /src

import EditCustomer from "@/components/EditCustomer.vue";

export default {
  components: {
    EditCustomer
 
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