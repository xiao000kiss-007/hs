const Koa = require('koa');
const koaRouter = require('koa-router')();
const json = require('koa-json');
const logger = require('koa-logger'); 
const jwt = require('koa-jwt');
const koa_bodyparser = require('koa-bodyparser');
const path = require('path');
const serve = require('koa-static');
const cros = require('koa2-cors');
const auth = require('./server/routes/user.js');// 引入各种依赖
const api = require('./server/routes/api.js');

const app = new Koa();

app.use(koa_bodyparser());
app.use(json());
app.use(logger());
app.use(cros({
    origin: ctx=> {
        if (ctx.url === '/api') {
            return "*"; // 允许来自所有域名请求
        }
        return '*'; // 这样就能只允许 http://192.168.0.127:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  })
)
// 静态文件serve在koa-router的其他规则之上
app.use(serve(path.resolve('dist')));// 将webpack打包好的项目目录作为Koa静态文件服务的目录

app.use(async (ctx,next)=>{
  let start = new Date;
  await next();
  let ms = new Date - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms); // 显示执行的时间
});

app.use(async (ctx, next)=> {  //  如果JWT验证失败，返回验证失败信息
  try {
    await next()
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        success: false,
        token: null,
        info: 'Protected resource, use Authorization header to get access'
      }
    } else {
      throw err
    }
  }
})
app.on('error', (err, ctx)=> {
  console.log('server error', err)
})

koaRouter.use('/auth',auth.routes());// 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径
koaRouter.use('/api',jwt({secret:'vue-koa-kiss'}),api.routes()) // 所有走/api/打头的请求都需要经过jwt验证。

app.use(koaRouter.routes()); // 将路由规则挂载到Koa上
app.use(koaRouter.allowedMethods());

app.listen(80,() => {
  console.log('Koa is listening in 80');
});

module.exports = app;