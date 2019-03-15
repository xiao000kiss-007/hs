// 引入mongoose
const mongoose = require("mongoose");
const DbConfig = require("./db.config")
 
// 连接数据库
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(DbConfig.DbUrl+"/"+DbConfig.DbBase);
const db = mongoose.connection;
 
// 连接失败
db.on("error", console.error.bind(console,"DB is error")
)
// 连接成功
db.on("open", function(){
    console.log("DB is Done!");
});
 
// 断开数据库
db.on("disconnected", function(){
    console.log("DB is Out line");
})
 
// 将mongoose推出
 
module.exports = mongoose;
