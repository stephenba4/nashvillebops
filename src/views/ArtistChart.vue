<template>
  <div class="justify-content-center pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <b-card>
        <h1 class="m-3">
          <b-img src="./../assets/nashvillebops.png" height="100" />
          Nashville Bops Roster
        </h1>

        <h6 class="m-3">
          A list of active pop artists from Nashville in order of Spotify Followers. Each has been featured on Nashville
          Bops Next Up playlist or Nashville Bops Instagram.
        </h6>

        <h6 class="m-3">
          Total # of Artists: {{ getArtistData.length }}
        </h6>

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
          :items="getArtistData"
          :filter="filter"
          striped
          responsive
          bordered
          :sort-by.sync="sortBy"
          :sort-desc="sortDesc"
          hover
          sticky-header="700px"
          @row-clicked="toArtistProfile"
        >
          <template #cell(position)="row">
            <h3 class="mt-2">
              {{ row.item.position }}
            </h3>
          </template>

          <template #cell(artist)="data">
            <div style="text-align: left;">
              <b-img
                :src="data.item.img"
                width="60"
                rounded
              />
              {{ data.item.artist }}
            </div>
          </template>

          <template #cell(spotifyFollowers)="data">
            <h3 class="m-2">
              {{ data.item.spotifyFollowers }}
            </h3>
          </template>

          <template #cell(listen)="row">
            <b-button
              variant="success"
              size="sm"
              @click="row.toggleDetails"
            >
              {{ row.detailsShowing ? 'Hide' : 'Listen' }}
            </b-button>
          </template>

          <template #row-details="row">
            <b-card style="background-color: #FDA0D8;">
              <div>
                <iframe
                  :src="row.item.spotifyPlayer"
                  width="100%"
                  height="250"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                />
              </div>
            </b-card>
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
              src="https://cdn.lightwidget.com/widgets/a195d47648fb579aa192a3f6f892e692.html"
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

      <b-card class="mt-4">
        <p class="m-2">
          For song submissions and other inquiries email: stephen@nashvillebops.com
        </p>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ArtistChart',
  data() {
    return {
      filter: null,
      fields: [
        { key: 'position', sortable: true },
        { key: 'artist', sortable: true },
        { key: 'spotifyFollowers', sortable: true },
        { key: 'listen', label: '' },
      ],
      sortBy: 'spotifyFollowers',
      sortDesc: true,
    }
  },
  computed: {
    ...mapGetters(['getArtistData']),
  },
  methods: {
    toArtistProfile(row) {
      this.$router.push({ name: 'Artist Profile', params: { row } });
    },
  },
};
</script>
