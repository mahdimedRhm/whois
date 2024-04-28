import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/about',
    component: () => import('./components/About.vue'),
    meta: { title: 'About' }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;