import axios from 'axios';

// const BASE_URL = 'http://localhost/3001';

export default {
    searchByQuery: function(query) {
      return fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&page=1&language=en-US&api_key=a937c77bd6b12817df5f33d7b28db932`)
        .then(res => res.json())
    },
    addMediaItemToUserShelf: function(userData) {
        console.log('adding userData to the db', userData)
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
    getUserShelf: function(id) {
        console.log('getUserShelfItems', id)
        return axios.get(`/api/movieApp/user/shelf/${id}`)
    },
    getUserLists: function(id) {
        console.log('getUserLists', id)
        return axios.get(`/api/movieApp/user/lists/${id}`)
    },
    pushUserLists: function(id) {
        console.log('pushUserLists', id)
        return axios.put(`/api/movieApp/user/lists/${id}`)
    },
    getUserReviews: function(id) {
        console.log('getUserReviews', id)
        return axios.get(`/api/movieApp/review/user/${id}`)
    },
    saveReview: function(reviewData) {
        return axios.post('/api/movieApp/review', reviewData)
    },
    addItemToUserShelf: function(userId, mediaItemId) {
        return axios.post()
    },
    //the below functions are all kind of work-in-progressy at this point
    // getUserData: function() {
    //   const url = `${BASE_URL}/api/user`;
    //   return axios.get(url).then(response => response.data);
    // },
    // getMediaData() {
    //   const url = `${BASE_URL}/api/media`;
    //   return axios.get(url).then(response => response.data);
    // },
    // getReviewData() {
    //   const url = `${BASE_URL}/api/review`;
    //   return axios.get(url).then(response => response.data);
    // }
}