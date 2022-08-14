import Axios from "axios";

const solendPlusApi = Axios.create({
  baseURL: "https://solend-plus.azurewebsites.net/",
  headers: {
    "Content-Type": "application/json",
    // Connection: "Keep-Alive",
    // Accept: "*/*",
  },
});

export default solendPlusApi;
