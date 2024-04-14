// main.js

import { createApp } from 'vue';
import App from './App.vue';
import SwiperCore, { Swiper, Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

SwiperCore.use([Navigation, Pagination]);

createApp(App).use(router)
  .use(router)
  .component('Swiper', Swiper)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app');

library.add(faWhatsapp, faInstagram, faFacebook);
