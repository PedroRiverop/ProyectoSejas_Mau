import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://musical-garbanzo-ggxjgpq4qp6crqj-3001.app.github.dev/api", // depende de tu .env
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
