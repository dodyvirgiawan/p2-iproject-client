<template>
    <div id="app">
        <router-view/>
        <div class="mt-80">
            <HFooter></HFooter>
        </div>
    </div>
</template>

<script>
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
        HFooter
    }
}
</script>

<style>

</style>
