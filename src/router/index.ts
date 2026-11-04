import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../components/pages/HomeView.vue';
import PaletaView from '@/components/pages/PaletaView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/paleta', component: PaletaView },
  ],
});

export default router;
