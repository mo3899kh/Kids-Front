import axios from 'axios'
import { Form } from 'vform'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtPlugin(() => {
  // Retrieve the authentication token from the auth store
  const authStore = useAuthStore()

  // Create an Axios instance with a base URL
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api', // Your Laravel API base URL
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // Add a request interceptor to include the Authorization header
  axiosInstance.interceptors.request.use(
    (config) => {
      // Get the token from the auth store
      const token = authStore.token

      // If a token exists, set the Authorization header
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (error) => {
      // Handle the request error
      return Promise.reject(error)
    }
  )

  // Set the Axios instance for vform
  Form.axios = axiosInstance

  return {
    provide: {
      vform: Form,
    },
  }
})
