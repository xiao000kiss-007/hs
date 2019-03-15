const user = require ('../controllers/user');
const router = require ('koa-router')();

router.get('/user/:id',user.getUserInfo); // 定义url的参数是id,用user的auth方法引入router
router.post('/user/check',user.checkUser); //验证注册用户名是否存在
router.post('/user/create',user.createUser);//创建用户
router.post('/user',user.postUserAuth);  //用户登入验证

module.exports = router; // 把router规则暴露出去