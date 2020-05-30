import axios from 'axios';

export default axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?key=" + process.env.API_KEY + "&q=",
  responseType: "json"
});