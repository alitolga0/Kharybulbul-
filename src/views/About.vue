<template>
    <div>
      <router-link to="/Hakkimizda">
      <div>
  <div><Navbar/></div>
  <div> <aboutPage/></div>
  <div><Footer/></div>
      </div>
      </router-link>
    </div>
  </template>
  
  <script>
  import Footer from '../components/footer.vue';
  import Navbar from '../components/Navbar.vue';
  import aboutPage from '../components/About-page.vue';
  export default {
    name: 'mAbout',
     components: {
      Navbar,
      Footer,
      aboutPage,
    
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
  