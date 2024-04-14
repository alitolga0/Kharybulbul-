<template>
    <div class="banner">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="banner-item"
        @mouseover="setHovered(index)"
        @mouseleave="setHovered(null)"
      >
        <div
          class="image"
          :style="{ backgroundImage: 'url(' + item.image + ')', transform: 'translateY(' + (hoveredIndex === index ? '5px' : '0') + ')'}"
        >
          <div class="overlay">
            <h1>{{ item.title }}</h1>
            <p>{{ commonText }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'homeBanner',
    data() {
      return {
        commonText: 'İndi Baxın',
        hoveredIndex: null,
        items: [
          { id: 1, image: require('@/assets/cat1.jpeg'), title: 'Şkolad Qutuları' },
          { id: 2, image: require('@/assets/cat2.jpeg'), title: 'Dadlı Menyu' },
          { id: 3, image: require('@/assets/cat3.jpeg'), title: 'Gözəl İnteryer' }
        ]
      };
    },
    methods: {
      setHovered(index) {
        this.hoveredIndex = index;
      }
    }
  };
  </script>
  
  <style scoped>
  .banner {
    display: flex;
    flex-direction: column;
  }
  
  .banner-item {
    position: relative;
  }
  
  .image {
    position: relative;
    width: 100%;
    height: 50vh;
    background-size: cover;
    background-position: center;
    transition: transform 0.3s;
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    text-align: left;
    padding-left: 80px;
    padding-bottom: 80px;
  }
  </style>
  