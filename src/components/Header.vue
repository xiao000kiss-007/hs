<template>
  <el-row class="header">
    <el-col :xs="24" :sm="10">
      <div class="logo">
        <h2>深圳市恒深财务服务后台管理系统v1.0.0</h2>
      </div>
    </el-col>
    <el-col :xs="24" :sm="{span:10,offset:4}">
      <div class="sreach">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="代办事项" value="1"></el-option>
            <el-option label="客户信息" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      select: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
.header {
  color: #333;
  background-color: #545c64;
  text-align: left;
  line-height: 60px;
  margin: 0;
  padding: 0;
}

h2 {
    margin-left: 20PX;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    color: #fff;
}

.sreach {
    width: 100%;
    float: right;
    padding: 0;
    margin: 0;
}

.el-select {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>

