const api = require( '../controllers/todolist');
const customer = require('../controllers/customer');
const koaRouter=require( 'koa-router');

const router = koaRouter()

router.get('/todolist/:id',api.getTodolist); // 定义url的参数是id,用todolist的api方法引入router
router.post('/todolist',api.createTodolist);  //创建todolist
router.delete('/todolist/:userId/:id',api.removeTodolist) //删除
router.put('/todolist/:userId/:id/:status',api.updateTodolist) //更新

router.post('/customer',customer.createCustomer) //创建
router.get('/customer',customer.getCustomerAll)  //查询全部
router.put('/customer',customer.getCustomerAll)  //修改
module.exports = router; // 把router规则暴露出去
