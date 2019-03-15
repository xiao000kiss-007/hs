const user = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const getUserInfo = async ctx => {
    //console.log(ctx);
    const id = ctx.params.id; // 获取url里传过来的参数里的id
    const result = await user.getUserById(id); // 通过 await “同步”地返回查询结果
    ctx.body = result; // 将请求的结果放到response的body里返回
};
const postUserAuth = async ctx => {
    //console.log(ctx.request.body);
    const data = ctx.request.body; // post过来的数据存在request.body里
    const userInfo = await user.getUserByName(data.name);
    if (userInfo != null) { // 如果查无此用户会返回null
        if (!bcrypt.compareSync(data.password, userInfo.password)) { // 验证密码是否正确
            ctx.body = {
                success: false, // success标志位是方便前端判断返回是正确与否
                info: "密码错误！"
            }
        } else { // 如果密码正确
            const userToken = {
                name: userInfo.user_name,
                id: userInfo.id
            }
            const secret = 'vue-koa-kiss'; // 指定密钥，这是之后用来判断token合法性的标志
            const token = jwt.sign(userToken, secret); // 签发token
            ctx.body = {
                success: true,
                token: token, // 返回token
            }
        }
    } else {
        ctx.body = {
            success: false,
            info: '用户不存在！' // 如果用户不存在返回用户不存在
        }
    }
};
const checkUser = async ctx => {
    const data = ctx.request.body; // post过来的数据存在request.body里
    const userInfo = await user.getUserByName(data.name);
    if (userInfo != null) { // 如果查无此用户会返回null
        ctx.body = {
            success: false, // success标志位是方便前端判断返回是正确与否
            info: "用户名已经存在！"
        }
    } else {
        ctx.body = {
            success: true, // success标志位是方便前端判断返回是正确与否
            info: "用户名可以使用！"
        }
    }

};
const createUser = async ctx=>{
    const data = ctx.request.body; // post过来的数据存在request.body里
    data.password = bcrypt.hashSync(data.password); // bcrypt加密密码
    const success = await user.createUser(data)
    ctx.body = {
        success
    }
}

module.exports = {
    getUserInfo, // 把获取用户信息的方法暴露出去 
    postUserAuth,
    checkUser,
    createUser
}