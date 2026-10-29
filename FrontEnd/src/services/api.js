import axios from 'axios';

const API = axios.create({
  baseURL: '/api',
  responseType: "json",
  headers: {
    'Accept': 'application/json'
  }
});

export default API;
