<template>
  <div id="app">
    <b-navbar id="navbar" toggleable>
      <router-link :to="{name: 'Artist Chart'}">
        <b-navbar-brand>
          <b-img src="./assets/nashvillebops.png" height="60" />
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
          <b-nav-item :to="{name: 'About'}">
            <h3>
              About
            </h3>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view />

    <footer id="footer" class="p-3">
      <p class="mt-2">
        For song submissions and other inquiries email stephen@nashvillebops.com
      </p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: 'PT Sans Narrow', Helvetica, Arial, sans-serif;
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
.link {
  color: #fc69c1;
}
.tables td {
  vertical-align: middle !important;
}

</style>
