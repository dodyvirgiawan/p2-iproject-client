import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { 
        path: '/login', 
        name: 'Login', 
        component: () => import('../views/Login.vue')
    },
    { 
        path: '/register', 
        name: 'Register', 
        component: () => import('../views/Register.vue')
    },
    { 
        path: '/', 
        component: () => import('../views/AppTemplate.vue'),
        children: [
            { 
                path: '/', 
                name: 'Home', 
                component: () => import('../views/Homepage.vue')
            },
            { 
                path: 'movies', 
                name: 'SearchMovie', 
                component: () => import('../views/SearchMovie.vue')
            },
            {
                path: 'movies/addtoplaylist',
                name: 'AddToPlaylist',
                component: () => import('../views/AddToPlaylist.vue')
            },
            {
                path: 'movies/createplaylist',
                name: 'CreatePlaylist',
                component: () => import('../views/CreatePlaylist.vue')
            },
            { 
                path: 'playlist', 
                name: 'Playlist', 
                component: () => import('../views/UserPlaylist.vue')
            },
            {
                path: 'playlist/edit/:id',
                name: 'EditPlaylist',
                component: () => import('../views/EditPlaylist.vue')
            },
            {
                path: 'playlist/addmovie/:id',
                name: 'AddMovie',
                component: () => import('../views/AddMovie.vue')
            },
            {
                path: 'playlist/:id',
                name: 'PlaylistDetail',
                component: () => import('../views/PlaylistDetail.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    const access_token = localStorage.getItem('access_token')

    switch(to.name) {
        case 'Login':
        case 'Register':
            access_token ? next({name: 'Home'}) : next()
            break
        case 'AppTemplate':
        case 'Home':
        case 'SearchMovie':
        case 'AddToPlaylist':
        case 'CreatePlaylist':
        case 'Playlist':
        case 'EditPlaylist':
        case 'AddMovie':
        case 'PlaylistDetail':
            access_token ? next() : next({name: 'Login'})
            break
    }
})

export default router
