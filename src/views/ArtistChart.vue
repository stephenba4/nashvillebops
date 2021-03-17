<template>
  <div class="justify-content-center pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <b-card>
        <b-img src="./../assets/nashvillebops.png" height="80" />

        <h1>B🍩p Of The Day</h1>

        <iframe
          src="https://cdn.lightwidget.com/widgets/5863079d5e015aeba699277b8929c0e9.html"
          width="250"
          height="250"
          scrolling="yes"
          allowtransparency="true"
          class="lightwidget-widget mt-2"
          style="border:0;overflow:hidden;"
        />

        <h3 class="m-3">
          <b-icon icon="instagram" />
          <b-link class="link" href="https://www.instagram.com/nashvillebops/" target="_blank">
            @nashvillebops
          </b-link>
        </h3>
      </b-card>

      <b-card class="mt-4">
        <h1 class="ml-2 mr-2">
          Nashville B🍩ps 💯
        </h1>
        <h3 class="m-2">
          100 of the hottest pop artists from Nashville 🔥
        </h3>

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
            <h1 class="mt-3">
              {{ data.item.position }}
            </h1>
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
              <h4>
                {{ data.item.artist }}
              </h4>
            </div>
          </template>

          <template #head(artist)="">
            <h4>
              Artist
            </h4>
          </template>

          <template #cell(spotifyFollowers)="data">
            <h3 class="mt-4">
              {{ formatNumber(data.item.spotifyFollowers) }}
            </h3>
          </template>

          <template #head(spotifyFollowers)="">
            <h4>
              <i class="fa fa-spotify mr-2" />Followers
            </h4>
          </template>
        </b-table>
      </b-card>

      <b-row>
        <b-col>
          <b-card class="mt-4">
            <h1>
              <i class="fa fa-spotify m-2" />
              Playlist
            </h1>

            <b-link
              href="https://open.spotify.com/playlist/58NEDLN8pRY27qU4zkWuZV"
              target="_blank"
              class="link"
            >
              <h3>Nashville B🍩ps Next Up</h3>
            </b-link>

            <iframe
              src="https://open.spotify.com/embed/playlist/58NEDLN8pRY27qU4zkWuZV"
              width="250"
              height="400"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              class="mt-2"
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
        this.spotifyData = response.data.slice(0, 100)
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
};
</script>
