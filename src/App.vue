<template>
  <div id="app">
    <b-navbar id="navbar">
      <router-link to="/">
        <b-navbar-brand>
          <b-img src="./assets/nashvillebops.png" height="60" />
        </b-navbar-brand>
      </router-link>
    </b-navbar>

    <router-view />
  </div>
</template>

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
