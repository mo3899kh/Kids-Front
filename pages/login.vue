<!-- pages/login.vue -->
<template>

     <!-- Account-Sign In START -->
     <div class="account__form__area">
      <div class="account__form__img d-none d-lg-block">
        <img
          src="assets/img/account-form-img-1.png"
          alt=""
          class="account-img"
        />
        <div class="account__form__dots">
          <span class="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="account__form__content">
        <div class="skip__btn d-block d-lg-none">
          <a href="#">Skip</a>
        </div>
        <div class="account__form__title">
          <div>
            <h3>sign in</h3>
            <p>
              If you have an account with us, log in using your phone number.
            </p>
          </div>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M26.5 1.5L14 14M14 14L1.5 26.5M14 14L26.5 26.5M14 14L1.5 1.5"
                stroke="#141B34"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div class="account__form">
          <div class="signin__wrap">
            <form @submit.prevent="login">
              <div class="input__field">
                <div class="text-danger" v-html="form.errors.errors.error" />
                <input v-model="form.phone" type="text" placeholder="Phone number" />
                <div class="text-danger" v-html="form.errors.errors.phone" />
                <input v-model="form.password" type="password" placeholder="Password" />
                <div class="text-danger" v-html="form.errors.errors.password" />
                <a href="#">Forgot your password?</a>
                <button>sIGN IN</button>
              </div>
            </form>
          </div>
        </div>
        <div class="creat__account">
          <h4>Don’t have an account?</h4>
          <p>
            Create an account in order to pay faster, save multiple shipping
            addresses, view <br />
            and track your orders, and more!
          </p>
          <button class="btn_creat">CREATE AN ACCOUNT</button>
        </div>
      </div>
    </div>
    <!-- Account-Sign In END -->
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useAuthStore } from '~/stores/auth'

  const authStore = useAuthStore()
  const form = ref(new (useNuxtApp().$vform)({
    phone: '',
    password: '',
    device_name:'web'
  }))

  const login = async () => {
    try {
      await authStore.login(form.value)
      navigateTo('/') // Redirect after successful login
    } catch (error) {
      console.error('Login failed:', error)
    }
}
  </script>
  
