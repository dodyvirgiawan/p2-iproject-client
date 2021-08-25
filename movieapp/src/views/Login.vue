<template>
    <div class="container m-auto md:flex md:flex-grow mt-24" style="height: 80vh">
        <div class="container mx-auto md:flex md:flex-row justify-center">
            <div class="container sm:w-2/4 mc-1 sm:rounded-l-3xl" style="overflow: auto;">
                <div class="flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 xl:p-14 text-white">
                    <div class="container">
                        <h1 class="font-bold text-4xl">Cineclub</h1>
                        <h2 class="text-xl mt-4">The cinephile lounge</h2>
                    </div>
                    <div class="mt-14">
                        <img src="https://source.unsplash.com/collection/28346982/1600x900" class="rounded-2xl">
                    </div>
                </div>
            </div>
            <div class="container sm:w-2/4 mc-2 sm:rounded-r-3xl" style="overflow: auto;">
                <div class="flex flex-col p-5 sm:p-6 md:p-8 lg:p-14 xl:p-24 text-white">
                    <div class="container">
                        <h3 class="font-bold text-2xl">Hi there fellow Cinephile!</h3>
                        <h3 class="mt-3">Don't have an account yet? <router-link class="mc-button p-2 rounded-xl" to="/register">Register here</router-link></h3>
                    </div>
                    <div class="container mt-3">
                        <p>Sign in via google</p>

                        <GoogleLogin 
                            :params="params" 
                            :renderParams="renderParams" 
                            :onSuccess="onSuccess" 
                            class="mt-2"
                        ></GoogleLogin>
                        
                    </div>
                    <div class="container">
                        <hr class="mt-8 inline-block border-gray-300 invisible md:visible" style="width: 42%; opacity: 30%"> 
                        <span class="p-4 m-3">OR</span>
                        <hr class="mt-8 inline-block border-gray-300 invisible md:visible" style="width: 42%; opacity: 30%"> 
                    </div>
                    <div class="container">
                        <form @submit.prevent="login">
                            <label for="email" class="block mt-4">Email address: </label>
                            <input v-model="loginForm.email" name="email" type="email" placeholder="enter your email" class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                            <label for="password" class="block mt-4">Password: </label>
                            <input v-model="loginForm.password" name="password" type="password" placeholder="enter your password" class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                            <button class="rounded-lg mc-button p-2 mt-8 block" type="submit" style="width: 100%">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoogleLogin from 'vue-google-login'

export default {
    name: 'Login',
    data: function() {
        return {
            loginForm: {
                email: '',
                password: ''
            },
            params: {
                client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID
            },
            renderParams: {
                width: 100,
                height: 30,
                longtitle: false
            }
        }
    },
    methods: {
        login() {
            const payload = {
                email: this.loginForm.email,
                password: this.loginForm.password
            }

            this.$store.dispatch('doLogin', payload)
        },

        onSuccess(googleUser) {
            this.$store.dispatch('googleLogin', googleUser)
        }
    },
    components: {
        GoogleLogin
    }
}
</script>

<style>

</style>