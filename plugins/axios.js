import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api', // Your Laravel API URL
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // Add the token from cookies to the Authorization header if available
  axiosInstance.interceptors.request.use((config) => {
    const token = useCookie('auth_token').value // Access the token using useCookie
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  // Make axios globally available
  nuxtApp.provide('axios', axiosInstance)
})
