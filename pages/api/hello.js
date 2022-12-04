import axios from "axios"

const api = axios.create({
  baseURL: 'http://127.0.0.1/clips/public_html/api'
});

export default api