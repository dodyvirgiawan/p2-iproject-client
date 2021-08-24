<template>
    <div>
        <router-link :to="{ name: 'PlaylistDetail', params: { id: playlist.id } }" class="flex flex-col p-6 mc-3 mt-5 rounded-3xl playlist-display-card">
            <!-- Title -->
            <div class="container">
                <h4 class="text-2xl">{{ playlist.title }}</h4>
            </div>

            <!-- Posted by -->
            <div class="container">
                <small>Posted {{ countDays }} by {{ authorName }}</small>
            </div>

            <div class="container mt-3">
                <hr style="opacity: 10%">
            </div>

            <!-- Description -->
            <div class="container mt-4">
                <p class="text-md p-2">{{ playlist.description }}</p>
            </div>

            <!-- Movies in this playlist -->
            <div class="container mt-4">
                <p class="mc-1 p-3 rounded-lg">Movies in this playlist: {{ formattedMovies }}</p>
            </div>
        </router-link>

        <!-- Edit Button -->
        <div class="container" v-if="type === 'owner'">
            <button class="rounded-lg mc-button p-2 ml-3 mt-3 block" @click="editPlaylist">Edit this Playlist</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PlaylistDisplayCard',
    props: ['playlist', 'type'],
    computed: {
        countDays() {
            const oneDay = 24 * 60 * 60 * 1000
            const today = new Date()
            const postedDay = new Date(this.playlist.createdAt)
            const output = Math.round(Math.abs((postedDay - today) / oneDay))

            if(output === 0) return 'today'
            else if(output === 1) return `${output} day ago`
            else return `${output} days ago`
        },

        formattedMovies() {
            const movies = this.playlist.Movies
            let formattedMovies = ''

            movies.forEach((movie, idx) => {
                formattedMovies += movie.title
                formattedMovies += idx === movies.length - 1 ? '' : ', '
            })

            return formattedMovies
        },

        authorName() {
            return this.type === 'owner' ? 'you' : `${this.playlist.author.first_name} ${this.playlist.author.last_name}`
        }
    },
    methods: {
        editPlaylist() {
            this.$router.push(`/playlist/edit/${this.playlist.id}`)
        }
    }
}
</script>

<style>

</style>