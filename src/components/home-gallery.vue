<template>
    <div>
      <div class="title-wrapper">
        <div>
          <h1>Şkoladlarımız</h1>
        </div>
        <div>
          <p>Xarı Bülbül</p>
        </div>
        <div>
          <p>Hamısı</p>
        </div>
      </div>
      <div class="gallery-wrapper">
        <div class="gallery">
          <div class="gallery-item" v-for="(item, index) in katalog" :key="index">
            <img :src="item.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "homeGallery",
    setup() {
      const katalog = [
        { image: require("@/assets/c1.jpg") },
        { image: require("@/assets/c2.jpg") },
        { image: require("@/assets/c3.jpg") },
        { image: require("@/assets/c5.jpg") },
        { image: require("@/assets/c6.jpg") },
        { image: require("@/assets/c7.jpg") },
        { image: require("@/assets/c8.jpg") },
      ];
  
      return { katalog };
    },
  };
  </script>
  
  <style scoped>
  .gallery-wrapper{
  padding: 60px 150px;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
  }
  
  .gallery-item {
    flex: 0 0 calc(20% - 10px);
    margin: 20px;
    
  }
  
  .gallery-item img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    .gallery-item {
     
      margin: 10px; 
    }
  
    .gallery-item img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  
  
  </style>
  