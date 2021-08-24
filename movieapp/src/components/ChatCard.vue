<template>
    <div>
        <!-- Chat from user -->
        <div class="container flex flex-row mt-5" v-if=" chat.name === loggedInUserName ">
            <div class="container w-12">
                <img :src="`https://avatars.dicebear.com/api/bottts/${loggedInUserInfo.first_name}${loggedInUserInfo.last_name}.svg`" class="block w-8">
            </div>

            <div class="flex flex-col">
                <div class="container">
                    <h3 class="text-sm ml-2">{{ chat.name }}</h3>
                </div>
                <div class="container p-2 mt-2 rounded-xl mc-user-chat max-w-md">
                    <p class="text-sm">{{ chat.message }}</p>
                </div>
            </div>
        </div>

        <!-- Chat from other user -->
        <div class="container flex flex-row mt-5 justify-end" v-if=" chat.name !== loggedInUserName ">
            
            <div class="flex flex-col mr-5">
                <div class="container">
                    <h3 class="text-sm ml-2 text-right">{{ chat.name }}</h3>
                </div>
                <div class="container p-2 mt-2 rounded-xl mc-other-chat max-w-md">
                    <p class="text-sm">{{ chat.message }}</p>
                </div>
            </div>

                <div class="container w-12">
                <img :src="`https://avatars.dicebear.com/api/bottts/${otherUserName}.svg`" class="block w-8">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatCard',
    props: ['chat'],
    computed: {
        loggedInUserInfo() {
            return this.$store.state.loggedInUserInfo
        },

        loggedInUserName() {
            return `${this.loggedInUserInfo.first_name} ${this.loggedInUserInfo.last_name}`
        },

        otherUserName() {
            return this.chat.name.toLowerCase().split(' ').join('')
        }
    }
}
</script>

<style>

</style>