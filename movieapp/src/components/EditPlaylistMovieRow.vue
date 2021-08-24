<template>
    <tr class="spaceUnder">
        <td>{{ idx + 1}}.</td>
        <td>{{ movie.title }}</td>
        <td>
            <button class="rounded-lg mc-button p-2 block m-auto" @click.prevent="removeMovieFromPlaylist">Remove from playlist</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'EditPlaylistMovieRow',
    props: ['movie', 'idx'],
    methods: {
        removeMovieFromPlaylist() {
            const payload = {
                movieId: this.movie.id,
                playlistId: this.$route.params.id
            }

            this.$store.dispatch('removeMovieFromPlaylist', payload)
        }
    }
}
</script>

<style>

</style>