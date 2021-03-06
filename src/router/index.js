import VueRouter from 'vue-router'
import Vue from 'vue'
import store from '@/store'

import localCache from "@/utils/cache"
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
    {path: '/', redirect: '/login'},
    {path: '/login', name: 'login', component: () => import('@/views/login/Login.vue')},
    {path: '/main', name: 'main',component: () => import('@/views/main/Main.vue')},
]


const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
  // 跳转到其他页面，校验token
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      next({ name: 'login'})
    }else {
      next()
    }
  }else {
    next()
  }
})

router.afterEach((to) => {
  store.commit('saveCurrentPath', to.path)
})
export default router
