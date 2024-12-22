<template>
    <div>
      <h1>About Page</h1>
      <NuxtLink to="/">Go to Home Page</NuxtLink>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: ['auth'], // Protect this page with the auth middleware
    })
  </script>
  
  <style scoped>
  /* Page-specific styles */
  h1 {
    color: green;
  }
  </style>
  