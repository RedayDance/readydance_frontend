import axios from "axios";
const API = axios.create({
  //baseURL: "http://localhost:3004",
  timeout: 30000,
  headers: {
    ContentType: "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});

export default API;
