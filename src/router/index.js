import Vue from 'vue';
import VueRouter from 'vue-router';
import ArtistProfile from '@/views/ArtistProfile.vue';
import ArtistChart from '../views/ArtistChart.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Artist Chart',
    component: ArtistChart,
  },
  {
    path: '/artistProfile',
    name: 'Artist Profile',
    component: ArtistProfile,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
});

export default router;
