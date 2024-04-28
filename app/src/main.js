import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
// import Home from './Home.vue'
import About from './components/About.vue'
// import Contact from './Contact.vue'

import './index.css'
import router from './router';



createApp(App).use(router).mount('#app')