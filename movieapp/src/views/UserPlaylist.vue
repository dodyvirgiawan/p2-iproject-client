<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">My Playlist</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- Content -->
        <div class="container flex flex-row mt-4">
            <div class="container">
                <div class="mt-5" v-if="loggedInUserPlaylists.length === 0">
                    <p>
                        You don't have any playlists yet. Start creating one by browsing movies first!
                    </p>

                    <router-link to="/movies" class="rounded-lg mc-button p-2 mt-8 block text-center" type="submit" style="width: 100%">Browse movies</router-link>
                </div>

                <!-- Playlist Display Card for owner (has edit button) -->
                <PlaylistDisplayCard
                    v-for="playlist in loggedInUserPlaylists"
                    :key="playlist.id"
                    :playlist="playlist"
                    :type="'owner'"
                ></PlaylistDisplayCard>


            </div>

        </div>
    </div>
</template>

<script>
import PlaylistDisplayCard from '../components/PlaylistDisplayCard.vue'

export default {
    name: 'UserPlaylist',
    components: {
        PlaylistDisplayCard
    },
    created: function() {
        this.$store.dispatch('fetchLoggedInUserPlaylist')
    },
    computed: {
        loggedInUserPlaylists() {
            return this.$store.state.loggedInUserPlaylists
        }
    }
}
</script>

<style>

</style>