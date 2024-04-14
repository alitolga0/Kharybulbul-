<template>
    <div class="container">
      <div class="gallery-item" v-for="(item, index) in katalog" :key="index">
        <div class="frame">
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'myKatalog',
    setup() {
      const katalog = [
        { image: require('@/assets/discover-1.jpg') },
        { image: require('@/assets/discover-2.jpg') },
        { image: require('@/assets/discover-3.jpg') },
        { image: require('@/assets/discover-1.jpg') },
      ];
      return {
        katalog
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
  }
  
  .gallery-item {
    flex: 0 0 75%;
    margin: 15px;
  }
  
  .frame {
    border: 2px solid black;
  }
  
  .frame img {
    width: 100%; 
    height: auto; 
  }
  </style>
  