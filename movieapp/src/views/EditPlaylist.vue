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
            <form type="submit">
                <label for="playlist_name" class="block mt-4">Playlist Name: </label>
                <input name="playlist_name" type="text" placeholder="enter playlist name..." class="block mt-4 h-9 p-3 rounded-xl text-black" style="width: 100%">
                <label for="playlist_description" class="block mt-4">Playlist Description: </label>
                <textarea name="playlist_description" placeholder="describe your playlist..." class="block mt-4 h-9 p-3 rounded-md text-black" style="width: 100%; height: 20%"></textarea>
                <label for="movie_list" class="block mt-4">Movies List: </label>

                <button class="rounded-lg mc-button p-2 mt-4 block">Add a movie</button>

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
                            <tr class="spaceUnder">
                                <td>1.</td>
                                <td>Lorem ipsum dolor sit</td>
                                <td>
                                    <button class="rounded-lg mc-button p-2 block m-auto" type="submit">Remove from playlist</button>
                                </td>
                            </tr>
                            <tr class="spaceUnder">
                                <td>2.</td>
                                <td>Lorem ipsum dolor sit</td>
                                <td>
                                    <button class="rounded-lg mc-button p-2 block m-auto" type="submit">Remove from playlist</button>
                                </td>
                            </tr>
                            <tr class="spaceUnder"> 
                                <td>3.</td>
                                <td>Lorem ipsum dolor sit</td>
                                <td>
                                    <button class="rounded-lg mc-button p-2 block m-auto" type="submit">Remove from playlist</button>
                                </td>
                            </tr>
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
export default {
    name: 'EditPlaylist'
}
</script>

<style>

</style>