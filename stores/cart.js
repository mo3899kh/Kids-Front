import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  }),
  
  actions: {
    // Save cart data to localStorage
    saveCartToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },

    // Add item to cart
    addToCart(item) {
      const existingItemIndex = this.cart.findIndex(cartItem => cartItem.variant_id === item.variant_id)
        
      if (existingItemIndex !== -1) {
        // Update the existing item quantity if it already exists
        this.cart[existingItemIndex].quantity += item.quantity
      } else {
        // Add the new item to the cart
        
        this.cart.push(item)
      }
      
      this.saveCartToLocalStorage()
    },

    // Remove item from cart
    removeFromCart(itemId) {
      this.cart = this.cart.filter(item => item.id !== itemId)
      this.saveCartToLocalStorage()
    },

    // Clear cart
    clearCart() {
      this.cart = []
      localStorage.removeItem('cart')
    },

    // Get cart data
    loadCartFromLocalStorage() {
      return this.cart
    }
  }
})
