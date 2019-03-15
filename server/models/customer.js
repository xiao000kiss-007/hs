const Customer = require('../schema/customer')

const createCustomer = async (data) => {
    await Customer.create({
        companyname: data.companyname,
        contacts: data.contacts,
        tel: data.tel,
        code: data.code,
        tax: data.tax,
        local: data.local,
        net: data.net,
        corporate: data.corporate,
        corporate_id: data.corporate_id,
        date: data.date,
        address: data.address,
        firm: data.firm,
        social_security: data.social_security,
        user_company: data.user_company,
        member: []
    })
    return true;
};

const getCustomerAll = async () => {
    let result = await Customer.find();
    return result;
}
module.exports = {
    createCustomer,
    getCustomerAll
}