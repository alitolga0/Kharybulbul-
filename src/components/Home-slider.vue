<template>
    <div class="container">
      <div class="slider-text">
        <div>
          <h1 >Xarı Bülbül'ə Xoş Gəlmisiniz</h1>
        </div>
        <div>
          <button>İndi Kəşf Edin</button>
        </div>
      </div>
  
      <swiper
        class="mySwiper swiper-h"
        :spaceBetween="50"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" alt="">
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination } from 'swiper/modules';
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    name: 'homeSlider',
    setup() {
      const slides = [
        { image: require('@/assets/slider11.jpg') },
        { image: require('@/assets/slider11.jpg') },
      ];
  
      return {
        modules: [Pagination],
        slides,
      };
    },
  };
  </script>
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
  }.slider-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    text-align: center; 
  }
  
  .slider-text h1 {
    color: aliceblue;
    font-size: 70px; 
    margin-bottom: 10px;
  }
  
  .slider-text button {
    background-color: rgb(24, 24, 25);
    color: aliceblue;
    font-size: 24px; 
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  
  
  .swiper-container {
    width: 100%;
    height: 70vh;
    position: relative;
    z-index: 0;
  }
  
  .swiper-h {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  </style>