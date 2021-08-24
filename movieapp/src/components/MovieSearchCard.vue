<template>
    <div class="mc-3 mt-3 ml-4 rounded-xl">
        <div class="container flex flex-col w-60">
            <div class="container">
                <img :src="movie.Poster" class="object-cover rounded-t-xl">
            </div>
            <div class="container p-5">
                <div class="container">
                    <h3 class="text-2xl">{{ movie.Title }}</h3>
                </div>
                <div class="container">
                    <small>{{ movie.Runtime }} min | {{ movie.Genre }}</small>
                </div>
                <div class="flex flex-row">
                    <div class="container w-3/4">
                        <div class="mt-6 text-xs">
                            <p>Directed by: {{ movie.Director }}</p>
                        </div>
                        <div class="mt-2 text-xs">
                            <p>IMDB Rating: {{ movie.imdbRating }}</p>
                        </div>
                    </div>
                    <div class="container w-1/4 m-auto">

                        <button class="rounded-lg mc-button p-2 mt-6 block">
                            <img class="w-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAxUlEQVRIS92V0Q3CMAxE7yZghMImjEIng1EYpd2ADYwSKSgE4sQmVSX6W/tefHUvxMYPN9ZHFSAiZwBXAEfjIRYAM8l76NMAoXAyiqfyheSpBZBYQJpsFJG3Pm2C/QDlKXMbh0zgApRNFpGuCVqA9L62VWkZqhbtDtBsGGLRfwG0+HB/5N5MsgAeAA69wkXdSjKm8CuLvqxpiOubI1FXAJePuNb+XOcUsa06wS+ieW8OcHneui9ygMvzbsAoS0od03XoOcQTbKPOGc7x0aEAAAAASUVORK5CYII="/>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MovieSearchCard',
    props: ['movie']
}
</script>

<style>

</style>