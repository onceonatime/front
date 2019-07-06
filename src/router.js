import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import {
  STORE
} from './Constant.js'

// view components
import Main from './views/Main.vue'

import Search from './views/Search.vue'
// search child 
import Detail from './views/Detail.vue'
import Maps from './views/Maps.vue'
import Site from './views/Site.vue'
import TimeLine from './views/TimeLine.vue'
import Times from './views/Times.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '',
      name: 'main',
      component: Main
    },
    {
      path: '',
      name: 'saerch',
      component: Search,
      children: [{
          path: '/times',
          name: 'times',
          component: Times,
          beforeEnter(to, from, next) {
            store.commit(STORE.mutations.SET_HEAD, '시대 검색')
            next()
          }
        },
        {
          path: '/timeline',
          name: 'timeline_guard',
          redirect: {
            name: 'main'
          }
        },
        {
          path: '/timeline/:age',
          name: 'timeline',
          props: (route) => ({
            age: route.params.age
          }),
          component: TimeLine,
          beforeEnter(to, from, next) {
            store.commit(STORE.mutations.SET_HEAD, '시대 검색')
            next()
          }
        },
        {
          path: '/site',
          name: 'site',
          component: Site,
          beforeEnter(to, from, next) {
            store.commit(STORE.mutations.SET_HEAD, '시대 검색')
            next()
          }
        }, {
          path: '/map',
          name: 'map',
          component: Maps,
          beforeEnter(to, from, next) {
            store.commit(STORE.mutations.SET_HEAD, '둘러보기')
            next()
          }
        },
        {
          path: '/detail',
          name: 'detail_guard',
          component: Main,
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail,
          props: (route) => ({
            id: route.params.id
          }),
          beforeEnter(to, from, next) {
            console.log(from);
            store.commit(STORE.mutations.SET_HEAD, '상세 정보')
            next()
          }
        },

      ]
    },
  ]
})