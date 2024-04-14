<template>
    <div class="container">
      <div class="info">
        <i class="fa fa-phone icon" aria-hidden="true"></i>
        <div class="text">
          <h3>PHONE NUMBER</h3>
          <p>+99450 855 8866</p>
          <p>+99450 202 4003</p>
        </div>
      </div>
      <div class="info">
        <i class="fa fa-map-marker icon" aria-hidden="true"></i>
        <div class="text">
          <h3>STORE LOCATION</h3>
          <p>Azerbaijan, Baku, Sahil M. Khagani Street</p>
        </div>
      </div>
      <div class="info">
        <i class="fa fa-envelope icon" aria-hidden="true"></i>
        <div class="text">
          <h3>EMAIL ADDRESS</h3>
          <p>info@kharybulbul.com</p>
          <p>info@kharybulbul.com</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactInfo',
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .info {
    text-align: center;
  margin: 100px;
  }
  
  .icon {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .text h3 {
    margin: 10px 0;
    font-size: 18px;
  }
  
  .text p {
    margin: 0;
  }
  
  @media only screen and (max-width: 600px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  
    .info {
      margin: 20px 0;
    }
  }
  
  
  </style>
  