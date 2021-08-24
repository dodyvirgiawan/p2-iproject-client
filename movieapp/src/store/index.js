import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: ''
    },
    mutations: {
        SET_IS_LOGGED_IN(state, payload) {
            state.isLoggedIn =  payload
        }
    },
    actions: {
    },
    modules: {
    }
    })
