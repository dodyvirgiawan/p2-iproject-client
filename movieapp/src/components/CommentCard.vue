<template>
    <div class="md:flex md:flex-row p-6 mc-3 mt-5 rounded-2xl">
        <!-- Commenter's Name -->
        <div class="container md:w-1/4 flex flex-col">
            <div class="flex flex-row p-1 mc-3 rounded-xl">
                <div class="container m-auto w-1/4">
                    <img :src="`https://avatars.dicebear.com/api/bottts/${comment.author.first_name}${comment.author.last_name}.svg`" class="block w-11 mx-auto">
                </div>
                <div class="container m-auto w-3/4 ml-3">
                    <h5>{{ comment.author.first_name }} {{ comment.author.last_name }}</h5>
                    <small>{{ countDays }}</small>
                </div>
            </div>
        </div>

        <!-- The Actual Comment -->
        <div class="container md:w-3/4 p-2 md:ml-4 rounded-xl">
            <p class="text-sm">
                {{ comment.comment }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentCard',
    props: ['comment'],
    computed: {
        countDays() {
            const oneDay = 24 * 60 * 60 * 1000
            const today = new Date()

            const postedDay = new Date(this.comment.createdAt)
            const output = Math.round(Math.abs((postedDay - today) / oneDay))

            if(output === 0) return 'today'
            else if(output === 1) return `${output} day ago`
            else return `${output} days ago`
        }
    }
}
</script>

<style>

</style>