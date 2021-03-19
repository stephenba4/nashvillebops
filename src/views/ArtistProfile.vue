<template>
  <div class="justify-content-center pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <b-card>
        <div class="m-2">
          <b-img src="./../assets/artistProfile.png" height="32" />
        </div>

        <b-img
          :src="img"
          width="250"
          rounded
          class="mt-2"
        />
        <h2 class="m-3">
          {{ artist }}
        </h2>

        <b-card class="m-3">
          <h4 id="gumfont">
            <i class="fa fa-spotify" />
            <b-img src="./../assets/followers.png" height="28" />
          </h4>
          <h4>
            {{ formatNumber(spotifyFollowers) }}
          </h4>
        </b-card>

        <b-card class="m-3">
          <div>
            <b-img src="./../assets/socialAccounts.png" height="28" />
          </div>

          <h4 class="m-2">
            <b-link :href="spotify" target="_blank" class="m-2 link">
              <i class="fa fa-spotify" />
            </b-link>

            <b-link :href="artistData.instagram" target="_blank" class="m-2 link">
              <b-icon icon="instagram" />
            </b-link>
          </h4>
        </b-card>

        <b-card class="m-3">
          <h4>
            <i class="fa fa-spotify" />
            <b-img src="./../assets/topTracks.png" height="28" />
          </h4>
          <iframe
            :src="spotifyPlayer"
            width="100%"
            height="350"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            class="mt-2 rounded-lg"
          />
        </b-card>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ArtistProfile',
  data() {
    return {
      artistData: {},
      spotifyPlayer: '',
      id: '',
      img: '',
      artist: '',
      spotifyFollowers: '',
      spotify: '',
    }
  },
  computed: {
    ...mapGetters(['getSingleArtistData']),
  },
  mounted() {
    this.id = this.$route.query.id || ''
    this.img = this.$route.query.img || ''
    this.artist = this.$route.query.artist || ''
    this.spotifyFollowers = this.$route.query.spotifyFollowers || ''
    this.spotify = this.$route.query.spotify || ''
    this.artistData = this.getSingleArtistData(this.id)
    this.spotifyPlayer = `https://open.spotify.com/embed/artist/${this.id}`
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
