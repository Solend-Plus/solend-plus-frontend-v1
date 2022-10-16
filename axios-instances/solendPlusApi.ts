import Axios from "axios";

const solendPlusApi = Axios.create({
  baseURL: "https://nodejs-solend-plus-api.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    // Connection: "Keep-Alive",
    // Accept: "*/*",
  },
});

export default solendPlusApi;
