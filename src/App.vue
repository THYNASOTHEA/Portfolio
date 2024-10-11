<template>
  <div>
    <navbar></navbar>
    
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue';
import Footer from './components/footer.vue';



export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>