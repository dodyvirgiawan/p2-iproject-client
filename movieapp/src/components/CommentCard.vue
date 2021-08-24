<template>
    <div class="flex flex-row p-6 mc-3 mt-5 rounded-2xl">
        <!-- Commenter's Name -->
        <div class="container w-1/4 flex flex-col">
            <h5>{{ comment.author.first_name }} {{ comment.author.last_name }}</h5>
            <small>{{ countDays }}</small>
        </div>

        <!-- The Actual Comment -->
        <div class="container w-3/4">
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
            else return `${output} day(s) ago`
        }
    }
}
</script>

<style>

</style>