<template>
  <div class="justify-content-center pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <div>
        <div class="m-2">
          <b-img src="./../assets/artistProfile.png" height="30" />
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
      </div>

      <b-card class="mt-4">
        <h4>
          <i class="fa fa-spotify" />

          <b-img src="./../assets/followers.png" height="28" />
        </h4>

        <h4>
          {{ formatNumber(spotifyFollowers) }}
        </h4>

        <br>

        <div>
          <b-img src="./../assets/spotify.png" height="28" />

          <b-img src="./../assets/account.png" height="28" />
        </div>

        <h4 class="mt-3">
          <b-link :href="spotify" target="_blank" class="link">
            <i class="fa fa-spotify" />
          </b-link>
        </h4>

        <br>

        <h4>
          <i class="fa fa-spotify" />

          <b-img src="./../assets/topTracks.png" height="28" />
        </h4>

        <iframe
          :src="spotifyPlayer"
          width="250"
          height="300"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          class="mt-2 rounded-lg"
        />
      </b-card>
    </b-container>
  </div>
</template>

<script>

export default {
  name: 'ArtistProfile',
  data() {
    return {
      spotifyPlayer: '',
      id: '',
      img: '',
      artist: '',
      spotifyFollowers: '',
      spotify: '',
    }
  },
  mounted() {
    this.id = this.$route.query.id || ''
    this.img = this.$route.query.img || ''
    this.artist = this.$route.query.artist || ''
    this.spotifyFollowers = this.$route.query.spotifyFollowers || ''
    this.spotify = this.$route.query.spotify || ''
    this.spotifyPlayer = `https://open.spotify.com/embed/artist/${this.id}`
  },
  methods: {
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
  },
}
</script>
