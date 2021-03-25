<template>
  <div id="app">
    <b-navbar id="navbar" toggleable>
      <router-link :to="{name: 'Home'}">
        <b-navbar-brand>
          <b-img src="./assets/nashvillebops.png" height="40" />
        </b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-up" />
          <b-icon v-else icon="list" />
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{name: 'Home'}">
            <h6>
              Home
            </h6>
          </b-nav-item>

          <b-nav-item :to="{ name: 'Next Up' }">
            <h6>
              Nashville Bops Next Up
            </h6>
          </b-nav-item>

          <b-nav-item :to="{ name: 'Weekly Radar' }">
            <h6>
              Nashville Bops Weekly Radar
            </h6>
          </b-nav-item>

          <b-nav-item :to="{name: 'About'}">
            <h6>
              About
            </h6>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Fjalla One', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: white;
}
#navbar {
  background-color: #fc69c1;
}
.link {
  color: #fc69c1;
  text-decoration: underline;
}
.tables td {
  vertical-align: middle !important;
}
.header {
  color: #fc69c1;
}

</style>
