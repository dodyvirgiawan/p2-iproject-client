<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">Add New Movies</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- Form Add Playlist -->
        <div class="container mt-5">
            <form @submit.prevent="addMovieManually">
                <label for="title" class="block mt-4">Movie Title: </label>
                <input v-model="movieForm.title" name="title" type="text" placeholder="enter movie title..." class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                <label for="genre" class="block mt-4">Movie Genre: </label>
                <input v-model="movieForm.genre" name="genre" type="text" placeholder="enter movie genre..." class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                <label for="runtime" class="block mt-4">Movie Runtime: </label>
                <input v-model="movieForm.runtime" name="runtime" type="number" placeholder="enter movie runtime in minutes ..." class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                <label for="director" class="block mt-4">Movie Director: </label>
                <input v-model="movieForm.director" name="director" type="text" placeholder="enter movie director ..." class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                <label for="imdb_rating" class="block mt-4">IMDB Rating: </label>
                <input v-model="movieForm.imdbRating" name="imdb_rating" type="number" step="0.1" placeholder="enter IMDB Rating..." class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                <label for="posterUrl" class="block mt-4">Movie Poster Image URL: </label>
                <input v-model="movieForm.posterUrl" name="posterUrl" type="text" placeholder="enter link to movie poster URL..." class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                <button class="rounded-lg mc-button p-2 mt-8 block" type="submit" style="width: 100%">Add Movie</button>
            </form>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'AddMovie',
    data: function() {
        return {
            movieForm: {
                title: '',
                genre: '',
                runtime: '',
                director: '',
                imdbRating: '',
                posterUrl: ''
            }
        }
    },
    methods: {
        addMovieManually() {
            const payload = {
                playlistId: this.$route.params.id,
                title: this.movieForm.title,
                genre: this.movieForm.genre,
                runtime: this.movieForm.runtime,
                director: this.movieForm.director,
                imdbRating: this.movieForm.imdbRating,
                posterUrl: this.movieForm.posterUrl,
            }

            this.$store.dispatch('addMovieManually', payload)
        }
    }
}
</script>

<style>

</style>