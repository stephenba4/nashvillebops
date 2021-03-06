<template>
  <div class="justify-content-center pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <b-card>
        <b-img
          :src="row.img"
          width="250"
          rounded
        />
        <h1 class="m-3">
          {{ row.artist }}
        </h1>

        <b-card class="m-3">
          <h5>
            Social Links:
          </h5>

          <div>
            <b-link :href="row.spotify" target="_blank">
              Spotify Account
            </b-link>
          </div>

          <div>
            <b-link :href="row.instagram" target="_blank">
              Instagram Account
            </b-link>
          </div>
        </b-card>

        <b-card class="m-3">
          <h5>
            Spotify Followers:
          </h5>
          {{ row.followers }}
        </b-card>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style>

</style>
