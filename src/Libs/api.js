import axios from "axios";

const instance = axios.create({
    baseUrl: "http://localhost:8000/api",
    headers: {
        'Content-Type': "application/json",
    },
})

instance.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.common['Authorization'] = `Bearer ${token}`;
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  
export default instance;  