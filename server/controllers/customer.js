const customer=require('../models/customer')

const createCustomer= async (ctx)=>{
    const data = ctx.request.body;
    const success = await customer.createCustomer(data);
    ctx.body = {
        success
    }
};

const getCustomerAll = async (ctx)=>{
    const result= await customer.getCustomerAll();
    ctx.body = {
        success:true,
        result // 将请求的结果放到response的body里返回
    }
}

module.exports={
    createCustomer,
    getCustomerAll
}