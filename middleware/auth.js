// middleware/auth.js
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()

  authStore.initialize()

  if (!authStore.token) {
    return navigateTo('/login')
  }

  // If the user is logged in and tries to access the login page, redirect to the home page
  if (authStore.token && to.path === '/login') {
    return navigateTo('/')
  }
})
