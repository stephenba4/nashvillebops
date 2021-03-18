<template>
  <div class="justify-content-center pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <b-card>
        <b-img src="./../assets/nashvillebops.png" height="60" />

        <h2 class="m-2">
          BOP OF THE DAY
        </h2>

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
        <b-img src="./../assets/nashvillebops.png" height="60" />

        <h2 class="m-2">
          Nashville's 100 Hottest Pop Artists
        </h2>

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
          class="tables"
          @row-clicked="toArtistProfile"
        >
          <template #table-busy>
            <h4 class="text-center text-danger my-2">
              <b-spinner class="align-middle mr-3" />
              Loading...
            </h4>
          </template>

          <template #cell(position)="data">
            <h3>
              {{ data.item.position }}
            </h3>
          </template>

          <template #cell(artist)="data">
            <div>
              <b-img
                :src="data.item.img"
                width="60"
                rounded
              />
            </div>
            <div>
              <h6>
                {{ data.item.artist }}
              </h6>
            </div>
          </template>

          <template #head(artist)="">
            <h5>
              Artist
            </h5>
          </template>

          <template #cell(spotifyFollowers)="data">
            <div>
              <h5 class="text-center">
                {{ formatNumber(data.item.spotifyFollowers) }}
              </h5>
            </div>
          </template>

          <template #head(spotifyFollowers)="">
            <h5>
              <i class="fa fa-spotify" />
              Followers
            </h5>
          </template>
        </b-table>
      </b-card>

      <b-row>
        <b-col>
          <b-card class="mt-4">
            <h2>
              <i class="fa fa-spotify" />
              PLAYLIST
            </h2>

            <b-link
              href="https://open.spotify.com/playlist/58NEDLN8pRY27qU4zkWuZV"
              target="_blank"
              class="link"
            >
              <h3>Nashville Bops Next Up</h3>
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
