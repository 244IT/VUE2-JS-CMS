import Vuex from 'vuex'
import Vue from 'vue'

import login from './login/index'
Vue.use(Vuex)


const store = new Vuex.Store({
  state() {
      return {
        currentPath: ''
      }
  },
  getters: {

  },
  mutations: {
    saveCurrentPath(state, path) {
      state.currentPath = path
    }
  },
  modules: {
    login
  }
})

export function initStore() {
  store.dispatch("initLoginData")
}

export default store


