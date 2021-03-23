<template>
  <div class="justify-content-center pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <b-card>
        <div class="m-2">
          <b-img src="./../assets/bopOfTheDay.png" height="36" />
        </div>

        <iframe
          src="https://cdn.lightwidget.com/widgets/5863079d5e015aeba699277b8929c0e9.html"
          width="250"
          height="250"
          scrolling="yes"
          allowtransparency="true"
          class="lightwidget-widget mt-2 rounded-lg"
          style="border:0;overflow:hidden;"
        />
      </b-card>

      <b-card class="mt-4">
        <div class="mt-2 mb-2">
          <b-img src="./../assets/100HottestPop.png" height="32" />
          <b-img src="./../assets/artists.png" height="32" />
          <b-img src="./../assets/inNashville.png" height="32" />
          <p class="mt-2">
            *Click an artist to view their profile
          </p>
        </div>

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

      <b-row>
        <b-col>
          <b-card class="mt-4">
            <h2>
              <i class="fa fa-spotify" />
              <b-img src="./../assets/playlist.png" height="36" />
            </h2>

            <iframe
              src="https://open.spotify.com/embed/playlist/58NEDLN8pRY27qU4zkWuZV"
              width="250"
              height="400"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              class="mt-2 rounded-lg"
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
  name: 'Home',
  data() {
    return {
      filter: null,
      fields: [
        { key: 'position', label: '#' },
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
