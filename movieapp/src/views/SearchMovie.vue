<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">Find Movies</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- Search Bar -->
        <div class="container mt-8 flex flex-row ml-5">
            <input v-model="searchTitle" name="search" type="text" placeholder="search movies..." class="h-9 p-3 rounded-xl text-black">
            <button class="rounded-lg p-2 mc-button my-auto block ml-5" @click="searchMovie">Search</button>
        </div>

        <!-- Content -->
        <div class="container flex flex-row flex-wrap mt-4">

            <!-- MOVIECARD -->
            <MovieSearchCard
                v-for="(movie, idx) in searchedMovies"
                :key="movie.title + idx"
                :movie="movie"
            ></MovieSearchCard>
            
        </div>
    </div>
</template>

<script>
import MovieSearchCard from '../components/MovieSearchCard.vue'

export default {
    name: 'SearchMovie',
    components: {
        MovieSearchCard
    },
    data: function() {
        return {
            searchTitle: ''
        }
    },
    methods: {
        searchMovie() {
            this.$store.dispatch('searchMovieByTitle', this.searchTitle)
        }
    },
    computed: {
        searchedMovies() {
            return this.$store.state.searchedMovies
        }
    }
}
</script>

<style>

</style>