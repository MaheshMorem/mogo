import { createRouter, createWebHistory } from 'vue-router';
import Form from '../components/form.vue';
import Requests from '../components/requests.vue'

const routes = [
  {
    path: '/',
    component: Form
  },
  {
   path: '/list-requests',
   component: Requests
  }
];

const router = createRouter({
   history: createWebHistory(),
   routes
});

export default router;
