import axios from "axios";

const httpRequest = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default httpRequest;
