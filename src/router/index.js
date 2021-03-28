import Vue from 'vue';
import VueRouter from 'vue-router';
import ArtistProfile from '@/views/ArtistProfile.vue';
import About from '@/views/About.vue';
import PlaylistsAndCharts from '@/views/PlaylistsAndCharts.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Playlists And Charts',
    component: PlaylistsAndCharts,
  },
  {
    path: '/artistProfile',
    name: 'Artist Profile',
    component: ArtistProfile,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
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
