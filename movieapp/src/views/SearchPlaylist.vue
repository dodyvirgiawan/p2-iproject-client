<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">Search Playlist</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- Algolia Search -->
        <div class="container mt-9">
            <ais-instant-search ais-instant-search :search-client="searchClient" index-name="cineclub" class="text-black mc-ais rounded-xl p-5">
                <ais-configure
                    :hits-per-page.camel="4"
                />
            
                <div class="container md:flex md:flex-row">

                    <div class="container md:w-1/5">
                        <ais-refinement-list
                            attribute="Movies.genre"
                            :limit="3"
                            :show-more="true"
                            :show-more-limit="6"
                            searchable
                            searchable-placeholder="search filter..."
                            :sort-by="['isRefined', 'count:desc']"
                            :class-names="{
                                'ais-RefinementList': 'mc-refinement',
                                'ais-RefinementList-labelText': 'mc-labeltext'
                            }"
                        />
                    </div>

                    <div class="container mt-4 md:w-4/5 md:ml-4">
                        <ais-search-box 
                            placeholder="Search awesome movie playlist here..."
                            :autofocus="true"
                        />

                        <div class="container mt-4">
                            <ais-hits
                                :class-names="{
                                    'ais-Hits-item': 'mc-hits-item',
                                    'ais-Hits': 'mc-hits',
                                    'ais-Hits-list': 'mc-hits-list'
                                }"
                            >
                                <div slot="item" slot-scope="{ item }" class="mc-ais p-4 rounded-xl">
                                    <router-link :to="{ name: 'PlaylistDetail', params: { id: item.objectID } }">
                                        <h2 class="text-xl">
                                            <ais-highlight
                                                attribute="title"
                                                :hit="item"
                                                highlightedTagName="mark"
                                                :class-names="{
                                                    'ais-Highlight': 'mc-highlight'
                                                }"
                                            />
                                        </h2>
                                        <hr class="border-gray-500" style="opacity: 50%;">
                                        <p class="mt-2 mc-3 p-3 text-black rounded-xl">
                                            <ais-snippet
                                                attribute="description"
                                                :hit="item"
                                                highlightedTagName="mark"
                                            />...
                                        </p>
                                    </router-link>
                                </div>
                            </ais-hits>
                        </div>
                    </div>

                </div>
            </ais-instant-search>

            <div class="container mt-2 align-items-right">
                <ais-powered-by
                    theme="dark"
                />
            </div>
        </div>

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