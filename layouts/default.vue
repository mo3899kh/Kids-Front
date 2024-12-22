
<template>
  <div>
    <!-- Include Header -->
    <Header />
    
    <!-- Main Content (This will be replaced by the page content) -->
    <main>
        <Navbar />
        <NuxtPage />
    </main>

    <!-- Include Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
    components:{
        Navbar, Header, Footer
    }
}
</script>