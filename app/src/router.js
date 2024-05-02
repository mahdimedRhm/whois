import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/about',
    component: () => import('./components/About.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/',
    component: () => import('./components/Home.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/gear',
    component: () => import('./components/Gear.vue'),
    meta: { title: 'Gear' }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;