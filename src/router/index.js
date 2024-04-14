import { createRouter, createWebHistory } from 'vue-router';

import mAbout from '../views/About.vue';
import mContact from '../views/Contact.vue';
import mKatalog from '../views/Katalog.vue';
import mGallery from '../views/Galeri.vue';
import homePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'AnaSayfa',
    component: homePage
  },
  {
    path: '/Katalog',
    name: 'mKatalog',
    component: mKatalog
  },
  {
    path: '/Galerya',
    name: 'Galerya',
    component: mGallery
  },
  {
    path: '/Hakkimizda',
    name: 'Hakkimizda',
    component: mAbout
  },
  {
    path: '/Iletisim',
    name: 'Iletisim',
    component: mContact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
