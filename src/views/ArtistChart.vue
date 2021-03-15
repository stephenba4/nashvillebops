<template>
  <div class="justify-content-center pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <b-card>
        <h1 class="ml-3 mr-3">
          <b-img src="./../assets/nashvillebops.png" height="100" />
          Nashville Bops Roster
        </h1>

        <h6 class="m-3">
          A list (and profiles) of active pop
          artists from Nashville in order of Spotify Followers.
          Each has been featured on Nashville
          Bops Next Up playlist or Nashville Bops Instagram.
        </h6>

        <h5 class="m-3">
          Total # of Artists: {{ getArtistData.length }}
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
          @row-clicked="toArtistProfile"
        >
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
            <h5>Spotify Playlist:</h5>
            <h5>Nashville Bops Next Up</h5>
            <iframe
              src="https://open.spotify.com/embed/playlist/58NEDLN8pRY27qU4zkWuZV"
              width="250"
              height="400"
              frameborder="1"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </b-card>
        </b-col>

        <b-col>
          <b-card class="mt-4">
            <h5>Instagram:</h5>
            <h5>@nashvillebops</h5>
            <iframe
              src="https://cdn.lightwidget.com/widgets/8c110fa7bda054799ea94d57093d0740.html"
              width="250"
              height="400"
              scrolling="yes"
              allowtransparency="true"
              class="lightwidget-widget"
              style="border:0;overflow:hidden;"
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
    }
  },
  computed: {
    ...mapGetters(['getArtistData']),
  },
  created() {
    NameService.get()
      .then((response) => {
        this.spotifyData = response.data
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
