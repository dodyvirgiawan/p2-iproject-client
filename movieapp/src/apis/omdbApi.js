import axios from 'axios'

export default axios.create({
    baseURL: `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDB_API_KEY}`
})