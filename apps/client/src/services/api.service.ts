import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3300",
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});

export default api;
