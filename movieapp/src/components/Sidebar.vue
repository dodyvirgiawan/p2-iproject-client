<template>
    <!-- Sidebar -->
    <div class="flex flex-col p-10 justify-between" style="height: 100%">
        <!-- Name -->
        <div class="container text-white mc-3 rounded-xl p-2">
            <div class="flex flex-row p-1">
                <div class="container m-auto w-1/4">
                    <img :src="`https://avatars.dicebear.com/api/bottts/${loggedInUserInfo.first_name}${loggedInUserInfo.last_name}.svg`" class="block w-11 mx-auto">
                </div>
                <div class="container m-auto w-3/4 ml-3">
                    <h3 class="text-2xl">{{ loggedInUserInfo.first_name }} {{ loggedInUserInfo.last_name }}</h3>
                </div>
            </div>
        </div>

        <!-- Navigations -->
        <div class="container flex flex-col p-3 text-white text-lg">
            <div class="container mt-3">
                <router-link to="/" class="container flex flex-row p-2 rounded-xl m-navbar-btn">
                    <div class="container w-1/4">
                        <img class="block w-9 mx-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABC0lEQVRIS+2V3RHCMAyDpQmACYAJgA1gE5gMNoERygZ0AtjAXHoJlwa3qPy8kbdeHX12rDjEjxd/rA8ZYGZjAMeY0IbkTUlOAmTiyyhaAZAgLwGF+DkCFgAkSC/AEV9HwAmABOkEeOLp3OM/CeIC+sRTY1XIE0ARHwJpAYaIq5AHwLHiRPV63Hv1LJwDgu2CM5pF8qWF84tmZpZ9VyRXjU5W6jcBZ5LNpfSa3GSSKjCz4P09gFkxGi4AdiSDXZEqKCtXAEFo2jF3LiTnnwJaFWVHWlbqxikV/AHt9pVu6HKHGuf1ILxUI+W1cmJqki07e4Dg+0OPNbvYNYBtuhePifBmpvK2QfNGVs0C783y3RnaPV/7AAAAAElFTkSuQmCC"/>
                    </div>
                    <div class="container w-3/4 p-1">
                        Home
                    </div>
                </router-link>
            </div>
            <hr class="mt-2 inline-block border-gray-300" style="opacity: 30%"> 
            <div class="container mt-3">
                <router-link to="/movies/trending" class="container flex flex-row p-2 rounded-xl m-navbar-btn">
                    <div class="container w-1/4">
                        <img class="block w-9 mx-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA+ElEQVRIS9WVwRGCMBBF/6/AEtQK1A4sRStRL14sQmuwAo/epAAP0IEdfGeZhGFAICOJM3Jistn/8ncJSyR+mFgfvwNIWgM4A5iNdJUD2JK8mU7lQJIFpiPFfXpOct4EyEVXAB7+nWQmaRmyZjmSSh2S5eHrDqqApD2AHYCMpAEtMXRtGOAEMwALAAeSJm6QwbUgB04sqCzN8vlSdpYoUpO7e5Ac4K19CwruQRMg6QrgSPLeBx8D8PfEbruBnp9AMQBe9+RArzroLwDJSpS2yaGfbV8PrFmTUKGBfQXJcq7U/6Y2cC4RZkIBYNMaOJFO3pL53UxO5eANgwfVGdurcxYAAAAASUVORK5CYII="/>
                    </div>
                    <div class="container w-3/4 p-1">
                        Trending Movies
                    </div>
                </router-link>
            </div>
            <hr class="mt-2 inline-block border-gray-300" style="opacity: 30%"> 
            <div class="container mt-3">
                <router-link to="/movies" class="container flex flex-row p-2 rounded-xl m-navbar-btn">
                    <div class="container w-1/4">
                        <img class="block w-9 mx-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABRklEQVRIS9WU7TEEURBFz42AjcBuBkRABojACkEEiEAIbATIgAjIwGwGK4Knrnoz2uybNYNRpX9NVX+c7p53W4xsGrk+fwtIKU2BK2AX8PcNcCmpyr5zYA5UwDNwZt+mLTQT5AJPwHYrYQUcA7cdvr1NkAi4Aw6Bx9ylOZ5gPwBLvntJR11TRIA73QJmdUd5qpeQXPJVkmZDABNJhlEAlHyvktprbXhxAq/jBHgATnPENXAQuiv5FpL844sWAQ5ywaHmV+TX5H+4ZhHgwJ2h1XP8StLkK0BygKRB4kspreWllOaSvPIPJZcC+0wT81wYsBindaNxRT+aIKvb6n+3MQCfBv6XgEXW0Tgr8kqy8i8M+vUVxedtUH3PSseuz+tsxywlNS8oOiPAN8fiGKrmpc+7JN+p7lPxnbb75Aw6C30KtmNGB7wBIbqtGRsfaLYAAAAASUVORK5CYII="/>
                    </div>
                    <div class="container w-3/4 p-1">
                        Find Movies
                    </div>
                </router-link>
            </div>
            <hr class="mt-2 inline-block border-gray-300 text-center" style="opacity: 30%"> 
            <div class="container mt-3">
                <router-link to="/playlist" class="container flex flex-row p-2 rounded-xl m-navbar-btn">
                    <div class="container w-1/4">
                        <img class="block w-9 mx-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAXklEQVRIS+2SMQ4AIAwCy/8fXaOxiw5lgaluJqdQKEJ8IP4/RqBN2B9RZua2BeCI1721eoF6V/w3gVyAdcpy/g5YZyzn72BKfrvxb5G8A7kAu98s5++AdcZyM0Gb1ALihjAZersDsAAAAABJRU5ErkJggg=="/>                                
                    </div>
                    <div class="container w-3/4 p-1">
                        My Playlist
                    </div>
                </router-link>
            </div>
            <hr class="mt-2 inline-block border-gray-300 text-center" style="opacity: 30%"> 
            <div class="container mt-3">
                <router-link to="/chat" class="container flex flex-row p-2 rounded-xl m-navbar-btn">
                    <div class="container w-1/4">
                        <img class="block w-9 mx-auto" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA2klEQVRIS+2V0Q3CMAxE7yZgBGASGAU2gUlgBEZgBJiAdgOYwMhRU6GSpHLk8IV/m9yzz6lNNA421kcWICJbACcAK2MSHYA9yaveKwH04NIoHo93JNdFgFVYRLTSM4BNECZD8q49GCCPJMDLcxGRHMDF8xIgkGsjev4HZB38tUU9yTABxv8gNsehyfoad1+jwgswTdC9ghLgCWBRadHoeQmg41mHlXWC9p+eZwHTD4meHEkerBWW9kEcHa8hw4tVfG7hKOA+iN9qxOcAmrG+Z21+dbgunFQWzQFvsouBGQSQTa0AAAAASUVORK5CYII="/>                               
                    </div>
                    <div class="container w-3/4 p-1">
                        Chat
                    </div>
                </router-link>
            </div>
        </div>

        <!-- Logout Button -->
        <div v-if="isLoggedIn && !loggedInUserInfo.isGoogleUser" class="container text-white mc-3 rounded-xl p-2 cursor-pointer" @click="logout">
            <h3 class="text-2xl text-center">Logout</h3>
        </div>

        <div v-if="isLoggedIn && loggedInUserInfo.isGoogleUser" class="container text-white text-center text-2xl mc-3 rounded-xl p-2 cursor-pointer" @click="logout">
            <GoogleLogin 
                :params="params" 
                :logoutButton=true
            >Logout</GoogleLogin>
        </div>
    </div>
</template>

<script>
import GoogleLogin from 'vue-google-login'

import Vue from 'vue'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

const toastOptions = {
    position: "top-center",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
}

Vue.use(Toast, {
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true,
})

export default {
    name: 'Sidebar',
    data: function() {
        return {
            params: {
                client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID
            }
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('access_token')

            this.$socket.emit('logoutChat', `${this.loggedInUserInfo.first_name} ${this.loggedInUserInfo.last_name}`)
            this.$store.commit('SET_IS_LOGGED_IN', false)
            this.$store.commit('SET_LOGGED_IN_USER_INFO', {})

            this.$router.push('/login')
            Vue.$toast.success("Successfully logged out!", toastOptions)
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn
        },

        loggedInUserInfo() {
            return this.$store.state.loggedInUserInfo
        }
    },
    components: {
        GoogleLogin
    }
}
</script>

<style>

</style>