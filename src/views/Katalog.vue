<template>
    <div>
      <router-link to="/Katalog">
      <div>
  <div><Navbar/></div>
  <div><myKatalog/></div>
  <div><Footer/></div>
      </div>
      </router-link>
    </div>
  </template>
  
  <script>
  import Footer from '../components/footer.vue';
  import Navbar from '../components/Navbar.vue';
  import myKatalog from '../components/katalog-page.vue';
  export default {
    name: 'mKatalog',
     components: {
      Navbar,
      Footer,
      myKatalog,
    }
  };
  </script>
  
  <style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
   
  }
  </style>
  