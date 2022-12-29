import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': "application/json",
  },
})

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(response => {
  return response;
}, error => {
  if(error.response.status === 401){
    localStorage.removeItem("token");
    window.location = "/signin"
  }
  return Promise.reject(error)
})




export default instance;
