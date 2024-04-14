<template>
    <div>
  
      <div>
        <router-view>
          <div>
            <div><Navbar /></div>
            <div><HomeSlider /></div>
            <div><HomeSection /></div>
            <div><HomeGallery /></div>
            <div><HomeBanner /></div>
            <div> <HomeBasket /></div>
           <div><HomePageInsta /></div>
            <div><Footer /></div>
            
          </div>
        </router-view>
      </div>
    
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  import HomeSlider from '../components/Home-slider.vue';
  import HomeSection from '../components/home-section.vue';
  import HomeGallery from '../components/home-gallery.vue';
  import HomeBanner from '../components/Home-banner.vue';
  import HomeBasket from '../components/Home-basket.vue';
  import HomePageInsta from '../components/home-page-insta.vue';
  import Footer from '../components/footer.vue';
  
  export default {
    name: "HomePage",
    components: {
      Navbar,
      HomeSlider,
      HomeSection,
      HomeGallery,
      HomeBanner,
      HomeBasket,
      HomePageInsta,
      Footer
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
   
  }
  </style>
  