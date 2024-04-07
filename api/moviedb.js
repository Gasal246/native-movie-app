import axios from "axios";
import {apiKey} from '../constants'

const apiBaseUrl = 'https://api.themoviedb.org/3'

export const Image500 = path => `https://image.tmdb.org/t/p/w500${path}`
export const fetchImage342 = path => path ? `https://image.tmdb.org/t/p/w342/${path}` : ''
export const fetchImage185 = path => path ? `https://image.tmdb.org/t/p/w185/${path}` : ''

// api end-points
const trendingMoviesEndPoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`
const upcomingMoviesEndPoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`
const topRatedMoviesEndPoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`

// dynamic end points
// movie
const movieDetailsEndpoint = (id) => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`
const movieCreditsEndpoint = (id) => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`
const similarMoviesEndpoint = (id) => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`
// person
const personDetailsEndpoint = (id) => `${apiBaseUrl}/person/${id}?api_key=${apiKey}`
const personMoviesEndpoint = (id) => `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`
// search
const searchQueryEndpoint = (query) => `${apiBaseUrl}/search/movie?query=${query}&api_key=${apiKey}`

// api call
const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    }

    try {
        const response = await axios.request(options)
        return response.data;
    } catch (error) {
        console.log("Error occur on Api Call: ", error);
        return error.message
    }
}

// sections
export const fetchTrendingMovies = () => {
    return apiCall(trendingMoviesEndPoint);
}
export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMoviesEndPoint);
}
export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndPoint);
}

// movie
export const fetchMovieDetails = (id) => {
    return apiCall(movieDetailsEndpoint(id))
}
export const fetchMovieCredits = (id) => {
    return apiCall(movieCreditsEndpoint(id))
}
export const fetchSimilarMovies = (id) => {
    return apiCall(similarMoviesEndpoint(id))
}

// person
export const fetchPersonDetails = (id) => {
    return apiCall(personDetailsEndpoint(id))
}
export const fetchPersonMovies = (id) => {
    return apiCall(personMoviesEndpoint(id))
}

// search
export const fetchQueryMovie = (query) => {
    return apiCall(searchQueryEndpoint(query))
}