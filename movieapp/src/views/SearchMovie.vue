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
        <div class="container mt-8 md:flex md:flex-row ml-5">
            <input v-on:keyup.enter="searchMovie" v-model="searchTitle" autocomplete="off" name="search" type="text" placeholder="search movies..." class="h-9 p-3 rounded-xl text-black">
            <button class="rounded-lg p-2 mc-button my-auto md:block md:ml-5" @click="searchMovie">Search</button>
            <button class="rounded-full p-2 mc-button my-auto md:block ml-5 mt-3 md:mt-0" @click="startRecognition"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABcklEQVRIS+2V4TEEQRSEvxcBIuAiQASIgAwQgROBC4EICIEIuAjcReBEgAha9daMWrtzu1vHVflhfm3Nznb363mvN1jzijXjM4hA0iFwBewlQU/AZUQs+gT2EiTwxwLQO7DfRzKEwGoPgClwBhj4GjgFHiLipKuKIQRKAKOsVtIm8AYsImL0KwQR8U2MpIq4ud8kG1zBP8HSe1rm9d+9g6YySe77DWArIvyMpB3gBXiNCD97r9hVrS6S5PHfTlM6k3QPHAMeuPPk5S3g+KgGTZIj5BmYR0SOk+poicBTegHcRMQ4qZ2lKup39eFs8vBJukuTXX1TP1QiyOX7nLPGVXjPxFmdCccJPKv3+a9pzyTFQZOUq7DnRyYptVmyxkHo6GipL1qUgSTlkPOWLTBARZSAbaPDz2saEb6T1uqMilolXXlWVN5pUR0t+T9J/u+md3PA1Ux+/D9okA1K0M4u6vJiaDysTNBFvuxd7/9gFdD6N5/64LsZ8imKCQAAAABJRU5ErkJggg=="/></button>
        </div>

        <!-- Content -->
        <div v-if="searchedMovies.length !== 0">
            <div class="container flex flex-row flex-wrap mt-4" v-if="searchedMovies[0].Response === 'True'">

                <!-- MOVIECARD -->
                <MovieSearchCard
                    v-for="(movie, idx) in searchedMovies"
                    :key="movie.title + idx"
                    :movie="movie"
                ></MovieSearchCard>
                
            </div>

            <div class="container flex flex-row flex-wrap mt-4" v-if="searchedMovies[0].Response === 'False'">

                <!-- MOVIECARD -->
                <div class="mc-3 p-3 rounded-xl mt-4 ml-4">
                    Sorry, no movies found.
                </div>
                
            </div>
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
        },

        startRecognition() {
            window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
            const recognition = new window.SpeechRecognition()

            recognition.start()

            recognition.addEventListener("result", event => {  
                const transcript = event.results[event.resultIndex][0].transcript
                this.searchTitle = transcript
                this.searchMovie()
            })
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