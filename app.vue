<template>
  <div>
    <NuxtLayout />

          
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

authStore.initialize()

</script>