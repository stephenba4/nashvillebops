import Vue from 'vue';
import VueRouter from 'vue-router';
import ArtistProfile from '@/views/ArtistProfile.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import NextUp from '@/views/NextUp.vue'
import WeeklyRadar from '@/views/WeeklyRadar.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
  {
    path: '/nextUp',
    name: 'Next Up',
    component: NextUp,
  },
  {
    path: '/weeklyRadar',
    name: 'Weekly Radar',
    component: WeeklyRadar,
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
