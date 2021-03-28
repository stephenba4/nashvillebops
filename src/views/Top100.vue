<template>
  <div>
    <div>
      <div>
        <b-img src="./../assets/nashvillebops.png" height="50" />
        <b-img src="./../assets/top100.png" height="32" />
      </div>

      <p class="mt-2">
        Top 100 Nashville pop artists previously featured as Bop Of The Day
      </p>

      <p>
        *Click an artist to listen to their top songs
      </p>

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
        :items="top100Data"
        :filter="filter"
        striped
        responsive
        bordered
        small
        :sort-by.sync="sortBy"
        :sort-desc="sortDesc"
        hover
        sticky-header="1000px"
        :busy="isTop100Busy"
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
  name: 'Top100',
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
    }
  },
  computed: {
    ...mapState(['top100Data', 'isTop100Busy']),
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
