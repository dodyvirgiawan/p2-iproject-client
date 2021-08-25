<template>
    <tr class="spaceUnder">
        <td>{{ idx + 1}}.</td>
        <td>{{ movie.title }}</td>
        <td>
            <button class="rounded-lg mc-button p-2 block m-auto" @click.prevent="removeMovieFromPlaylist">Remove from playlist</button>
        </td>
    </tr>
</template>

<script>
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
    name: 'EditPlaylistMovieRow',
    props: ['movie', 'idx', 'totalMovie'],
    methods: {
        removeMovieFromPlaylist() {
            if(this.totalMovie > 1) {
                const payload = {
                    movieId: this.movie.id,
                    playlistId: this.$route.params.id
                }
    
                this.$store.dispatch('removeMovieFromPlaylist', payload)
            } else {
                Vue.$toast.error("You can't delete last remaining movie in the playlist", toastOptions)
            }
        }
    }
}
</script>

<style>

</style>