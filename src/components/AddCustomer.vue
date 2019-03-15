<template>
  <div class="addcustomer">
    <el-row class="content">
      <el-col :xs="{span:20,offset:2}" :sm="{span:8,offset:7}">
        <h3>
          <i class="el-icon-edit"> 添加客户信息</i>
        </h3>
        <el-form :model="form" ref="form" label-width="130px" size="small">
          <el-form-item label="公司名称">
            <el-input v-model="form.companyname"></el-input>
          </el-form-item>
          <el-form-item label="联系人">
            <el-input v-model="form.contacts"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.tel"></el-input>
          </el-form-item>
          <el-form-item label="社会统一信用代码">
            <el-input v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="国税密码">
            <el-input v-model="form.tax"></el-input>
          </el-form-item>
          <el-form-item label="地税密码">
            <el-input v-model="form.local"></el-input>
          </el-form-item>
          <el-form-item label="网申注册码">
            <el-input v-model="form.net"></el-input>
          </el-form-item>
          <el-form-item label="法人">
            <el-input v-model="form.corporate"></el-input>
          </el-form-item>
          <el-form-item label="法人身份证">
            <el-input v-model="form.corporate_id"></el-input>
          </el-form-item>
          <el-form-item label="成立日期">
            <el-col :span="16">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="业务类型">
            <el-input v-model="form.firm"></el-input>
          </el-form-item>
          <el-form-item label="社保账号">
            <el-input v-model="form.social_security"></el-input>
          </el-form-item>
          <el-form-item label="社保密码">
            <el-input v-model="form.social_security_password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">添加</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import jwt from "jsonwebtoken";
export default {
  created() {
    const userInfo = this.getUserInfo();
    if (userInfo !== null) {
      this.id = userInfo.id;
      this.name = userInfo.name;
      this.getUsercompany();
    } else {
      this.id = "";
      this.name = "";
    }
  },
  data() {
    return {
      id: "",
      name: "",
      form: {
        companyname: "", //公司名称
        contacts: "", // 联系人
        tel: "", //电话
        code: "", //社会统一信用代码
        tax: "", //国税密码
        local: "", //地税密码
        net: "", //网申注册码
        corporate: "", //法人
        corporate_id: "", //法人身份证
        date: "", //成立日期
        address: "", //地址
        firm: "", //业务类型
        user_company: "",
        social_security: "", //社保账号
        social_security_password: "" //社保密码
      }
    };
  },
  methods: {
    getUserInfo() {
      const token = sessionStorage.getItem("hs-token");
      if (token !== null && token !== "null") {
        let decode = jwt.decode(token);
        //console.log(decode)
        return decode;
      } else {
        return null;
      }
    },
    getUsercompany() {
      const getUsercompany = this.$http.get(
        this.GLOBAL.baseUrl + "/auth/user/" + this.id
      );
      getUsercompany.then(
        res => {
          // axios返回的数据都在res.data里
          if (res.status === 200) {
            this.form.user_company = res.data.user_company;
          } else {
            this.$message.error("公司名称失败！");
          }
        },
        err => {
          this.$message.error("公司名称失败！" + err);
        }
      );
    },
    onSubmit() {
      let obj = {
        companyname: this.form.companyname,
        contacts: this.form.contacts,
        tel: this.form.tel,
        code: this.form.code,
        tax: this.form.tax,
        local: this.form.local,
        net: this.form.net,
        corporate: this.form.corporate,
        corporate_id: this.form.corporate_id,
        date: this.form.date,
        address: this.form.address,
        firm: this.form.firm,
        user_company: this.form.user_company,
        social_security: {
          name: this.form.social_security,
          password: this.form.social_security_password
        }
      };
      this.$http.post(this.GLOBAL.baseUrl + "/api/customer", obj).then(
        res => {
          if (res.data.success) {
            this.$message({
              // 添加成功，显示提示语
              showClose: true,
              type: "success",
              message: "添加成功！"
            });
            this.$router.push("/admin/customer"); // 进入login页面
          }
        },
        err => {
          this.$message.error("添加失败！" + err);
        }
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
</style>
