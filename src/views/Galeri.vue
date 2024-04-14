<template>
    <div>
      <router-link to="/Galerya">
      <div>
  <div><Navbar/></div>
  <div><myGaleri/></div>
  <div><Footer/></div>
      </div>
      </router-link>
    </div>
  </template>
  
  <script>
  import Footer from '../components/footer.vue';
  import Navbar from '../components/Navbar.vue';
  import myGaleri from '../components/Galeri-page.vue';
  export default {
    name: 'mGallery',
     components: {
      Navbar,
      Footer,
      myGaleri,
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
  