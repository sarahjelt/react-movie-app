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
        console.log(mediaItem, 'adding to the db')
        return axios.post('/media', mediaItem)
            .then(res => console.log(res))
    },
    getMediaItemIdIfExists: function(mediaItem) {
        console.log('mediaItem, finding the id', mediaItem)
        return axios.get('/media', mediaItem)
            .then(res => console.log(res))
        // error saying res.json() isn't a function? 
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