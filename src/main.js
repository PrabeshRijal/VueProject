import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles.css'
import '../node_modules/slick-carousel/slick/slick.css'
import VueRouter from 'vue-router'
import {routes} from './router.js'
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')
