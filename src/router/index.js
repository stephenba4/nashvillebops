import Vue from 'vue';
import VueRouter from 'vue-router';
import ArtistDetails from '@/views/ArtistDetails.vue';
import ArtistChart from '../views/ArtistChart.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Artist Chart',
    component: ArtistChart,
  },
  {
    path: '/artistDetails/:id',
    name: 'Artist Details',
    component: ArtistDetails,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
