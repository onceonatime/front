import Vue from 'vue'
import Vuex from 'vuex'
import {
  STORE
} from './Constant.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    head: '제목'
  },
  mutations: {
    [STORE.mutations.SET_HEAD]: (state, payload) => {
      state.head = payload
    },
  },
  actions: {

  }
})