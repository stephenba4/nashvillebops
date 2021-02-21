<template>
  <div>
    <b-container fluid>
      <b-card class="m-1">
        <h3>
          Artists: {{ rows }}
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

        <!-- add this prop to b-table to enable details page: @row-clicked="toArtistDetails" -->
        <b-table
          :fields="fakeData.artistChartFields"
          :items="fakeData.artistChartItems"
          :per-page="perPage"
          :current-page="currentPage"
          :filter="filter"
          caption-top
          striped
          responsive
          bordered
          small
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

          <template #row-details="">
            <b-card>
              <iframe
                src="https://open.spotify.com/embed/artist/3uS3te8WcySMktA5XGyyM3"
                width="300"
                height="380"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
              />
            </b-card>
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
          class="m-1"
          src="https://open.spotify.com/embed/playlist/58NEDLN8pRY27qU4zkWuZV"
          width="300"
          height="400"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
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

export default {
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      filter: null,
      fakeData: {},
      rows: null,
    }
  },
  computed: {
    ...mapGetters(['getFakeData']),
  },
  mounted() {
    this.fakeData = this.getFakeData;
    this.rows = this.getFakeData.artistChartItems.length
  },
  methods: {
    toArtistDetails(row) {
      this.$router.push({ name: 'Artist Details', params: { id: row.id, artist: row.artist } })
    },
  },
};
</script>
