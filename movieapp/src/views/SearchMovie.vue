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
            <input name="search" type="text" placeholder="search movies..." class="h-9 p-3 rounded-xl text-black">
            <button class="rounded-lg p-2 mc-button my-auto block ml-5">Search</button>
        </div>

        <!-- Content -->
        <div class="container flex flex-row flex-wrap mt-4">
            <!-- MOVIECARD -->
            <div class="mc-3 mt-5 ml-4 rounded-xl">
                <div class="container flex flex-col w-60">
                    <div class="container">
                        <img src="@/assets/samplemovie.jpg" class="object-cover rounded-t-xl">
                    </div>
                    <div class="container p-5">
                        <div class="container">
                            <h3 class="text-2xl">Blade Runner</h3>
                        </div>
                        <div class="container">
                            <small>2013 | 89 min | Drama</small>
                        </div>
                        <div class="flex flex-row">
                            <div class="container w-3/4">
                                <div class="mt-6 text-xs">
                                    <p>Directed by: John Doe</p>
                                </div>
                                <div class="mt-2 text-xs">
                                    <p>IMDB Rating: 9.5</p>
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

            <!-- MOVIECARD -->
            <div class="mc-3 mt-5 ml-4 rounded-xl">
                <div class="container flex flex-col w-60">
                    <div class="container">
                        <img src="@/assets/samplemovie.jpg" class="object-cover rounded-t-xl">
                    </div>
                    <div class="container p-5">
                        <div class="container">
                            <h3 class="text-2xl">Blade Runner</h3>
                        </div>
                        <div class="container">
                            <small>2013 | 89 min | Drama</small>
                        </div>
                        <div class="flex flex-row">
                            <div class="container w-3/4">
                                <div class="mt-6 text-xs">
                                    <p>Directed by: John Doe</p>
                                </div>
                                <div class="mt-2 text-xs">
                                    <p>IMDB Rating: 9.5</p>
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

            <!-- MOVIECARD -->
            <div class="mc-3 mt-5 ml-4 rounded-xl">
                <div class="container flex flex-col w-60">
                    <div class="container">
                        <img src="@/assets/samplemovie.jpg" class="object-cover rounded-t-xl">
                    </div>
                    <div class="container p-5">
                        <div class="container">
                            <h3 class="text-2xl">Blade Runner</h3>
                        </div>
                        <div class="container">
                            <small>2013 | 89 min | Drama</small>
                        </div>
                        <div class="flex flex-row">
                            <div class="container w-3/4">
                                <div class="mt-6 text-xs">
                                    <p>Directed by: John Doe</p>
                                </div>
                                <div class="mt-2 text-xs">
                                    <p>IMDB Rating: 9.5</p>
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

            <!-- MOVIECARD -->
            <div class="mc-3 mt-5 ml-4 rounded-xl">
                <div class="container flex flex-col w-60">
                    <div class="container">
                        <img src="@/assets/samplemovie.jpg" class="object-cover rounded-t-xl">
                    </div>
                    <div class="container p-5">
                        <div class="container">
                            <h3 class="text-2xl">Blade Runner</h3>
                        </div>
                        <div class="container">
                            <small>2013 | 89 min | Drama</small>
                        </div>
                        <div class="flex flex-row">
                            <div class="container w-3/4">
                                <div class="mt-6 text-xs">
                                    <p>Directed by: John Doe</p>
                                </div>
                                <div class="mt-2 text-xs">
                                    <p>IMDB Rating: 9.5</p>
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

            <!-- MOVIECARD -->
            <div class="mc-3 mt-5 ml-4 rounded-xl">
                <div class="container flex flex-col w-60">
                    <div class="container">
                        <img src="@/assets/samplemovie.jpg" class="object-cover rounded-t-xl">
                    </div>
                    <div class="container p-5">
                        <div class="container">
                            <h3 class="text-2xl">Blade Runner</h3>
                        </div>
                        <div class="container">
                            <small>2013 | 89 min | Drama</small>
                        </div>
                        <div class="flex flex-row">
                            <div class="container w-3/4">
                                <div class="mt-6 text-xs">
                                    <p>Directed by: John Doe</p>
                                </div>
                                <div class="mt-2 text-xs">
                                    <p>IMDB Rating: 9.5</p>
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

            <!-- MOVIECARD -->
            <div class="mc-3 mt-5 ml-4 rounded-xl">
                <div class="container flex flex-col w-60">
                    <div class="container">
                        <img src="@/assets/samplemovie.jpg" class="object-cover rounded-t-xl">
                    </div>
                    <div class="container p-5">
                        <div class="container">
                            <h3 class="text-2xl">Blade Runner</h3>
                        </div>
                        <div class="container">
                            <small>2013 | 89 min | Drama</small>
                        </div>
                        <div class="flex flex-row">
                            <div class="container w-3/4">
                                <div class="mt-6 text-xs">
                                    <p>Directed by: John Doe</p>
                                </div>
                                <div class="mt-2 text-xs">
                                    <p>IMDB Rating: 9.5</p>
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

            <!-- MOVIECARD -->
            <div class="mc-3 mt-5 ml-4 rounded-xl">
                <div class="container flex flex-col w-60">
                    <div class="container">
                        <img src="@/assets/samplemovie.jpg" class="object-cover rounded-t-xl">
                    </div>
                    <div class="container p-5">
                        <div class="container">
                            <h3 class="text-2xl">Blade Runner</h3>
                        </div>
                        <div class="container">
                            <small>2013 | 89 min | Drama</small>
                        </div>
                        <div class="flex flex-row">
                            <div class="container w-3/4">
                                <div class="mt-6 text-xs">
                                    <p>Directed by: John Doe</p>
                                </div>
                                <div class="mt-2 text-xs">
                                    <p>IMDB Rating: 9.5</p>
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

            <!-- MOVIECARD -->
            <div class="mc-3 mt-5 ml-4 rounded-xl">
                <div class="container flex flex-col w-60">
                    <div class="container">
                        <img src="@/assets/samplemovie.jpg" class="object-cover rounded-t-xl">
                    </div>
                    <div class="container p-5">
                        <div class="container">
                            <h3 class="text-2xl">Blade Runner</h3>
                        </div>
                        <div class="container">
                            <small>2013 | 89 min | Drama</small>
                        </div>
                        <div class="flex flex-row">
                            <div class="container w-3/4">
                                <div class="mt-6 text-xs">
                                    <p>Directed by: John Doe</p>
                                </div>
                                <div class="mt-2 text-xs">
                                    <p>IMDB Rating: 9.5</p>
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

            <!-- MOVIECARD -->
            <div class="mc-3 mt-5 ml-4 rounded-xl">
                <div class="container flex flex-col w-60">
                    <div class="container">
                        <img src="@/assets/samplemovie.jpg" class="object-cover rounded-t-xl">
                    </div>
                    <div class="container p-5">
                        <div class="container">
                            <h3 class="text-2xl">Blade Runner</h3>
                        </div>
                        <div class="container">
                            <small>2013 | 89 min | Drama</small>
                        </div>
                        <div class="flex flex-row">
                            <div class="container w-3/4">
                                <div class="mt-6 text-xs">
                                    <p>Directed by: John Doe</p>
                                </div>
                                <div class="mt-2 text-xs">
                                    <p>IMDB Rating: 9.5</p>
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
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchMovie'
}
</script>

<style>

</style>