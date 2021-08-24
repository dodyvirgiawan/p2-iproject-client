<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">Add to your playlist</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- Content -->
        <div class="container flex flex-row mt-4">
            <div class="container">
                <label for="playlist_name" class="block mt-8">Select from your current playlist: </label>

                <select v-if="loggedInUserPlaylists.length > 0" class="block mt-4 rounded-md mc-button p-3" v-model="selectedPlaylistId" @change="selectPlaylist">
                    <option value="" class="text-black">Select playlist</option>

                    <option
                        class="text-black"
                        v-for="playlist in loggedInUserPlaylists"
                        :key="'playlist' + playlist.id"
                        :value="playlist.id"
                    >{{ playlist.title }}</option>

                </select>

                <div class="mc-3 p-3 rounded-xl mt-4" v-if="loggedInUserPlaylists.length === 0">
                    You don't have any playlist yet, create a new playlist below.
                </div>

                <label for="playlist_description" class="block mt-16">Or create a new playlist:</label>
                <router-link :to="{name: 'CreatePlaylist'}" class="text-center rounded-lg mc-button p-2 block mt-4" type="submit">Create new playlist</router-link>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'AddToPlaylist',
    data: function() {
        return {
            selectedPlaylistId: ''
        }
    },
    created: function() {
        this.$store.dispatch('fetchLoggedInUserPlaylist')
    },
    methods: {
        selectPlaylist() {
            if(this.selectedPlaylistId) {
                const payload = {
                    playlistId: this.selectedPlaylistId,
                    movie: this.selectedMovie
                }

                this.$store.dispatch('addMovieToPlaylist', payload)
            }
        }
    },
    computed: {
        selectedMovie() {
            return this.$store.state.selectedMovie
        },

        loggedInUserPlaylists() {
            return this.$store.state.loggedInUserPlaylists
        }
    }
}
</script>

<style>

</style>