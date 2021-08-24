<template>
    <div class="container m-auto flex flex-grow mt-24" style="height: 80vh">
        <div class="container mx-auto flex flex-row justify-center">
            <div class="container w-2/4 mc-1 rounded-l-3xl">
                <div class="flex flex-col p-12 text-white">
                    <div class="container">
                        <h1 class="font-bold text-4xl">Cineclub</h1>
                        <h2 class="text-xl mt-4">The cinephile lounge</h2>
                    </div>
                    <div class="mt-14">
                        <img src="@/assets/home.jpg" class="rounded-md">
                    </div>
                </div>
            </div>
            <div class="container w-2/4 mc-2 rounded-r-3xl">
                <div class="flex flex-col p-24 mt-14 text-white">
                    <div class="container">
                        <h3 class="font-bold text-2xl">Hi there fellow Cinephile!</h3>
                        <h3 class="mt-1">Don't have an account yet? Register here</h3>
                    </div>
                    <div class="container">
                        <button class="rounded-lg mc-2 p-2 text-gray-100 mt-6 block">Sign in with Google</button>
                    </div>
                    <div class="container">
                        <hr class="mt-8 inline-block border-gray-300" style="width: 42%; opacity: 30%"> 
                        <span class="p-4 m-3">OR</span>
                        <hr class="mt-8 inline-block border-gray-300" style="width: 42%; opacity: 30%"> 
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
export default {
    name: 'Login',
    data: function() {
        return {
            loginForm: {
                email: '',
                password: ''
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
        }
    }
}
</script>

<style>

</style>