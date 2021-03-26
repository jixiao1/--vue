import vue from 'vue'

import Router from 'vue-router'
import One from '@/pages/One.vue'

vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/one'
  },
  {
    path: '/one',
    component: One,
    beforeEnter: (to, from, next) => {
      // ...
      console.log('路由独享守卫哦。。。。')
      next()
    }
  },
  {
    path: '/two',
    component: () => import('@/pages/Two.vue')
  }
]

const router = new Router({
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('全局前置守卫1__触发了......')
  next() // 放行
  // next(false);//拦截

  // 重定向
  // if(to.path === '/two'){
  //   next();
  // }
  // else{
  //   next('/two');
  // }
})
// 全局解析守卫
router.beforeResolve((to, from, next) => {
  console.log('全局解析守卫触发了。。。')
  next()
})

// 后置钩子，不能拦截
router.afterEach((to, from) => {
  // ...
  console.log('全局后置钩子__触发了......')
})

export default router
