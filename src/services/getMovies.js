const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY ='920c36ff8242d8709b1534f84ec52659'
export const getMoviesAllDay =()=>{
    return fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
    
}

export const getSearch = (query) =>{
    return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`) 
}

export const getDetails = (movieId)=>{
    return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`) 
}

export const getCredits = (movieId)=>{
    return fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`) 
}

export const getReviews = ()=>{
    return fetch(`${BASE_URL}movie/{movie_id}/reviews?api_key=${API_KEY}`) 
}



