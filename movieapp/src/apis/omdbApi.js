import axios from 'axios'

export default axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=${process.env.VUE_APP_OMDB_API_KEY}`
})