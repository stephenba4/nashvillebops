<template>
  <div class="justify-content-center pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <b-card class="mt-4">
        <div>
          <b-img src="./../assets/nashvillebops.png" height="32" />
          <b-img src="./../assets/weekly.png" height="32" />
          <b-img src="./../assets/radar.png" height="32" />
        </div>

        <p class="mt-2">
          10 rising Nashville pop artists. Updated weekly.
        </p>

        <p>
          *Click an artist to view their profile
        </p>

        <b-table
          :fields="fields"
          :items="weeklyRadarData"
          striped
          responsive
          bordered
          small
          :sort-by.sync="sortBy"
          :sort-desc="sortDesc"
          hover
          sticky-header="1000px"
          :busy="isBusy"
          class="tables"
          @row-clicked="toArtistProfile"
        >
          <template #table-busy>
            <h4 class="text-center text-secondary my-2">
              <b-spinner class="align-middle mr-3" />
              Loading...
            </h4>
          </template>

          <template #cell(position)="data">
            <h6>
              {{ data.item.position }}
            </h6>
          </template>

          <template #cell(artist)="data">
            <div class="mt-2">
              <b-img
                :src="data.item.img"
                width="50"
                rounded
              />
            </div>
            <div class="mt-1">
              <h6>
                <router-link
                  class="link"
                  :to="{
                    name: 'Artist Profile',
                    query: {
                      id: data.item.id,
                      img: data.item.img,
                      artist: data.item.artist,
                      spotifyFollowers: data.item.spotifyFollowers,
                      spotify: data.item.spotify,
                    },
                  }"
                >
                  {{ data.item.artist }}
                </router-link>
              </h6>
            </div>
          </template>

          <template #head(artist)="">
            Artist
          </template>

          <template #cell(spotifyFollowers)="data">
            <div>
              <h6 class="text-center">
                {{ formatNumber(data.item.spotifyFollowers) }}
              </h6>
            </div>
          </template>

          <template #head(spotifyFollowers)="">
            <i class="fa fa-spotify" />
            Followers
          </template>
        </b-table>
      </b-card>

      <b-card class="mt-4">
        <h2>
          <i class="fa fa-spotify" />
          <b-img src="./../assets/playlist.png" height="36" />
        </h2>

        <iframe
          src="https://open.spotify.com/embed/playlist/2RAgrtMEF6ZTTg2jh3FNY2"
          width="250"
          height="400"
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
import SpotifyService from '../services/SpotifyService'

export default {
  name: 'WeeklyRadar',
  data() {
    return {
      fields: [
        { key: 'position', label: '#' },
        { key: 'artist' },
        { key: 'spotifyFollowers' },
      ],
      sortBy: 'spotifyFollowers',
      sortDesc: true,
      weeklyRadarData: [],
      isBusy: true,
    }
  },
  created() {
    SpotifyService.getWeeklyRadar()
      .then((response) => {
        this.weeklyRadarData = response.data
        this.isBusy = false
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    toArtistProfile(row) {
      this.$router.push({
        name: 'Artist Profile',
        query: {
          id: row.id,
          img: row.img,
          artist: row.artist,
          spotifyFollowers: row.spotifyFollowers,
          spotify: row.spotify,
        },
      });
    },
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
  },
}
</script>
