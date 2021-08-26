<template>
    <div id="app">
        <router-view/>
        <div class="mt-96">
            <Footer></Footer>
            <HFooter></HFooter>
        </div>
    </div>
</template>

<script>
import Footer from './components/Footer.vue'
import HFooter from 'vue-hacktiv8-footer'

export default {
    name: 'App',
    created: function() {
        if(localStorage.getItem('access_token')) {
            this.$store.commit('SET_IS_LOGGED_IN', true)
            this.$store.dispatch('getLoggedInUserInfo')
        } else {
            this.$store.commit('SET_IS_LOGGED_IN', false)
        }
    },
    components: {
        Footer,
        HFooter
    },
    sockets: {
        syncMessage(data) {
            this.$store.commit('SET_CHAT_MESSAGES', data)
        }
    }
}
</script>

<style>
.social-links {
    display: flex;
}
</style>
