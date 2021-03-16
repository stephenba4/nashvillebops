<template>
  <div class="justify-content-center pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <b-card>
        <b-img src="./../assets/nashvillebops.png" height="100" />

        <h2>Bop Of The Day</h2>

        <iframe
          src="https://cdn.lightwidget.com/widgets/5863079d5e015aeba699277b8929c0e9.html"
          width="250"
          height="250"
          scrolling="yes"
          allowtransparency="true"
          class="lightwidget-widget"
          style="border:0;overflow:hidden;"
        />

        <h5 class="m-3">
          Instagram:
          <b-link href="https://www.instagram.com/nashvillebops/" target="_blank">
            @nashvillebops
          </b-link>
        </h5>
      </b-card>

      <b-card class="mt-4">
        <h2 class="ml-3 mr-3">
          Nashville Bops Roster
        </h2>
        <h6 class="m-3">
          Rising Nashville pop artists that have been featured on
          <b-link href="https://www.instagram.com/nashvillebops/" target="_blank">
            Nashville Bops Instagram
          </b-link>
          or
          <b-link href="https://open.spotify.com/playlist/58NEDLN8pRY27qU4zkWuZV" target="_blank">
            Nashville Bops Next Up Spotify Playlist
          </b-link>
        </h6>

        <h5 class="m-3">
          Total # of Artists: {{ spotifyData.length }}
        </h5>

        <b-form-group>
          <b-input-group size="sm" class="justify-content-center">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Search"
              style="max-width: 300px;"
            />
          </b-input-group>
        </b-form-group>

        <b-table
          :fields="fields"
          :items="spotifyData"
          :filter="filter"
          striped
          responsive
          bordered
          small
          :sort-by.sync="sortBy"
          :sort-desc="sortDesc"
          hover
          sticky-header="1000px"
          :busy="isBusy"
          @row-clicked="toArtistProfile"
        >
          <template #table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle" />
              <strong class="m-3">Loading...</strong>
            </div>
          </template>

          <template #cell(position)="data">
            <h2 class="mt-3">
              {{ data.item.position }}
            </h2>
          </template>

          <template #cell(artist)="data">
            <div>
              <b-img
                :src="data.item.img"
                width="60"
                rounded
              />
            </div>
            <div style="font-size: small">
              {{ data.item.artist }}
            </div>
          </template>

          <template #cell(spotifyFollowers)="data">
            <h4 class="mt-4">
              {{ formatNumber(data.item.spotifyFollowers) }}
            </h4>
          </template>
        </b-table>
      </b-card>

      <b-row>
        <b-col>
          <b-card class="mt-4">
            <h2>Spotify Playlist:</h2>

            <b-link href="https://open.spotify.com/playlist/58NEDLN8pRY27qU4zkWuZV" target="_blank">
              <h5>Nashville Bops Next Up</h5>
            </b-link>

            <iframe
              src="https://open.spotify.com/embed/playlist/58NEDLN8pRY27qU4zkWuZV"
              width="250"
              height="400"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NameService from '../services/NameService';

export default {
  name: 'ArtistChart',
  data() {
    return {
      filter: null,
      fields: [
        { key: 'position', label: '' },
        { key: 'artist' },
        { key: 'spotifyFollowers' },
      ],
      sortBy: 'spotifyFollowers',
      sortDesc: true,
      spotifyData: [],
      isBusy: true,
    }
  },
  computed: {
    ...mapGetters(['getArtistData']),
  },
  created() {
    NameService.get()
      .then((response) => {
        this.spotifyData = response.data
        this.isBusy = false
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    toArtistProfile(row) {
      this.$router.push({ name: 'Artist Profile', params: { row } });
    },
    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    },
  },
};
</script>
