const mongoose = require('../config/db.js');
const Schema = mongoose.Schema;

// 模型骨架
const userSchema = new Schema({
    user_name:String,
    password:String,
    user_company:String
});
 
// 由schema构造生成Model
let User = mongoose.model('User',userSchema);
 
module.exports = User;
 