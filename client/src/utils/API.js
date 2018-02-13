import axios from 'axios';

export default {
    searchByQuery: function(query) {
      return fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&page=1&language=en-US&api_key=a937c77bd6b12817df5f33d7b28db932`)
        .then(res => res.json())
    },
    addMediaItemToDB: function(mediaItem) {
        return axios.post('/api/movieApp/media', mediaItem)
    },
    getMediaItemIdIfExists: function(mediaItem) {
        console.log('mediaItem, finding the id', mediaItem)
        return axios.post('/api/movieApp/media/validate', mediaItem)
    },
    findUserByName: function(query) {
        console.log('findUserByName', query)
        return axios.get(`/api/movieApp/user/name/${query}`)
    },
    findUserByEmail: function(query) {
        console.log('findUserByEmail', query)
        return axios.get(`/api/movieApp/user/email/${query}`)
    },
    findUserById: function(id) {
        console.log('get all user data', id);
        return axios.get(`/api/movieApp/user/${id}`)
    },
    getUserShelf: function(id) {
        return axios.get(`/api/movieApp/user/shelf/${id}`)
    },
    getUserLists: function(id) {
        return axios.get(`/api/movieApp/user/lists/${id}`)
    },
    pushUserLists: function(id, data) {
        console.log('pushUserLists', id, data)
        return axios.put(`/api/movieApp/user/lists/${id}`, data)
    },
    getUserReviews: function(id) {
        console.log('getUserReviews', id)
        return axios.get(`/api/movieApp/review/user/${id}`)
    },
    saveReview: function(reviewData) {
        return axios.post('/api/movieApp/review', reviewData)
    },
    addItemToUserShelf: function(userId, mediaItemId, boolean) {
        return axios.put(`/api/movieApp/user/shelf/${userId}`, {mediaItemId: mediaItemId, watched: boolean})
    },
    authenticateUser: function(userData) {
        return axios.post("/api/authenticate/signin", userData)
    },
    createNewUser: function(userData) {
        return axios.post("/api/authenticate/signup", userData)
    },
    signOutUser: function(userData) {
        return axios.post("/api/authenticate/signup", userData)
    }
}