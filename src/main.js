import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// detactive
import VueClosable from 'vue-closable'
Vue.use(VueClosable)

import Ripple from 'vue-ripple-directive'
Vue.directive('ripple', Ripple);

// external global component
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
Vue.use(VueGlide)

import {
  Select,
  Option
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import '@/assets/css/index.scss'
// configure language
locale.use(lang)

// import components
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)

import VModal from 'vue-js-modal'
Vue.use(VModal, {
  componentName: "the-modal"
})
// global component
import TheNavigation from './components/TheNavigation.vue'
Vue.component('the-navigation', TheNavigation)

import VueDaumPostcode from "vue-daum-postcode"
Vue.use(VueDaumPostcode, {
  name: "vue-daum-postcode"
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')