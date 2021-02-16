<template>
  <div>
    <b-container>
      <b-row>
        <h1 class="w-25 m-1">
          {{ $route.name }}
        </h1>
      </b-row>

      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
