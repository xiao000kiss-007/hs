const mongoose = require('../config/db.js');
const Schema = mongoose.Schema;

// 模型骨架
const listSchema = new Schema({
    user_id:String,
    content:String,
    status:Number
});
 
// 由schema构造生成Model
let List = mongoose.model('List',listSchema);
 
module.exports = List;
 