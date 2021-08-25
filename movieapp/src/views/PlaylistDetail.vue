<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">{{ viewedPlaylist.title }}</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- If want to use like feature -->
        <!-- <div class="container mt-2 p-1">
            <small>12 other cinephiles likes this playlist</small>
        </div> -->

        <!-- Content -->
        <div class="container flex flex-row mt-2">
            <div class="container">
                <div class="flex flex-col">
                    <div class="container">
                        <div class="flex flex-col p-6 mc-3 mt-5 rounded-t-3xl">
                            <!-- Posted by -->
                            <div class="container">
                                <h2 class="rounded-lg text-2xl">Description</h2>
                            </div>

                            <div class="container mt-3">
                                <hr style="opacity: 10%">
                            </div>

                            <!-- Description -->
                            <div class="container mt-4">
                                <p class="text-md p-2">
                                    {{ viewedPlaylist.description }}
                                </p>
                            </div>

                            <div class="container">
                                <p class="mt-4 rounded-lg text-2xl">Movies in this playlist</p>
                            </div>

                            <div class="container mt-3">
                                <hr style="opacity: 10%">
                            </div>
                            <!-- Movies in this playlist -->
                            <div class="container mt-4 mc-1 flex flex-col rounded-lg">

                                <div class="container flex flex-row flex-wrap mt-4 p-5" style="overflow: auto;">

                                    <!-- MOVIECARD -->
                                    <MovieCard
                                        v-for="(movie, idx) in viewedPlaylist.Movies"
                                        :key="movie.title + idx"
                                        :movie="movie"
                                        class="m-9"
                                    ></MovieCard>

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Comment Section -->
                    <div class="container">
                        <div class="flex flex-col p-6 mc-1 rounded-b-3xl" v-if="viewedPlaylist.Comments">
                            <!-- Comment Button -->
                            <div class="container p-3">
                                <div class="flex flex-row">
                                    <div class="container w-4/5">
                                        <input v-model="comment" name="comment" type="text" placeholder="share your thoughts here..." class="block mt-2 h-9 p-3 rounded-xl text-black" style="width: 100%">
                                    </div>
                                    <div class="container w-1/5">
                                        <button class="rounded-lg mc-button mt-2 p-1 ml-3" style="width: 100%" @click="addComment">Post comment</button>
                                    </div>
                                </div>
                            </div>

                            <!-- The Comments -->
                            <div class="container" v-if="viewedPlaylist.Comments.length > 0">

                                
                                <!-- Comment Cards -->
                                <CommentCard
                                    v-for="(comment,idx) in viewedPlaylist.Comments"
                                    :key="'comment' + idx"
                                    :comment="comment"
                                ></CommentCard>
                                
                            </div>

                            <div class="container p-10 text-center" v-if="viewedPlaylist.Comments.length === 0">
                                <p>This playlist has no comment. Be the first one to comment!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'
import CommentCard from '../components/CommentCard.vue'

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
    name: 'PlaylistDetail',
    components: {
        MovieCard,
        CommentCard
    },
    data: function() {
        return {
            comment: ''
        }
    },
    created: function() {
        const playlistId = this.$route.params.id
        this.$store.dispatch('fetchPlaylistById', playlistId)

        Vue.$toast.info("Loading... please wait until the page is fully loaded", toastOptions)
    },
    computed: {
        viewedPlaylist() {
            return this.$store.state.viewedPlaylist
        }
    },
    methods: {
        addComment() {
            const payload = {
                playlistId: this.viewedPlaylist.id,
                comment: this.comment
            }

            this.$store.dispatch('addCommentToPlaylist', payload)
        }
    }
}
</script>

<style>

</style>