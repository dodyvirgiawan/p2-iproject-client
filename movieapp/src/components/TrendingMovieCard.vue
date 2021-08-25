<template>
    <div class="mc-3 mt-3 ml-4 rounded-xl">
        <div class="container flex flex-col w-60">
            <div class="container">
                <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" class="object-cover rounded-t-xl">
            </div>
            <div class="container p-5">
                <div class="container">
                    <h3 class="text-2xl">{{ movie.title }}</h3>
                </div>
                <div class="container">
                    <small>
                        Release Date: {{ movie.release_date }}
                    </small>
                </div>
                <div class="container mt-3">
                    <hr style="opacity: 10%">
                </div>
                <div class="container">
                    <div class="mt-5 text-xs">
                        <p>
                            {{ movie.overview }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrendingMovieCard',
    props: ['movie']
}
</script>

<style>

</style>