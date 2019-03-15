// 引入mongoose
const mongoose = require("mongoose");
const DbConfig = require("./db.config")
 
// 连接数据库
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(DbConfig.DbUrl+"/"+DbConfig.DbBase);
const db = mongoose.connection;
 
// 连接失败
db.on("error", console.error.bind(console,"数据库链接失败")
)
// 连接成功
db.on("open", function(){
    console.log("数据库链接成功");
});
 
// 断开数据库
db.on("disconnected", function(){
    console.log("数据库断开");
})
 
// 将mongoose推出
 
module.exports = mongoose;
