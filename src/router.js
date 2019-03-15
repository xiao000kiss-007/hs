import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import AdminHome from './views/Admin.vue'
import TodoList from './views/TodoList.vue'
import Customer from './views/Customer.vue'
import Register from './views/Register.vue'
import AddCustomer from'./components/AddCustomer.vue'
import EditCustomer from './components/EditCustomer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin/',
      name: 'adminhome',
      component: AdminHome,
      children:[
                // 当 /Admin/:id 匹配成功，
        // AdminHome 会被渲染在Admin的 <router-view> 中
        { 
          path: '', 
          component: TodoList
        },
        {
        path:'customer',
        name: 'customer',
        component:Customer
      },
      {
        path:'addcustomer',
        name: 'addcustomer',
        component:AddCustomer
      },
      {
        path:'editcustomer',
        name: 'editcustomer',
        component:EditCustomer
      }

    ]},
    {
      path: '/todolist',
      name: 'todolist',
      component: TodoList
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
