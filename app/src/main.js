import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import "preline/preline";

import App from './App.vue'

// import Home from './Home.vue'
// import Contact from './Contact.vue'

import './index.css'
import router from './router';



createApp(App).use(router).mount('#app')