import axios from 'axios';

export default axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes?key=" +
    (process.env.API_KEY ||"AIzaSyAwZTa0MdRQ8VcSdUlciW60GxkIHm37x_o")
  + "&q=",
  responseType: "json"
});