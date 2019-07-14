import Vue from 'vue'
import Vuex from 'vuex'
import {
  STORE
} from './assets/data.js/Constant'

Vue.use(Vuex)
import axios from 'axios'
import router from './router'

const API = 'http://outback-dev.us-west-2.elasticbeanstalk.com'

export default new Vuex.Store({
  state: {
    head: '제목',
    markers: null,
  },
  getters: {
    getMarkers(state) {
      return state.markers
    }
  },
  mutations: {
    [STORE.mutations.SET_HEAD]: (state, payload) => {
      state.head = payload
    },
    [STORE.mutations.SET_MARKERS]: (state, payload) => {
      // console.log(payload)
      state.markers = payload
    }
  },
  actions: {
    [STORE.actions.FETCH_MARKERS]: ({
      commit
    }, payload) => {
      axios.get(`${API}/sites/${payload.city}/${payload.town}/`)
        .then(res => {
          commit('setMarker', res.data)
        })
    },
    fetcheMarkersWithCoordinate({
      commit
    }, payload) {
      axios.get(`${API}/coordinate/`, {
        params: payload
      }).then(res => {
        commit('setMarker', res.data)
      })
    },
    [STORE.actions.FETCH_MARKERS_AND_GO_MAP]: ({
      commit
    }, payload) => {
      axios.get(`${API}/sites/${payload.city}/${payload.town}/`)
        .then(res => {
          commit('setMarker', res.data)
        })
        .then(() => {
          router.push({
            name: 'map'
          });
        })
    },

  }
})