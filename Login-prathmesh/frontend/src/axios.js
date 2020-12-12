import axios from "axios";

const instance = axios.create({
  baseURL: "https://lampcamp.herokuapp.com/",
});

export default instance;
