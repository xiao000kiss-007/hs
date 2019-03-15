<template>
  <div class="register">
    <h2>注册</h2>
    <el-form status-icon :rules="rules" ref="formLabel" label-width="80px" :model="formLabel">
      <el-form-item label="账号:" prop="name">
        <el-input v-model="formLabel.name"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="formLabel.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码:" prop="checkPass">
        <el-input v-model="formLabel.checkPass" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formLabel')">注册</el-button>
        <el-button @click="resetForm('formLabel')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      } else {
        let obj = {
          name: value
        };
        this.$http
          .post(this.GLOBAL.baseUrl + "/auth/user/check", obj) // 将信息发送给后端验证
          .then(res => {
            // axios返回的数据都在res.data里
            if (res.data.success) {
              // 如果用户名不存在
              callback();
            } else {
              return callback(new Error("账号已经被使用"));
            }
          });
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.formLabel.checkPass !== "") {
          this.$refs.formLabel.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formLabel.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      formLabel: {
        name: "",
        password: "",
        checkPass: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let obj = {
            name: this.formLabel.name,
            password: this.formLabel.password
          };
          this.$http
            .post(this.GLOBAL.baseUrl + "/auth/user/create", obj) // 将信息发送给后端验证
            .then(res => {
              if (res.data.success) {
                this.$message({
                  // 注册成功，显示提示语
                  showClose: true,
                  type: "success",
                  message: "注册成功！"
                });
                this.$router.push("/login"); // 进入login页面
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>

