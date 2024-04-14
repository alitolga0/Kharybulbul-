<template>
    <div class="container">
      <div class="map-container">
        <div id="map"></div>
      </div>
  
      <div class="form-container">
        <div class="contact-form">
          <p>Order Or Write Your Message</p>
          <form>
            
            <input type="text" id="name" name="name" placeholder="Adınız Soyadınız*" required>
  
            
            <input type="tel" id="phone" name="phone" placeholder="Mobil Nömrəniz*" required>
  
           
            <textarea id="message" name="message" placeholder="Mesaj*" required></textarea>
  
            <button type="submit">Sipariş Ver</button>
          </form>
        </div>
      </div>
      <div>
         
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'contactPage',
   
    
  };
  </script>
  
  <style scoped>
  
  .container {
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-top: 100px;
  }
  
  .map-container,
  .form-container {
    width: 100%; 
    max-width: 800px; 
    margin-bottom: 20px;
  }
  
  @media (min-width: 768px) {
    .container {
      flex-direction: row;
      justify-content: center;
    }
  
    .map-container {
      margin-right: 20px; 
    }
  }
  
  
  
  
  
  #map {
    height: 100%; 
  }
  
  .contact-form {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .contact-form p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .contact-form form {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  
  .contact-form label {
    font-weight: bold;
  }
  
  .contact-form input,
  .contact-form textarea {
    padding: 5px;
    border: none; 
    border-radius: 5px;
    background-color: #f8f9fa; 
  }
  
  .contact-form button {
    padding: 5px 10px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }
  
  .contact-form button:hover {
    background-color: #0056b3;
  }
  
  
  
  
  </style>
  