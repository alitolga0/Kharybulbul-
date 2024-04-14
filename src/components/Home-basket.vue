<template>
    <div class="wrapper">
      <div class="basket-container">
        <div class="overlay">
          <div class="overlay-content">
            <h1 style="font-size: 50px; color: #6d8039">Xarı Bülbül</h1>
            <h2 style="font-size: 70px">ÇOXLU MÖHTƏŞƏM ŞKOLADLAR</h2>
            <p style="font-size: 30px">Kəşf Edin</p>
          </div>
  
          <div class="links-container">
            <div><a>Əlaqə Saxlayın</a></div>
            <div><a>Sifariş Verin</a></div>
            <div><a>Kafenin Lokasiyası</a></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name:'homeBasket',
    setup() {
      
    },
  }
  </script>
  <style scoped>
  .wrapper {
    padding-top: 130px;
  }
  
  .basket-container {
    position: relative;
    height: 53vh;
    background-image: url("@/assets/slider11.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .overlay {
    color: white;
    text-align: center;
    padding: 20px;
    max-width: 800px;
  }
  
  .overlay-content {
    margin-bottom: 20px;
  }
  
  .links-container {
    display: flex;
    justify-content: center;
    width: 100%;
    position: relative;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .links-container div {
    margin: 10px 100px;
  }
  </style>
  