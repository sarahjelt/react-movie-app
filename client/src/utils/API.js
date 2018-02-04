import axios from 'axios';

const BASE_URL = 'http://localhost/3001';

export { getUserData, getMediaData, getReviewData };

function getUserData() {
  const url = `${BASE_URL}/api/user`;
  return axios.get(url).then(response => response.data);
}

function getMediaData() {
  const url = `${BASE_URL}/api/media`;
  return axios.get(url).then(response => response.data);
}

function getReviewData() {
  const url = `${BASE_URL}/api/review`;
  return axios.get(url).then(response => response.data);
}