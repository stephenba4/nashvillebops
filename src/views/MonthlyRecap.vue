<template>
  <div>
    <div>
      <div>
        <b-img src="./../assets/nashvillebops.png" height="50" />
        <b-img src="./../assets/monthly.png" height="32" />
        <b-img src="./../assets/recap.png" height="32" />
      </div>

      <p class="mt-2">
        15 Nashville pop songs featured as Bop Of The Day last month
      </p>

      <iframe
        src="https://open.spotify.com/embed/playlist/58NEDLN8pRY27qU4zkWuZV"
        width="250"
        height="300"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        class="rounded-lg"
      />
    </div>

    <div class="mt-4">
      <div>
        <b-img src="./../assets/artistChart.png" height="32" />
      </div>

      <p class="mt-2">
        *Click an artist to listen to their top songs
      </p>

      <b-table
        :fields="fields"
        :items="monthlyRecapData"
        striped
        responsive
        bordered
        small
        :sort-by.sync="sortBy"
        :sort-desc="sortDesc"
        hover
        sticky-header="800px"
        :busy="isMonthlyRecapBusy"
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
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MonthlyRecap',
  data() {
    return {
      fields: [
        { key: 'position', label: '#' },
        { key: 'artist' },
        { key: 'spotifyFollowers' },
      ],
      sortBy: 'spotifyFollowers',
      sortDesc: true,
    }
  },
  computed: {
    ...mapState(['monthlyRecapData', 'isMonthlyRecapBusy']),
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
