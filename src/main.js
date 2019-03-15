import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import Axios from 'axios'
import global_ from './components/Global' //引用模块进来
import 'element-ui/lib/theme-chalk/index.css';

// 在入口文件中引入基本样式
import '@/assets/styles/reset.css'

Vue.config.productionTip = false
Vue.prototype.$http = Axios // 类似于vue-resource的调用方法，之后可以在实例里直接用this.$http.get()等
Vue.prototype.GLOBAL = global_ //挂载到Vue实例上面

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('hs-token')
  if (to.path === '/login') { // 如果是跳转到login页的
    if (token !== 'null' && token !== null) {
      next('/admin') // 如果有token就转向todolist不返回登录页
    }
    next() // 否则跳转回登录页
  } else if (to.path === '/admin/customer' || to.path === '/admin' || to.path ==='/admin/addcustomer') {
    if (token !== null && token !== 'null') {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token // 注意Bearer后有个空格
      next() // 如果有token就正常转向
    } else {
      next('/login') // 否则跳转回首页
    }
  } else {
    next()
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')