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
            <b-link :href="artistData.instagram" target="_blank">
              Instagram Account
            </b-link>
          </div>
        </b-card>

        <b-card class="m-3">
          <h5>
            Spotify Followers:
          </h5>
          {{ row.spotifyFollowers }}
        </b-card>

        <b-card class="m-3">
          <iframe
            :src="spotifyPlayer"
            width="100%"
            height="250"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </b-card>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    row: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      artistData: {},
      spotifyPlayer: '',
    }
  },
  computed: {
    ...mapGetters(['getSingleArtistData']),
  },
  mounted() {
    this.artistData = this.getSingleArtistData(this.row.id)
    this.spotifyPlayer = `https://open.spotify.com/embed/artist/${this.row.id}`
  },
}
</script>

<style>

</style>
