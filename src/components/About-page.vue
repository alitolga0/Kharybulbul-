<template>
    <div class="container">
      <div class="header"><h1>XARI BÜLBÜL</h1></div>
      <div class="content-wrapper">
        <div class="content">
          <div class="image-section">
            <img src="@/assets/instagram-4.jpg" alt="" />
          </div>
          <div class="text-section">
            <div class="about">
              <h2>Bizim Haqqımızda</h2>
              <p>Bu Hissədə Biznes Şəbəkəsi Haqqında Yazılar Qeyd ediləcək</p>
            </div>
            <div class="details">
              <div class="detail-item">
                <h2>Müxtəlif Çeşidlər</h2>
                <p>Birbirindən fərqli müxtəlif çeşidlərə sahib şkoladlarımız var</p>
              </div>
              <div class="detail-item">
                <h2>Şkolad Qutuları</h2>
                <p>Milli Dəyərlərimizi Əks Elətdirən Müxtəlif Dizayna Sahib Şkolad Qutuları</p>
              </div>
              <div class="detail-item">
                <h2>Sass</h2>
                <p>Eaque voluptatibus dolores. Quod. Lorem dolor sit amet consectetur. Minus, asperiores.</p>
              </div>
              <div class="detail-item">
                <h2>Node.js</h2>
                <p>Numquam saepe deserunt obcaecati? Doloribus. Lorem ipsum dolor sit amet adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "aboutPage",
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
  }
  
  .content-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .content {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    margin-left: 40%;
  }
  
  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      align-items: center; 
      margin-left: 0; 
    }
  
    .content-wrapper {
      padding: 20px; 
      box-sizing: border-box; 
    }
  }
  
  
  .image-section img {
    width: 100%;
    max-width: 600px;
    height: auto;
  }
  
  .text-section {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    max-width: 600px;
  }
  
  .details {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }
  
  .detail-item {
    padding: 10px;
    border-radius: 5px;
    flex: 1 1 200px;
  }
  
  .about h2,
  .detail-item h2 {
    margin-top: 0; 
  }
  
  </style>
  