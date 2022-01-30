import axios from "axios";
const API = axios.create({
  //baseURL: "http://localhost:3004",
  timeout: 30000,
  headers: {
    ContentType: "application/json;charset=UTF-8",
    Accept: "application/json",
  },
});

export function POST(url, data) {
  return new Promise((resolve, reject) => {
    const ret = API.post(url, data);
    resolve(ret);
  });
}

export default API;
