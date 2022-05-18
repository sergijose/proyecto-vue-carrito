
import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { vfmPlugin } from 'vue-final-modal'
Vue.use(vfmPlugin)


import ModalProduct from './components/ModalProduct.vue'
Vue.component('ModalProduct', ModalProduct)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
