<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">Trending movie</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- Content -->
        <div class="container flex flex-col mt-4">
           <div class="container">
                <p class="mt-4 rounded-lg text-xl">Looking for watching something new? Take a look at our collection of trending movies!</p>
            </div>

            <div class="container mt-4 mc-1 flex flex-col rounded-lg">

                <div class="container flex flex-row flex-wrap mt-4 p-1 pb-5" style="height: 80vh; overflow: auto;">

                    <!-- Trending Movie -->
                    <TrendingMovieCard
                        v-for="(movie, idx) in trendingMovies"
                        :key="'movie.title' + idx"
                        :movie="movie"
                    ></TrendingMovieCard>

                </div>
            </div>

            <div class="container mc-4 mt-4 p-5 rounded-xl">
                <h6 class="text-xl">Source:</h6>

            <div class="container mt-3">
                <hr style="opacity: 10%">
            </div>

                <img class="w-40 mt-4" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg">
            </div>
        </div>
    </div>
</template>

<script>
import TrendingMovieCard from '../components/TrendingMovieCard.vue'

export default {
    name: 'TrendingMovies',
    components: {
        TrendingMovieCard
    },
    created: function() {
        this.$store.dispatch('fetchTrendingMovies')
    },
    computed: {
        trendingMovies() {
            return this.$store.state.trendingMovies
        }
    }
}
</script>

<style>

</style>