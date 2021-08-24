<template>
    <!-- OnlineUserCard -->
    <div class="container text-white mc-3 rounded-xl p-2 mt-5">
        <div class="flex flex-row p-1">
            <div class="container m-auto w-1/4">
                <img :src="`https://avatars.dicebear.com/api/bottts/${user}.svg`" class="block w-8 mx-auto">
            </div>
            <div class="container m-auto w-3/4 ml-3">
                <h3 class="text-l">
                    {{ user }}
                </h3>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACFElEQVRIS71Vy23bQBScRzg5p4M4MHWJ14hVgZ0OnApCqQFTFUSuIHQDXqaCKBXEqcA0TOQiCqA6yN0Cn/FWpLhL8+MAURbgZXc58z7zZgl7XrRnfAwSTNNRUKA4I9ApAPlkJQxOiGihj7MffUF2EgS/jy6owFeADvuz5Jw9zOL3q0XbvVaCSXoUAXRZ/rAmICpAt7FaJrIXpKNTD3zOQAjgrewxEMUqmzVJnhHY4ATMblQW9WUwTf2QIZkammutVkK6Ww7Btiz0fRsRjauIh4QgGRH4zvzn8Se7XA7BJPVzSfklkTdJ60w412r1rjrfEYhaGKwBrLXKBhoLBHeHb/D64DI+zq4qsCpAO4sdwSQdxQB/fkn0Ak6vDn6KbIlxdXOSzYWkzoK+abUMZM8i8EUhH4Zqb4MDuOfHzXk8zv9U6ip7kWiVjZsELBtaZXXZHvx5sdlEOwAr8ia4VSYHx87AOZg++HMmfDFT+7j5aKIpy9IFLncmqd9J4JSoLMWtlE1IygjFKpyy2Gqy5HqvVWZspbfJDRK53wk+2OR6yFwdWySwG9o2fL0yLevXOmhG8wCqZreBW5bhzNH/tYptFrWTMlMYnyyv/5nZ1Vq27ZpzZi8C4Zdt12CcERVh/V48d1JHRc0oy6aLVRu/71lr9jj8qwfH0baxcO8CYNG1zISRK0AJe8WiC7jCGHyTB6IfPN47wRNVpUcoDQ0KMAAAAABJRU5ErkJggg=="/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OnlineUserCard',
    props: ['user']
}
</script>

<style>

</style>