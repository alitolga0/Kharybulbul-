<template>
    <div >
      <div>
        <div class="title-wrapper">
          <div>
            <h1>Katalog</h1>
          </div>
          <div>
            <p>Xarı Bülbül</p>
          </div>
        </div>
  
        <div class="katalog">
          <div v-for="(item, index) in katalog" :key="index" class="katalog-item">
            <img :src="item.image" alt="" />
          </div>
        </div>
      </div>
  
      <div>
        <div class="title-wrapper">
          <div>
            <h1>Xarı Bülbülü Kəşf edin</h1>
          </div>
          <div>
            <p>Xarı Bülbül</p>
          </div>
        </div>
  
        <div >
          <div class="katalog1">
            <div class="section">
              <div>
                <img src="@/assets/discover-1.jpg" alt="" />
              </div>
              <div>
                <h1>Müxtəlif Növ Şokoladlar</h1>
              </div>
              <div>
                <p>Birbirindən Möhtəşəm və Fərqli Təamlara Sahib Şokoladlarımızı Kəşf Edin.</p>
              </div>
              <div>
                <button><a href="#" class="fa fa-arrow-right"> </a></button>
              </div>
            </div>
            <div class="section">
              <div>
                <img src="@/assets/discover-2.jpg" alt="" />
              </div>
              <div>
                <h1>Kafe</h1>
              </div>
              <div>
                <p>Xarı Bülbülün Elegant Lux Kafesini Zəngin Menyusu İlə Birlikdə Kəşf Edin</p>
              </div>
              <div>
                <button><a href="#" class="fa fa-arrow-right"> </a></button>
              </div>
            </div>
            <div class="section">
              <div>
                <img src="@/assets/discover-3.jpg" alt="" />
              </div>
              <div>
                <h1>Fərqli Təamlar</h1>
              </div>
              <div>
                <p>Menyumuza Daxil Olan Yeni Təamlardan Xəbər Alın</p>
              </div>
              <div>
                <button><a href="#" class="fa  fa-arrow-right"> </a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "homeSection",
    setup() {
      const katalog = [
        { image: require("@/assets/cat1.jpeg") },
        { image: require("@/assets/cat2.jpeg") },
        { image: require("@/assets/cat3.jpeg") },
        { image: require("@/assets/cat4.jpeg") },
        { image: require("@/assets/cat5.jpeg") },
      ];
  
      return { katalog };
    },
  };
  </script>
  
  <style scoped>
  .title-wrapper {
    padding: 40px;
    text-align: center;
  }
  
  .katalog {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 50px;
  }
  
  .katalog-item {
    margin: 40px;
    width: 200px;
    height: 200px;
    border: 1px solid #ddd;
    overflow: hidden;
    position: relative;
  }
  .katalog-item:hover {
    transform: scale(1.1);
  }
  .katalog-item img {
    transition: transform 0.3s;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
    .katalog1 {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
      }
  
      .section {
          width: calc(30% - 20px); 
          margin: 15px; 
          padding: 15px; 
          border: 1px solid #ddd;
      }
  
      .section img {
          width: 70%;
          height: 100%;
      }
      .section button{
     background-color: transparent !important;
     border: none;
     font-size: 50px;
      }
  </style>
  