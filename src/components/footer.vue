<template>
    <footer class="footer">
      <div class="footer-wrap">
          <div class="logo-wrapper">
        <div class="logo">
          <img src="@/assets/discover-1.jpg" alt="Logo" />
        </div>
        <div class="social-icons">
          <a href="#" class="social-icon"><i class="fa fa-whatsapp"></i></a>
          <a href="#" class="social-icon"><i class="fa fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fa fa-facebook"></i></a>
        </div>
      </div>
      <div class="sub-areas">
        <div class="sub-area">
          <h3>KATEGORIYALAR</h3>
          <p><a href=""> Şkolad Kategoriyaları</a></p>
          <p><a href="">Sifariş Ver</a></p>
          <p><a href="">Haqqımızda</a></p>
          <p><a href="">Sifariş Ver</a></p>
        </div>
        <div class="sub-area">
          <h3>SERVISLƏR</h3>
          <p><a href="">Lux Kafe</a></p>
          <p><a href="">Şkoladların Sifarişi</a></p>
          <p><a href="">Müxtəlif Ləzzətlər</a></p>
        </div>
        <div class="sub-area">
          <h3>INFORMASIYA</h3>
          <p><a href="">Haqqımızda</a></p>
          <p><a href="">Əlaqə</a></p>
        </div>
      </div>
      </div>
      <div class="reserved">
          <p>Khary Bulbul © All reserved</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "myFooter",
  };
  </script>
  
  <style scoped>
  .footer-wrap {
    margin-top: 100px;
    padding: 20px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  h3 {
    font-size: 25px;
  }
  
  .logo img {
    width: 100px;
    border-radius: 60%;
  }
  
  .social-icons {
    margin-top: 20px;
  }
  
  .social-icon {
    margin: 0 10px;
    color: white;
    font-size: 24px;
  }
  
  .logo-wrapper {
    transform: translate(-40%, 40%);
  }
  
  .sub-areas {
    display: flex;
    justify-content: center;
    margin-left: 200px;
  }
  
  .sub-area {
    flex: 1;
    margin: 50px;
  }
  
  a {
    text-decoration-line: none;
  }
  
  .reserved {
    display: flex;
    justify-content: center;
    background-color: #5555;
  }
  
  @media (max-width: 768px) {
    .footer-wrap {
      flex-direction: column; /* Stack items vertically on smaller screens */
      align-items: center; /* Center items horizontally */
    }
  
    .sub-areas {
      margin-left: 0; /* Remove the left margin */
    }
  
    .sub-area {
      margin: 20px 0; /* Add some space between sub-areas */
    }
  }
  
  </style>
  