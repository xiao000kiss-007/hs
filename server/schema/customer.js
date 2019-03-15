const mongoose = require('../config/db.js');
const Schema = mongoose.Schema;

// 子模型骨架
const memberSchema = new Schema({
    name:String,    //姓名
    id:String       //身份证
})
// 模型骨架
const customerSchema = new Schema({
    companyname:String,//公司名称
    contacts:String,    // 联系人
    tel:Number,         //电话
    code:String,        //社会统一信用代码
    tax:String,         //国税密码
    local:String,       //地税密码
    net:String,         //网申注册码
    corporate:String,   //法人
    corporate_id:String,//法人身份证
    date:Date,          //成立日期
    address:String,     //地址
    firm:String,        //业务类型
    social_security:Object,  //社保账号密码
    user_company:String, //哪个公司的客户
    member:[memberSchema] //成员 指明子文档的schema
});
 
customerSchema.index({companyname:1});  //公司名称创建索引

// 由schema构造生成Model
let Customer = mongoose.model('Customer',customerSchema);
 
module.exports = Customer;
 
