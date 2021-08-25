import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: process.env.VUE_APP_TMDB_API_KEY
    }
})