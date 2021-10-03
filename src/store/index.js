import Vuex from 'vuex'
import Vue from 'vue'

import login from './login/index'
import system from './main/system/index'

import { getList } from '@/service/main/system/user/index'
Vue.use(Vuex)


const store = new Vuex.Store({
  state() {
      return {
        currentPath: '',
        currentPathId: 0,
        entireDepartment: [],
        entireRole: [],
        entireMenu: []
      }
  },
  mutations: {
    saveCurrentPath(state, path) {
      state.currentPath = path
    },
    saveEntireDepartment(state, list) {
      state.entireDepartment = list
    },
    saveEntireRole(state, list) {
      state.entireRole = list
    },
    saveEntireMenu(state, list) {
      state.entireMenu = list
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1.请求部门,角色数据,菜单数据
      const departmentResult = await getList("/department/list", {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getList("/role/list", {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      const menuResult = await getList("/menu/list", {})
      const { list: menuList } = menuResult.data
      commit("saveEntireDepartment", departmentList)
      commit("saveEntireRole", roleList)
      commit("saveEntireMenu", menuList)
    },
  },
  modules: {
    login,
    system
  }
})

export function initStore() {
  store.dispatch("initLoginData")
}

export default store



