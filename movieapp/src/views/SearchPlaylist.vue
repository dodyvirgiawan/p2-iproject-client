<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">Search Playlist</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- Content -->
        <ais-instant-search :search-client="searchClient" index-name="cineclub" class="text-black mc-4 rounded-xl p-5">
            <ais-configure
                :hits-per-page.camel="5"
            />
            <div class="container flex flex-col">
                <div class="container mt-2">
                    <ais-powered-by
                        theme="dark"
                    />
                </div>

                <div class="container mt-2">
                    <ais-search-box class="rounded-xl"></ais-search-box>
                </div>

                <div class="container mt-4">
                    <ais-hits >
                        <div slot="item" slot-scope="{ item }" class="mc-3 p-4 rounded-xl">
                            <router-link :to="{ name: 'PlaylistDetail', params: { id: item.objectID } }">
                                <h2 class="text-xl">
                                    <ais-highlight
                                        attribute="title"
                                        :hit="item"
                                        highlightedTagName="mark"
                                    />
                                </h2>
                                <p class="">
                                    <ais-snippet
                                        attribute="description"
                                        :hit="item"
                                        highlightedTagName="mark"
                                    />
                                </p>
                            </router-link>
                        </div>
                    </ais-hits>
                </div>
            </div>
        </ais-instant-search>


    </div>
</template>

<script>
import algoliasearch from 'algoliasearch/lite'
import 'instantsearch.css/themes/satellite-min.css'

const algoliaAppId = process.env.VUE_APP_ALGOLIA_APPLICATION_ID
const searchApiKey = process.env.VUE_APP_ALGOLIA_SEARCH_API_KEY

export default {
    name: 'SearchPlaylist',
    data: function() {
        return {
            searchClient: algoliasearch(
                algoliaAppId,
                searchApiKey
            )
        }
    }
}
</script>

<style>

</style>