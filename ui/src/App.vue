<template>
  <div id="app">
    <b-navbar id="navbar">
      <router-link :to="{name: 'Artist Chart'}">
        <b-navbar-brand>
          <b-img src="./assets/nashvillebops.png" height="60" />
        </b-navbar-brand>
      </router-link>
    </b-navbar>

    <router-view />

    <footer id="footer" class="p-3">
      <p class="mt-2">
        For song submissions and other inquiries email: stephen@nashvillebops.com
      </p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FDA0D8;
}
#navbar {
  background-color: #fc69c1;
  text-align: center;
}
#footer {
  background-color: #fc69c1;
  text-align: center;
}
</style>
