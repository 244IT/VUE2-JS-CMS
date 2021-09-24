import router from '@/router'

import localCache from "@/utils/cache"

import { mapToMenuRoutes } from "@/utils/mapMenus"
const loginModule = {
    state() {
      return {
          token: '',
          userInfo: null,
          menuInfo: null
      }
    },
    mutations: {
      saveToken(state, token) {
        state.token = token
      },
      saveUserInfo(state, userInfo) {
        state.userInfo = userInfo
      },
      saveMenuInfo(state, menuInfo) {
        state.menuInfo = menuInfo
        const routes = mapToMenuRoutes(menuInfo)
        // 动态添加路由
        routes.forEach((route) => {
          router.addRoute("main", route)
        })
        router.addRoute({path: '/:pathMatch(.*)*', name: 'notFount', component: () => import('@/views/notFount/NotFount.vue')})
      }
    },
    actions: {
      initLoginData(context) {
        const token = localCache.getCache('token')
        if(token) {
          context.commit('saveToken', token)
        }
        const userInfo = localCache.getCache('userInfo')
        if(userInfo) {
          context.commit('saveUserInfo', userInfo)
        }
        const menuInfo = localCache.getCache('menuInfo')
        if(menuInfo) {
          context.commit('saveMenuInfo', menuInfo)
        }

      }
    }
}

export default loginModule
