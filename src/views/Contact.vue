<template>
    <div>
      <router-link to="/Iletisim">
      <div>
  <div><Navbar/></div>
  <div><contactPage/></div>
  <div><ContactInfo/></div>
  <div><Footer/></div>
      </div>
      </router-link>
    </div>
  </template>
  
  <script>
  import Footer from '../components/footer.vue';
  import Navbar from '../components/Navbar.vue';
  import contactPage from '../components/Contact-Page.vue';
  import ContactInfo from '../components/Contact-page-info.vue';
  export default {
    name: 'mContact',
     components: {
      Navbar,
      Footer,
      contactPage,
      ContactInfo,
      
    
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
  