import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// external global component
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
import VModal from 'vue-js-modal'
// global component
import TheNavigation from './components/TheNavigation.vue'


Vue.use(VModal, {
  componentName: "the-modal"
})
Vue.use(VueGlide)
Vue.component('the-navigation', TheNavigation)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')