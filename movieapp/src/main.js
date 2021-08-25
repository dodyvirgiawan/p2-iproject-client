import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import InstantSearch from 'vue-instantsearch'
import VueSocketIO from 'vue-socket.io'
import './assets/css/tailwind.css'

Vue.config.productionTip = false

Vue.use(InstantSearch)
Vue.use(new VueSocketIO({
    connection: 'https://cineclub-lounge.herokuapp.com'
}))

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
