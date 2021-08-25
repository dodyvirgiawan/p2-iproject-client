<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">Edit Playlist</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- Form Add Playlist -->
        <div class="container mt-7">
            <form @submit.prevent="editPlaylist">
                <label for="playlist_name" class="block mt-4">Playlist Name: </label>
                <input v-model="viewedPlaylist.title" name="playlist_name" type="text" placeholder="enter playlist name..." class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                <label for="playlist_description" class="block mt-4">Playlist Description: </label>
                <textarea v-model="viewedPlaylist.description" name="playlist_description" class="block mt-4 h-9 p-3 rounded-md text-black" style="width: 100%; height: 20%"></textarea>
                <label for="movie_list" class="block mt-4">Movies List: </label>

                <router-link :to="{ name: 'AddMovie', params: { id: viewedPlaylist.id }}" class="rounded-lg mc-button p-2 mt-4 block text-center">Add a movie</router-link>

                <div class="container text-center mc-4 p-2 mt-4 rounded-xl">
                    <table class="mt-2" style="width: 100%">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            <EditPlaylistMovieRow
                                v-for="(movie, idx) in viewedPlaylist.Movies"
                                :key="movie.title + idx"
                                :movie="movie"
                                :idx="idx"
                                :totalMovie="viewedPlaylist.Movies.length"
                            ></EditPlaylistMovieRow>

                        </tbody>
                    </table>
                </div>

                <div class="container mt-5">
                    <hr style="opacity: 10%">
                </div>
                
                <button class="rounded-lg mc-button p-2 mt-8 block" type="submit">Save Playlist</button>
            </form>
        </div>

    </div>
</template>

<script>
import EditPlaylistMovieRow from '../components/EditPlaylistMovieRow.vue'

export default {
    name: 'EditPlaylist',
    components: {
        EditPlaylistMovieRow
    },
    created: function() {
        const playlistId = this.$route.params.id
        this.$store.dispatch('fetchPlaylistById', playlistId)
    },
    computed: {
        viewedPlaylist() {
            return this.$store.state.viewedPlaylist
        }
    },
    methods: {
        editPlaylist() {
            const payload = {
                playlistId: this.$route.params.id,
                title: this.viewedPlaylist.title,
                description: this.viewedPlaylist.description
            }

            this.$store.dispatch('editPlaylist', payload)
        }
    }
}
</script>

<style>

</style>