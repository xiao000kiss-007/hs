<template>
  <el-row class="content">
    <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="_id" label="ID" v-if="false"></el-table-column>
      <el-table-column prop="companyname" label="公司名称" width="210"></el-table-column>
      <el-table-column prop="contacts" label="联系人" width="80"></el-table-column>
      <el-table-column prop="tel" label="电话" width="110"></el-table-column>
      <el-table-column prop="code" label="社会统一信用代码" width="180"></el-table-column>
      <el-table-column prop="tax" label="国税密码" width="95"></el-table-column>
      <el-table-column prop="local" label="地税密码" width="95"></el-table-column>
      <el-table-column prop="net" label="网申注册码" width="90"></el-table-column>
      <el-table-column prop="social_security.name" label="社保账号" width="85"></el-table-column>
      <el-table-column prop="social_security.password" label="社保密码" width="80"></el-table-column>
      <el-table-column prop="corporate" label="法人代表" width="80"></el-table-column>
      <el-table-column prop="corporate_id" label="法人身份证" width="100"></el-table-column>
      <el-table-column prop="date" label="成立日期" width="100"></el-table-column>
      <el-table-column prop="address" label="地址" width="180"></el-table-column>
      <el-table-column prop="firm" label="业务类型"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-dropdown split-button type="primary" size="small" @command="handleCommand">
            <i class="el-icon-edit">编辑</i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">修改信息</el-dropdown-item>
              <el-dropdown-item command="2">添加成员</el-dropdown-item>
              <el-dropdown-item command="3">修改成员</el-dropdown-item>
              <el-dropdown-item command="4">删除成员</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button type="danger" icon="el-icon-delete" size="small" :plain="true">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="添加成员"
      :visible.sync="dialogFormVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form :model="form" :label-width="formLabelWidth" size="small">
        <el-form-item label="成员名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="成员身份证">
          <el-input v-model="form.code" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
export default {
  created() {
    this.getCustomerInfo();
  },
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: "",
        code: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    getCustomerInfo() {
      const token = sessionStorage.getItem("hs-token");
      if (token !== null && token !== "null") {
        const getCustomer = this.$http.get(
          this.GLOBAL.baseUrl + "/api/customer"
        );
        getCustomer.then(
          res => {
            if (res.status === 200) {
              this.tableData = res.data.result;
            } else {
              this.$message.error("获取列表失败！");
            }
          },
          err => {
            this.$message.error("获取列表失败！");
            console.log(err);
          }
        );
      } else {
        return null;
      }
    },
    handleCommand(command) {
      //this.$message("click on item " + command);
      switch (command) {
        case "1":
          this.$router.push("/admin/editcustomer"); // 进入edit页面，登录成功
          break;
        case "2":
          this.dialogFormVisible = true;
          break;
      }
    },
    handleClose() {
      this.dialogFormVisible = false;
    }
  }
};
</script>

<style lang="stylus">
.el-table {
  .warning-row {
    background: oldlace;
  }

  .success-row {
    background: #f0f9eb;
  }
}
</style>



