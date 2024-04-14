<template>
    <div>
      <div class="gallery-wrapper">
        <div class="gallery">
          <div class="gallery-item" v-for="(item, index) in katalog" :key="index">
            <img :src="item.image" alt="" />
            <div>
              <p>numune</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "myGaleri",
    setup() {
      const katalog = [
        { image: require("@/assets/c1.jpg") },
        { image: require("@/assets/c2.jpg") },
        { image: require("@/assets/c3.jpg") },
        { image: require("@/assets/c5.jpg") },
        { image: require("@/assets/c6.jpg") },
        { image: require("@/assets/c7.jpg") },
        { image: require("@/assets/c8.jpg") },
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
  .gallery-wrapper {
    padding: 60px 150px;
  }
  
  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
  }
  
  .gallery-item {
    flex: 0 0 calc(20% );
    margin: 20px;
    position: relative;
  }
  
  .gallery-item img {
    width: 100%;
    height: auto;
  }
  
  .gallery-item p {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 5px;
    text-align: center;
  }
  @media (max-width: 768px) {
    .gallery-item {
      flex-basis: 100%; 
      margin: 0;
    }
  
    .gallery-item img {
      width: 100%;
      height: auto;
      
    }
  
    .gallery-item p {
      display: none;
    }
  }
  
  
  </style>
  