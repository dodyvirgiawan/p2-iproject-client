<template>
    <div class="container m-auto flex flex-grow mt-24" style="height: 80vh">
        <div class="container mx-auto flex flex-row justify-center">
            <div class="container w-1/4 mc-1 rounded-l-3xl">
                <!-- Sidebar -->
                <Sidebar></Sidebar>

            </div>

            <div class="container w-3/4 mc-2 rounded-r-3xl p-12 text-white" style="overflow: auto;">

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