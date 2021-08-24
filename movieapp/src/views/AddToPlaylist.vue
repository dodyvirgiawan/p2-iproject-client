<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">Add to your playlist</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- Content -->
        <div class="container flex flex-row mt-4">
            <div class="container">
                <label for="playlist_name" class="block mt-8">Select from your current playlist: </label>

                <select class="block mt-4 rounded-md mc-button p-3">
                    <option class="text-black">Lorem ipsum dolor sit amet</option>
                    <option class="text-black">Lorem, ipsum dolor.</option>
                    <option class="text-black">Lorem ipsum dolor sit.</option>
                    <option class="text-black">Lorem ipsum dolor sit amet.</option>
                    <option class="text-black">Lorem, ipsum dolor.</option>
                </select>

                <label for="playlist_description" class="block mt-16">Or create a new playlist:</label>
                <button class="rounded-lg mc-button p-2 block mt-4" type="submit">Create new playlist</button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'AddToPlaylist'
}
</script>

<style>

</style>