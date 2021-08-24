<template>
    <div class="container m-auto flex flex-grow mt-24" style="height: 80vh">
        <div class="container mx-auto flex flex-row justify-center">
            <div class="container w-2/4 mc-1 rounded-l-3xl">
                <div class="flex flex-col p-12 text-white">
                    <div>
                        <div>
                            <h1 class="font-bold text-4xl">Cineclub</h1>
                            <h2 class="text-xl mt-4">The cinephile lounge</h2>
                        </div>
                        <div class="mt-14">
                            <img src="@/assets/home.jpg" class="rounded-md">
                        </div>
                    </div>
                </div>
            </div>
            <div class="container w-2/4 mc-2 rounded-r-3xl">
                <div class="flex flex-col p-24 text-white">
                    <div class="container">
                        <h3 class="font-bold text-2xl">Hi there fellow Cinephile!</h3>
                        <h3 class="mt-1">Already have an account? Login here</h3>
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
                        <form @submit.prevent="register">
                            <label for="first_name" class="block mt-4">First name: </label>
                            <input v-model="registerForm.first_name" name="first_name" type="text" placeholder="enter your first name" class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                            <label for="last_name" class="block mt-4">Last name: </label>
                            <input v-model="registerForm.last_name" name="last_name" type="text" placeholder="enter your last name" class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                            <label for="email" class="block mt-4">Email address: </label>
                            <input v-model="registerForm.email" name="email" type="email" placeholder="enter your last name" class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                            <label for="password" class="block mt-4">Password: </label>
                            <input v-model="registerForm.password" name="password" type="password" placeholder="enter your last name" class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                            <button class="rounded-lg mc-button p-2 mt-8 block" type="submit" style="width: 100%">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data: function() {
        return {
            registerForm: {
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        register() {
            const payload = {
                first_name: this.registerForm.first_name,
                last_name: this.registerForm.last_name,
                email: this.registerForm.email,
                password: this.registerForm.password,
            }

            this.$store.dispatch('doRegister', payload)
        }
    }
}
</script>

<style>

</style>