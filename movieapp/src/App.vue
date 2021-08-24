<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>

export default {
    name: 'App',
    created: function() {
        if(localStorage.getItem('access_token')) {
            this.$store.commit('SET_IS_LOGGED_IN', true)
            this.$store.dispatch('getLoggedInUserInfo')
        } else {
            this.$store.commit('SET_IS_LOGGED_IN', false)
        }
    }
}
</script>

<style>

</style>
