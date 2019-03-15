const user=require('../schema/user');

const getUserById = async(id)=>{
    const userInfo = await user.findOne({_id:id});
    return userInfo; //返回数据
};
const getUserByName =async(name)=>{
    const userInfo = await user.findOne({user_name:name});
    return userInfo; //返回数据
};
const createUser = async (data)=>{
    const result=await user.create({
        user_name:data.name,
        password:data.password    
    })
    return result;
}
module.exports={
    getUserById,// 导出getUserById的方法，将会在controller里调用
    getUserByName,
    createUser 
}