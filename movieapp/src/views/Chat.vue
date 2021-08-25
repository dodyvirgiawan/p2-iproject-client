<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">Chat lounge</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- Content --> 
        <div class="container m-auto md:flex md:flex-grow mt-5" style="height: 60vh; overflow: auto;">
            <div class="container mx-auto md:flex md:flex-row justify-center">

                <!-- Chat Sidebar (Online User) -->
                <div class="container md:w-1/4 mc-1 md:rounded-tl-3xl p-5" style="overflow: auto;">
                    <div class="container">
                        <h1 class="text-xl text-center">Online Cinephiles</h1>
                    </div>

                    <div class="container mt-5 mb-7">
                        <hr style="opacity: 10%">
                    </div>

                    <OnlineUserCard
                        v-for="(user, idx) in loggedInChatUsers"
                        :key="'chatuser' + idx"
                        :user="user"
                    ></OnlineUserCard>

                </div>

                <!-- The Chat -->
                <div ref="chatSection" class="container md:w-3/4 mc-2 md:rounded-tr-3xl p-6 text-white" style="overflow: auto;">
                    
                    <div class="container flex flex-col-reverse">

                        <ChatCard
                            v-for="(chat, idx) in chatMessages"
                            :key="'chat' + idx"
                            :chat="chat"
                        ></ChatCard>

                    </div>
                </div>
            </div>
        </div>

        <div class="container flex flex-row justify-end mr-5 mc-1 p-5 rounded-b-3xl">
            <input v-on:keyup.enter="sendMessage" v-model="message" autocomplete="off" type="text" placeholder="type here to chat..." class="h-9 p-3 rounded-xl text-black w-full md:w-2/3">
            <button @click="sendMessage" class="rounded-full items-center p-2 mc-button my-auto block ml-5">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABtElEQVRIS72VwXHCMBBF/4oLzsHCFQQ6IBWEDqCDpAPoAFJBTAfQAemAVBDSAVQgzGQgF7QZ2bLHNjZ4HMBn+b/d/asvwo0/urE+7gvY73YrYpYgmjiuO79Gd5kO9kGwJUBa4TWA2a/WU8/ztnVhecCCgD4DQQxiwED9uqA8YETAO4A5tJ6ZUYHo2VRvQQto/eZ4numu0pcB/CjVbQjxBWDtSNkxCgeleiyEAfdTirOqoJMtSnzQupOu9KBUG0JMALzEIGJeMPPU8bxlWTtFgNAHEC1xPJpxZH6OQQwMkoUoOWugRYDYh6iokp+VUq2mECMGzPlw8whYMZGfXvETQMqHbNcXQABeATzGoKaUT4UdlAKYP8E8yY/MdjK0gHa4cUTfD67brTaiC8J2RK1Y2NwZx3VnySLk3d8HQWRyibA1eWxNDoXLzpZ1EMVF8ZqO7SgiXeCDtPYrr2lq/htHynCe5qIR0ZCJBqluzU03fly80eejotEYg7lnqzX5ZKKiknChB/H8be5ExkXBZ8LOr5Oq5+J6Y+O6lnBxB9GD07IPTrJqlWKz5NB9n8z/VFo5Ta8N+QNUs/0ZzvlJrAAAAABJRU5ErkJggg=="/>
            </button>
        </div>
    </div>
</template>

<script>
import ChatCard from '../components/ChatCard.vue'
import OnlineUserCard from '../components/OnlineUserCard.vue'

export default {
    name: 'Chat',
    created: function() {
        const user = `${this.loggedInUserInfo.first_name} ${this.loggedInUserInfo.last_name}`
        this.$socket.emit('loginChat', user)
    },
    beforeDestroy: function() {
        const user = `${this.loggedInUserInfo.first_name} ${this.loggedInUserInfo.last_name}`
        this.$socket.emit('logoutChat', user)
    },
    components: {
        ChatCard,
        OnlineUserCard
    },
    data: function() {
        return {
            message: ''
        }
    },
    sockets: {
        syncMessage(data) {
            this.$store.commit('SET_CHAT_MESSAGES', data)
            this.$refs.chatSection.scrollTop = this.$refs.chatSection.scrollHeight
        },

        syncLoggedInChatUser(data) {
            this.$store.commit('SET_LOGGED_IN_CHAT_USERS', data)
        }
    },
    methods: {
        sendMessage() {
            if(this.message.trim()) { // Only send if not an empty string
                const data = {
                    name: `${this.loggedInUserInfo.first_name} ${this.loggedInUserInfo.last_name}`,
                    message: this.message
                }
    
                this.message = ''
                this.$socket.emit('sendMessage', data)
            }
        }
    },
    computed: {
        loggedInUserInfo() {
            return this.$store.state.loggedInUserInfo
        },

        chatMessages() {
            return this.$store.getters.chatMessages
        },

        loggedInChatUsers() {
            return this.$store.state.loggedInChatUsers
        }
    }
}
</script>

<style>

</style>