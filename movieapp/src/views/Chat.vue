<template>
    <div class="flex flex-col">
        <!-- Title -->
        <div class="container">
            <h1 class="text-4xl">Chat lounge</h1>
        </div>

        <div class="container mt-5">
            <hr style="opacity: 10%">
        </div>

        <!-- Content -->
        <div class="container m-auto flex flex-grow mt-5" style="height: 60vh">
            <div class="container mx-auto flex flex-row justify-center">

                <!-- Chat Sidebar (Online User) -->
                <div class="container w-1/4 mc-1 rounded-tl-3xl p-5" style="overflow: auto;">
                    <div class="container">
                        <h1 class="text-xl text-center">Online Cinephiles</h1>
                    </div>

                    <div class="container mt-5 mb-7">
                        <hr style="opacity: 10%">
                    </div>

                    <!-- OnlineUserCard -->
                    <div class="container text-white mc-3 rounded-xl p-2 mt-5">
                        <div class="flex flex-row p-1">
                            <div class="container m-auto w-1/4">
                                <img :src="`https://avatars.dicebear.com/api/bottts/johndoe.svg`" class="block w-8 mx-auto">
                            </div>
                            <div class="container m-auto w-3/4 ml-3">
                                <h3 class="text-l">John Doe</h3>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACFElEQVRIS71Vy23bQBScRzg5p4M4MHWJ14hVgZ0OnApCqQFTFUSuIHQDXqaCKBXEqcA0TOQiCqA6yN0Cn/FWpLhL8+MAURbgZXc58z7zZgl7XrRnfAwSTNNRUKA4I9ApAPlkJQxOiGihj7MffUF2EgS/jy6owFeADvuz5Jw9zOL3q0XbvVaCSXoUAXRZ/rAmICpAt7FaJrIXpKNTD3zOQAjgrewxEMUqmzVJnhHY4ATMblQW9WUwTf2QIZkammutVkK6Ww7Btiz0fRsRjauIh4QgGRH4zvzn8Se7XA7BJPVzSfklkTdJ60w412r1rjrfEYhaGKwBrLXKBhoLBHeHb/D64DI+zq4qsCpAO4sdwSQdxQB/fkn0Ak6vDn6KbIlxdXOSzYWkzoK+abUMZM8i8EUhH4Zqb4MDuOfHzXk8zv9U6ip7kWiVjZsELBtaZXXZHvx5sdlEOwAr8ia4VSYHx87AOZg++HMmfDFT+7j5aKIpy9IFLncmqd9J4JSoLMWtlE1IygjFKpyy2Gqy5HqvVWZspbfJDRK53wk+2OR6yFwdWySwG9o2fL0yLevXOmhG8wCqZreBW5bhzNH/tYptFrWTMlMYnyyv/5nZ1Vq27ZpzZi8C4Zdt12CcERVh/V48d1JHRc0oy6aLVRu/71lr9jj8qwfH0baxcO8CYNG1zISRK0AJe8WiC7jCGHyTB6IfPN47wRNVpUcoDQ0KMAAAAABJRU5ErkJggg=="/>
                            </div>
                        </div>
                    </div>

                    <!-- OnlineUserCard -->
                    <div class="container text-white mc-3 rounded-xl p-2 mt-5">
                        <div class="flex flex-row p-1">
                            <div class="container m-auto w-1/4">
                                <img :src="`https://avatars.dicebear.com/api/bottts/amymay.svg`" class="block w-8 mx-auto">
                            </div>
                            <div class="container m-auto w-3/4 ml-3">
                                <h3 class="text-l">Amy May</h3>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACFElEQVRIS71Vy23bQBScRzg5p4M4MHWJ14hVgZ0OnApCqQFTFUSuIHQDXqaCKBXEqcA0TOQiCqA6yN0Cn/FWpLhL8+MAURbgZXc58z7zZgl7XrRnfAwSTNNRUKA4I9ApAPlkJQxOiGihj7MffUF2EgS/jy6owFeADvuz5Jw9zOL3q0XbvVaCSXoUAXRZ/rAmICpAt7FaJrIXpKNTD3zOQAjgrewxEMUqmzVJnhHY4ATMblQW9WUwTf2QIZkammutVkK6Ww7Btiz0fRsRjauIh4QgGRH4zvzn8Se7XA7BJPVzSfklkTdJ60w412r1rjrfEYhaGKwBrLXKBhoLBHeHb/D64DI+zq4qsCpAO4sdwSQdxQB/fkn0Ak6vDn6KbIlxdXOSzYWkzoK+abUMZM8i8EUhH4Zqb4MDuOfHzXk8zv9U6ip7kWiVjZsELBtaZXXZHvx5sdlEOwAr8ia4VSYHx87AOZg++HMmfDFT+7j5aKIpy9IFLncmqd9J4JSoLMWtlE1IygjFKpyy2Gqy5HqvVWZspbfJDRK53wk+2OR6yFwdWySwG9o2fL0yLevXOmhG8wCqZreBW5bhzNH/tYptFrWTMlMYnyyv/5nZ1Vq27ZpzZi8C4Zdt12CcERVh/V48d1JHRc0oy6aLVRu/71lr9jj8qwfH0baxcO8CYNG1zISRK0AJe8WiC7jCGHyTB6IfPN47wRNVpUcoDQ0KMAAAAABJRU5ErkJggg=="/>
                            </div>
                        </div>
                    </div>

                    <!-- OnlineUserCard -->
                    <div class="container text-white mc-3 rounded-xl p-2 mt-5">
                        <div class="flex flex-row p-1">
                            <div class="container m-auto w-1/4">
                                <img :src="`https://avatars.dicebear.com/api/bottts/rachelgreene.svg`" class="block w-8 mx-auto">
                            </div>
                            <div class="container m-auto w-3/4 ml-3">
                                <h3 class="text-l">Rachel Greene</h3>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACFElEQVRIS71Vy23bQBScRzg5p4M4MHWJ14hVgZ0OnApCqQFTFUSuIHQDXqaCKBXEqcA0TOQiCqA6yN0Cn/FWpLhL8+MAURbgZXc58z7zZgl7XrRnfAwSTNNRUKA4I9ApAPlkJQxOiGihj7MffUF2EgS/jy6owFeADvuz5Jw9zOL3q0XbvVaCSXoUAXRZ/rAmICpAt7FaJrIXpKNTD3zOQAjgrewxEMUqmzVJnhHY4ATMblQW9WUwTf2QIZkammutVkK6Ww7Btiz0fRsRjauIh4QgGRH4zvzn8Se7XA7BJPVzSfklkTdJ60w412r1rjrfEYhaGKwBrLXKBhoLBHeHb/D64DI+zq4qsCpAO4sdwSQdxQB/fkn0Ak6vDn6KbIlxdXOSzYWkzoK+abUMZM8i8EUhH4Zqb4MDuOfHzXk8zv9U6ip7kWiVjZsELBtaZXXZHvx5sdlEOwAr8ia4VSYHx87AOZg++HMmfDFT+7j5aKIpy9IFLncmqd9J4JSoLMWtlE1IygjFKpyy2Gqy5HqvVWZspbfJDRK53wk+2OR6yFwdWySwG9o2fL0yLevXOmhG8wCqZreBW5bhzNH/tYptFrWTMlMYnyyv/5nZ1Vq27ZpzZi8C4Zdt12CcERVh/V48d1JHRc0oy6aLVRu/71lr9jj8qwfH0baxcO8CYNG1zISRK0AJe8WiC7jCGHyTB6IfPN47wRNVpUcoDQ0KMAAAAABJRU5ErkJggg=="/>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- The Chat -->
                <div class="container w-3/4 mc-2 rounded-tr-3xl p-6 text-white" style="overflow: auto;">
                    
                    <div class="container flex flex-col">
                        <!-- Chat from user -->
                        <div class="container flex flex-row mt-5">
                            <div class="container w-12">
                                <img :src="`https://avatars.dicebear.com/api/bottts/johndoe.svg`" class="block w-8">
                            </div>

                            <div class="container flex flex-col w-4/5">
                                <div class="container">
                                    <h3 class="text-sm ml-2">John Doe</h3>
                                </div>
                                <div class="container p-2 mt-2 rounded-xl mc-user-chat max-w-md">
                                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus culpa fuga, provident animi repudiandae modi laborum dolorum, quo deserunt, ut ipsum libero in minima! Doloribus omnis enim error? Hic provident, assumenda est, illo odit numquam magni sunt quod eveniet nisi nobis tempora nemo.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Chat from other user -->
                        <div class="container flex flex-row mt-5 justify-end">
                           
                            <div class="flex flex-col mr-5">
                                <div class="container">
                                    <h3 class="text-sm ml-2 text-right">Rachel Greene</h3>
                                </div>
                                <div class="container p-2 mt-2 rounded-xl mc-other-chat max-w-md">
                                    <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quo ducimus soluta ullam incidunt quos veritatis cumque minus sed distinctio qui nemo maxime, alias atque at magnam? Fuga, odit maxime.</p>
                                </div>
                            </div>

                             <div class="container w-12">
                                <img :src="`https://avatars.dicebear.com/api/bottts/rachelgreene.svg`" class="block w-8">
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="container flex flex-row justify-end mr-5 mc-1 p-5 rounded-b-3xl">
            <input autocomplete="off" type="text" placeholder="type here to chat..." class="h-9 p-3 rounded-xl text-black w-3/5">
            <button class="rounded-full items-center p-2 mc-button my-auto block ml-5">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABtElEQVRIS72VwXHCMBBF/4oLzsHCFQQ6IBWEDqCDpAPoAFJBTAfQAemAVBDSAVQgzGQgF7QZ2bLHNjZ4HMBn+b/d/asvwo0/urE+7gvY73YrYpYgmjiuO79Gd5kO9kGwJUBa4TWA2a/WU8/ztnVhecCCgD4DQQxiwED9uqA8YETAO4A5tJ6ZUYHo2VRvQQto/eZ4numu0pcB/CjVbQjxBWDtSNkxCgeleiyEAfdTirOqoJMtSnzQupOu9KBUG0JMALzEIGJeMPPU8bxlWTtFgNAHEC1xPJpxZH6OQQwMkoUoOWugRYDYh6iokp+VUq2mECMGzPlw8whYMZGfXvETQMqHbNcXQABeATzGoKaUT4UdlAKYP8E8yY/MdjK0gHa4cUTfD67brTaiC8J2RK1Y2NwZx3VnySLk3d8HQWRyibA1eWxNDoXLzpZ1EMVF8ZqO7SgiXeCDtPYrr2lq/htHynCe5qIR0ZCJBqluzU03fly80eejotEYg7lnqzX5ZKKiknChB/H8be5ExkXBZ8LOr5Oq5+J6Y+O6lnBxB9GD07IPTrJqlWKz5NB9n8z/VFo5Ta8N+QNUs/0ZzvlJrAAAAABJRU5ErkJggg=="/>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chat'
}
</script>

<style>

</style>