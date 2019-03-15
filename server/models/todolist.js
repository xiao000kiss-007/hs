const Todolist = require ('../schema/list');

const getTodolistById = async (id)=>{
    const todolist = await Todolist.find({user_id:id})
    return todolist;
};

const createTodolist = async (data)=>{
    await Todolist.create({
        user_id:data.id,
        content:data.content,
        status:data.status
    })
    return true;
};

const removeTodolist = async (id,userId)=>{
    const result = await Todolist.remove({
        _id : id,
        user_id:userId})
        return result === 1;// 如果成功删除了记录，返回1，否则返回0
};
 
const updateTodolist = async (id,userId,status)=>{
    const result = await Todolist.updateOne({
        _id:id,
        user_id:userId
        },
        {
            status:status
        })
    return result[0] ===1 //更新成功的条目为1否则为0。由于只更新一个条目，所以只返回一个元素
}

module.exports = {
    getTodolistById,
    createTodolist,
    removeTodolist,
    updateTodolist
}