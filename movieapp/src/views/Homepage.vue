<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">Browse binge watch list</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- Content -->
        <div class="container flex flex-row mt-4">
            <div class="container">

                <!-- Playlist Display Card for non owner -->
                <PlaylistDisplayCard
                    v-for="playlist in playlists"
                    :key="playlist.id"
                    :playlist="playlist"
                    :type="'notOwner'"
                ></PlaylistDisplayCard>

            </div>

        </div>
    </div>
</template>

<script>
import PlaylistDisplayCard from '../components/PlaylistDisplayCard.vue'

export default {
    name: 'Homepage',
    components: {
        PlaylistDisplayCard
    },
    created: function() {
        this.$store.dispatch('fetchPlaylists')
    },
    computed: {
        playlists() {
            return this.$store.state.playlists
        }
    }
}
</script>

<style>

</style>