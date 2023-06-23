import axios from "axios";

export const BASE_URL = axios.create({
  baseURL: "http://localhost:8082",
  

  headers: {
    "Content-Type": "application/json",
  },
});
