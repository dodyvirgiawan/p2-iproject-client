<template>
    <div class="mc-3 mt-3 ml-4 rounded-xl">
        <div class="container flex flex-col w-60">
            <div class="container">
                <img :src="movie.posterUrl" class="object-cover rounded-t-xl">
            </div>
            <div class="container p-5">
                <div class="container">
                    <h3 class="text-2xl">{{ movie.title }}</h3>
                </div>
                <div class="container">
                    <small>{{ movie.runtime }} min | {{ movie.genre }}</small>
                </div>
                <div class="container">
                    <div class="mt-6 text-xs">
                        <p>Directed by: {{ movie.director }}</p>
                    </div>
                    <div class="mt-2 text-xs">
                        <p>IMDB Rating: {{ movie.imdbRating }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: ['movie']
}
</script>

<style>

</style>