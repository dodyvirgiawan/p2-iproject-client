<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">Create New Playlist</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <div class="container mt-5">
            <h2 class="text-md">{{ selectedMovie.title }} will be automatically added to this playlist</h2>
        </div>

        <!-- Form Add Playlist -->
        <div class="container mt-10">
            <form @submit.prevent="createPlaylist">
                <label for="playlist_name" class="block mt-4">Playlist Name: </label>
                <input v-model="playlistForm.title" name="playlist_name" type="text" placeholder="enter playlist name..." class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                <label for="playlist_description" class="block mt-4">Playlist Description: </label>
                <textarea v-model="playlistForm.description" name="playlist_description" placeholder="describe your playlist" class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%; height: 20%"></textarea>
                <button class="rounded-lg mc-button p-2 mt-8 block" type="submit" style="width: 100%">Create Playlist</button>
            </form>
        </div>

    </div>
</template>

<script>
export default {
    name: 'CreatePlaylist',
    computed: {
        selectedMovie() {
            return this.$store.state.selectedMovie
        }
    },
    data: function() {
        return {
            playlistForm: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        createPlaylist() {
            const payload = {
                playlist: {
                    title: this.playlistForm.title,
                    description: this.playlistForm.description
                },
                movie: this.selectedMovie
            }

            this.$store.dispatch('createPlaylist', payload)
        }
    }
}
</script>

<style>

</style>