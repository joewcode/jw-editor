/* Стартовый файл приложения */
// Загружаем зависимости и тд
require('./bootstrap')

//
import 'es6-promise/auto'
import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store.js'

import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

// icons
import { library } from '@fortawesome/fontawesome-svg-core'
import * as ficon from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(ficon['fas'])

//
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style.css'

//
import Index from './Index'
import router from './router'

//
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
axios.defaults.baseURL = 'http://127.0.0.1:2211'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
// Vue.config.silent = false

// Set Vue globally
window.Vue = Vue
window.Vuex = Vuex
window.axios = axios

// Set Vue router
Vue.router = router
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Vuex)

// Load Index
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.component('index', Index)

new Vue({
    render: h => h(Index),
    router,
    store: new Vuex.Store(store)
}).$mount('#app')


/*
const app = new Vue({
    el: '#app',
    render: h => h(Index),
    router,
    store: new Vuex.Store(store),
//    template: '<index/>'
})
*/
