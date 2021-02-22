import Vue from 'vue';
import VueRouter from 'vue-router';
import ArtistChart from '../views/ArtistChart.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Artist Chart',
    component: ArtistChart,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
