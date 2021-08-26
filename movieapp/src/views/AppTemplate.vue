<template>
    <div class="container m-auto md:flex md:flex-grow md:mt-24" style="height: 80vh">
        <div class="container mx-auto md:flex md:flex-row justify-center">
            <div class="container md:w-1/4 mc-1 sm:rounded-l-3xl" style="overflow: auto;">
                <!-- Sidebar -->
                <Sidebar></Sidebar>

            </div>

            <div class="container md:w-3/4 mc-2 sm:rounded-r-3xl p-5 md:p-12 text-white" style="overflow: auto;">

                <router-view/>

            </div>
        </div>
    </div>

</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
    name: 'AppTemplate',
    components: {
        Sidebar
    }
}
</script>

<style>

</style>