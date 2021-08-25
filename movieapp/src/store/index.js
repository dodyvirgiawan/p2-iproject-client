import Vue from 'vue'
import Vuex from 'vuex'
import Toast from "vue-toastification"
import router from '../router'

import cineclubApi from '../apis/cineclubApi.js'
import omdbApi from '../apis/omdbApi.js'
import tmdbApi from '../apis/tmdbApi.js'

import "vue-toastification/dist/index.css"

const toastOptions = {
    position: "top-center",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
  }

Vue.use(Toast, {
    transition: "Vue-Toastification__fade",
    maxToasts: 20,
    newestOnTop: true,
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: '',
        loggedInUserInfo: {},
        playlists: [],
        loggedInUserPlaylists: [],
        viewedPlaylist: {},
        searchedMovies: [],
        selectedMovie: {},
        chatMessages: [],
        loggedInChatUsers: [],
        trendingMovies: []
    },
    mutations: {
        SET_IS_LOGGED_IN(state, payload) {
            state.isLoggedIn = payload
        },

        SET_LOGGED_IN_USER_INFO(state, payload) {
            state.loggedInUserInfo = payload
        },

        SET_PLAYLISTS(state, payload) {
            state.playlists = payload
        },

        SET_LOGGED_IN_USER_PLAYLISTS(state, payload) {
            state.loggedInUserPlaylists = payload
        },

        SET_VIEWED_PLAYLIST(state, payload) {
            state.viewedPlaylist = payload
        },

        SET_SEARCHED_MOVIES(state, payload) {
            state.searchedMovies.push(payload)
        },

        RESET_SEARCHED_MOVIES(state) {
            state.searchedMovies = []
        },

        SET_SELECTED_MOVIE(state, payload) {
            state.selectedMovie = payload
        },

        SET_CHAT_MESSAGES(state, payload) {
            state.chatMessages = payload
        },

        SET_LOGGED_IN_CHAT_USERS(state, payload) {
            state.loggedInChatUsers = payload
        },

        SET_TRENDING_MOVIES(state, payload) {
            state.trendingMovies = payload
        }
    },
    actions: {
        async doRegister(context, payload) {
            try {
                await cineclubApi({
                    method: 'POST',
                    url: '/register',
                    data: {
                        first_name: payload.first_name,
                        last_name: payload.last_name,
                        email: payload.email,
                        password: payload.password
                    }
                })
                
                Vue.$toast.success("Successfully registered! Please proceed to login!", toastOptions)
                router.push('/login')
            } catch (err) {
                let errorMessages = ''

                if(Array.isArray(err.response.data.message)) {
                    err.response.data.message.forEach((el, idx) => {
                        errorMessages += `${el}`
                        errorMessages += idx === err.response.data.message.length - 1 ? '' : ',\n'
                    })
                } else {
                    errorMessages = err.response.data.message
                }

                Vue.$toast.error(errorMessages, toastOptions)
            }
        },

        async doLogin(context, payload) {
            try {
                const response = await cineclubApi({
                    method: 'POST',
                    url: '/login',
                    data: {
                        email: payload.email,
                        password: payload.password
                    }
                })
                
                localStorage.setItem('access_token', response.data.access_token)
                context.commit('SET_IS_LOGGED_IN', true)
                context.dispatch('getLoggedInUserInfo')

                Vue.$toast.success("Successfully logged in! Welcome to Cineclub!", toastOptions)
                router.push('/')
            } catch (err) {
                Vue.$toast.error(err.response.data.message)
            }
        },

        async googleLogin(context, payload) {
            try {
                const id_token = payload.getAuthResponse().id_token;

                const response = await cineclubApi({
                    method: 'POST',
                    url: '/auth/google',
                    data: { id_token }
                })

                localStorage.setItem('access_token', response.data.access_token)
                context.commit('SET_IS_LOGGED_IN', true)
                context.dispatch('getLoggedInUserInfo')

                Vue.$toast.success("Successfully logged in! Welcome to Cineclub!", toastOptions)
                router.push('/')
            } catch (err) {
                Vue.$toast.error(err.response.data.message)
            }
        },

        async getLoggedInUserInfo(context) {
            try {
                const response = await cineclubApi({
                    method: 'GET',
                    url: '/user',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                context.commit('SET_LOGGED_IN_USER_INFO', response.data)
            } catch (err) {
                Vue.$toast.error(err.response.data.message)
            }
        },

        async fetchPlaylists(context) {
            try {
                const response = await cineclubApi({
                    method: 'GET',
                    url: '/playlists',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                context.commit('SET_PLAYLISTS', response.data)
            } catch (err) {
                Vue.$toast.error(err.response.data.message)
            }
        },

        async fetchPlaylistById(context, payload) {
            try {
                const playlistId = payload

                const response = await cineclubApi({
                    method: 'GET',
                    url: `/playlists/${playlistId}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                context.commit('SET_VIEWED_PLAYLIST', response.data)
            } catch (err) {
                Vue.$toast.error(err.response.data.message)
            }
        },

        async fetchLoggedInUserPlaylist(context) {
            try {
                const response = await cineclubApi({
                    method: 'GET',
                    url: '/playlists/user',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })
                
                context.commit('SET_LOGGED_IN_USER_PLAYLISTS', response.data)
            } catch (err) {
                Vue.$toast.error(err.response.data.message)
            }
        },

        async addCommentToPlaylist(context, payload) {
            try {
                const response = await cineclubApi({
                    method: 'POST',
                    url: `/playlists/${payload.playlistId}/comments`,
                    data: {
                        comment: payload.comment
                    },
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                Vue.$toast.success(response.data.message, toastOptions)
                context.dispatch('fetchPlaylistById', payload.playlistId)
            } catch (err) {
                Vue.$toast.error(err.response.data.message, toastOptions)
            }
        },

        async createPlaylist(context, payload) {
            try {
                const response = await cineclubApi({
                    method: 'POST',
                    url: '/playlists',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                    data: {
                        playlist_title: payload.playlist.title,
                        playlist_description: payload.playlist.description,
                        movie_title: payload.movie.title,
                        movie_genre: payload.movie.genre,
                        movie_runtime: payload.movie.runtime.split(' ')[0], // From OMDB Api is xx min. Want to get only the number
                        movie_director: payload.movie.director,
                        movie_imdbRating: payload.movie.imdbRating,
                        movie_posterUrl: payload.movie.posterUrl
                    }
                })

                Vue.$toast.info('Creating playlist... please wait', toastOptions)

                setTimeout(function() {
                    Vue.$toast.success(response.data.message, toastOptions)
                    router.push(`/playlist`)
                }, 2000)

            } catch (err) {
                let errorMessages = ''

                if(Array.isArray(err.response.data.message)) {
                    err.response.data.message.forEach((el, idx) => {
                        errorMessages += `${el}`
                        errorMessages += idx === err.response.data.message.length - 1 ? '' : ',\n'
                    })
                } else {
                    errorMessages = err.response.data.message
                }

                Vue.$toast.error(errorMessages, toastOptions)
            }
        },

        async editPlaylist(context, payload) {
            try {
                const response = await cineclubApi({
                    method: 'PATCH',
                    url: `/playlists/${payload.playlistId}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                    data: {
                        title: payload.title,
                        description: payload.description
                    }
                })

                Vue.$toast.success(response.data.message, toastOptions)
                router.push('/playlist')
            } catch (err) {
                let errorMessages = ''

                if(Array.isArray(err.response.data.message)) {
                    err.response.data.message.forEach((el, idx) => {
                        errorMessages += `${el}`
                        errorMessages += idx === err.response.data.message.length - 1 ? '' : ',\n'
                    })
                } else {
                    errorMessages = err.response.data.message
                }

                Vue.$toast.error(errorMessages, toastOptions)
            }
        },

        async removeMovieFromPlaylist(context, payload) {
            try {
                const response = await cineclubApi({
                    method: 'DELETE',
                    url: `/playlistmovies/${payload.playlistId}/movies/${payload.movieId}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    }
                })

                Vue.$toast.success(response.data.message, toastOptions)
                context.dispatch('fetchPlaylistById', payload.playlistId)
            } catch (err) {
                Vue.$toast.error(err.response.data.message, toastOptions)
            }
        },

        async addMovieManually(context, payload) {
            try {
                const response = await cineclubApi({
                    method: 'POST',
                    url: `/movies/playlist/${payload.playlistId}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                    data: {
                        title: payload.title,
                        genre: payload.genre,
                        runtime: payload.runtime,
                        director: payload.director,
                        imdbRating: payload.imdbRating,
                        posterUrl: payload.posterUrl
                    }
                })

                Vue.$toast.info('Adding movie to playlist... please wait', toastOptions)

                setTimeout(function() {
                    Vue.$toast.success(response.data.message, toastOptions)
                    router.push(`/playlist/edit/${payload.playlistId}`)
                }, 2000)

            } catch (err) {
                let errorMessages = ''

                if(Array.isArray(err.response.data.message)) {
                    err.response.data.message.forEach((el, idx) => {
                        errorMessages += `${el}`
                        errorMessages += idx === err.response.data.message.length - 1 ? '' : ',\n'
                    })
                } else {
                    errorMessages = err.response.data.message
                }

                Vue.$toast.error(errorMessages, toastOptions)
            }
        },

        async addMovieToPlaylist(context, payload) {
            try {
                const response = await cineclubApi({
                    method: 'POST',
                    url: `/movies/playlist/${payload.playlistId}`,
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                    data: {
                        title: payload.movie.title,
                        genre: payload.movie.genre,
                        runtime: payload.movie.runtime.split(' ')[0], // From OMDB Api is xx min. Want to get only the number
                        director: payload.movie.director,
                        imdbRating: payload.movie.imdbRating,
                        posterUrl: payload.movie.posterUrl
                    }
                })

                Vue.$toast.info('Adding movie to playlist... please wait', toastOptions)

                setTimeout(function() {
                    Vue.$toast.success(response.data.message, toastOptions)
                    router.push(`/playlist`)
                }, 2000)

            } catch (err) {
                let errorMessages = ''

                if(Array.isArray(err.response.data.message)) {
                    err.response.data.message.forEach((el, idx) => {
                        errorMessages += `${el}`
                        errorMessages += idx === err.response.data.message.length - 1 ? '' : ',\n'
                    })
                } else {
                    errorMessages = err.response.data.message
                }

                Vue.$toast.error(errorMessages, toastOptions)
            }
        },

        async searchMovieByTitle(context, payload) {
            try {
                context.commit('RESET_SEARCHED_MOVIES')

                const response = await omdbApi({
                    method: 'GET',
                    params: {
                        t: payload
                    }
                })

                context.commit('SET_SEARCHED_MOVIES', response.data)
            } catch (err) {
                Vue.$toast.error(err.response.data.message, toastOptions)
            }
        },

        async fetchTrendingMovies(context) {
            try {
                Vue.$toast.info("Loading trending movies...", toastOptions)

                const response = await tmdbApi({
                    method: 'GET',
                    url: '/trending/movie/week'
                })

                context.commit('SET_TRENDING_MOVIES', response.data.results)
            } catch (err) {
                Vue.$toast.error(err.response.data.message, toastOptions)
            }
        }
    },
    getters: {
        chatMessages: state => {
            return state.chatMessages.reverse()
        }
    },
    modules: {
    }
})
