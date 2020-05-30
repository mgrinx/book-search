import axios from 'axios';

export default axios.create({
  baseURL: "https://salty-cove-70125.herokuapp.com/",
  responseType: "json"
});