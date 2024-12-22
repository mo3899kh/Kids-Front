import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
    carts:[],
  }),

  actions: {
    // Load token from cookies if available
    initialize() {
      // Use Nuxt 3's useCookie for cookie management
      this.token = useCookie('auth_token').value || null
      this.user = useCookie('user').value || null
      console.log('AuthStore Initialized:', { token: this.token, user: this.user })
      
    },

    // Login action
    async login(credentials) {
      try {
        const form = new (useNuxtApp().$vform)(credentials)
        const response = await form.post('/auth/login') // Adjust endpoint to match your Laravel API

        // Extract user and token from response payload
        const { user, accessToken } = response.data.payload
        const { plainTextToken } = accessToken

        this.token = plainTextToken
        this.user = user

        // Store token and user in cookies
        useCookie('auth_token').value = plainTextToken
        useCookie('user').value = user

        return response
      } catch (error) {
        console.error('Login failed:', error.response?.data || error)
        throw error
      }
    },

    // Logout action
    logout() {
      this.token = null
      this.user = null

      // Clear cookies
      useCookie('auth_token').value = null
      useCookie('user').value = null
    },
  },
})
