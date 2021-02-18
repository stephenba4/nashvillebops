<template>
  <div id="app">
    <b-navbar id="navbar">
      <router-link to="/">
        <b-navbar-brand>
          <b-img src="./assets/nashvillebops.png" height="60" />
        </b-navbar-brand>
      </router-link>
    </b-navbar>

    <b-container>
      <p class="m-3" style="border-bottom: 1px solid grey">
        Artists: {{ artistCount }}
      </p>
    </b-container>

    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      fakeData: {},
      artistCount: null,
    }
  },
  computed: {
    ...mapGetters(['getFakeData']),
  },
  mounted() {
    this.fakeData = this.getFakeData;
    this.artistCount = this.getFakeData.artistChartItems.length;
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#navbar {
  background-color: #FDA0D8;
}
</style>
