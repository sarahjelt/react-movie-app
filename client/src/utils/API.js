import axios from 'axios';

export default {
    searchByQuery: function(query) {
        return fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&page=1&language=en-US&api_key=a937c77bd6b12817df5f33d7b28db932`)
            .then(res => res.json())
    }
}