import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// detactive
import VueClosable from 'vue-closable'
Vue.use(VueClosable)
// external global component
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
Vue.use(VueGlide)

import {
  Select
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
// configure language
locale.use(lang)

// import components
Vue.component(Select.name, Select)

import VModal from 'vue-js-modal'
Vue.use(VModal, {
  componentName: "the-modal"
})
// global component
import TheNavigation from './components/TheNavigation.vue'
Vue.component('the-navigation', TheNavigation)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')