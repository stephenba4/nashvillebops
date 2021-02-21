<template>
  <div>
    <b-container fluid>
      <b-card class="m-1">
        <h3>
          Nashville Bops Roll Call
        </h3>
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

        <b-table
          :fields="fields"
          :items="data"
          :per-page="perPage"
          :current-page="currentPage"
          :filter="filter"
          striped
          responsive
          bordered
          small
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
      perPage: 10,
      currentPage: 1,
      filter: null,
      data: [],
      rows: null,
      fields: [
        { key: 'artist', sortable: true },
        { key: 'listen', label: '' },
      ],
    }
  },
  computed: {
    ...mapGetters(['getData']),
  },
  mounted() {
    this.data = this.getData;
    this.rows = this.getData.length
  },
};
</script>
