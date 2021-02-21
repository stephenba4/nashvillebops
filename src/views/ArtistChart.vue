<template>
  <div>
    <b-container fluid>
      <b-card class="m-1">
        <h3>
          a place to discover the dopest nashville pop artists
        </h3>
        <h3>
          artists: {{ rows }}
        </h3>

        <b-form-group>
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Search"
            />

            <b-input-group-append>
              <b-button variant="primary" :disabled="!filter" @click="filter = ''">
                Clear
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>

        <b-table
          :fields="fields"
          :items="artistData"
          :per-page="perPage"
          :current-page="currentPage"
          :filter="filter"
          striped
          responsive
          bordered
          extra-large
          sort-by="artist"
        >
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
            <b-card>
              <ArtistSpotify :artist="row.item.artist" />
            </b-card>
          </template>

          <template #cell(artist)="data">
            <b-img
              v-if="data.value === 'Quinn Lewis'"
              src="../assets/Quinn Lewis.png"
              width="100"
              rounded
            />

            <b-img
              v-if="data.value === 'somegirlnamedanna'"
              src="../assets/somegirlnamedanna.png"
              width="100"
              rounded
            />
            <div>
              {{ data.value }}
            </div>
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          style="float: right;"
        />
      </b-card>

      <b-card class="m-1">
        <iframe
          class="pl-2 pr-2"
          src="https://open.spotify.com/embed/playlist/58NEDLN8pRY27qU4zkWuZV"
          width="300"
          height="400"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <iframe
          src="//lightwidget.com/widgets/a195d47648fb579aa192a3f6f892e692.html"
          scrolling="no"
          allowtransparency="true"
          class="lightwidget-widget pl-2 pr-2"
          style="border:0;overflow:hidden;"
          width="300"
          height="400"
        />
      </b-card>

      <p>
        email: stephen@nashvillebops.com
      </p>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ArtistSpotify from '@/components/ArtistSpotify.vue';

export default {
  components: {
    ArtistSpotify,
  },
  data() {
    return {
      perPage: 12,
      currentPage: 1,
      filter: null,
      artistData: [],
      rows: null,
      fields: [
        { key: 'artist', sortable: true },
        { key: 'listen', label: '' },
      ],
    }
  },
  computed: {
    ...mapGetters(['getArtistData']),
  },
  mounted() {
    this.artistData = this.getArtistData;
    this.rows = this.getArtistData.length
  },
  methods: {
    consoleLog(input) {
      console.log(input);
    },
  },
};
</script>
