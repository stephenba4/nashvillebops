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
          <h2>
            <i class="fa fa-spotify m-2" />Followers:
          </h2>
          <h2>
            {{ formatNumber(row.spotifyFollowers) }}
          </h2>
        </b-card>

        <b-card class="m-3">
          <h2>
            Social Accounts:
          </h2>

          <h2 class="m-2">
            <b-link :href="row.spotify" target="_blank" class="m-4 link">
              <i class="fa fa-spotify" />
            </b-link>

            <b-link :href="artistData.instagram" target="_blank" class="m-4 link">
              <b-icon icon="instagram" />
            </b-link>
          </h2>
        </b-card>

        <b-card class="m-3">
          <iframe
            :src="spotifyPlayer"
            width="100%"
            height="350"
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
  methods: {
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
  },
}
</script>

<style>

</style>
