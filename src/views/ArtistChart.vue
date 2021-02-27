<template>
  <div>
    <b-container fluid>
      <b-card class="m-1">
        <h3>
          Nashville Pop Artist Roster
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
          :filter="filter"
          striped
          responsive
          bordered
          sort-by="artist"
          large
          sticky-header="700px"
        >
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
            <b-card style="background-color: #FDA0D8;">
              <ArtistSpotify :artist="row.item.artist" />
            </b-card>
          </template>

          <template #cell(artist)="data">
            <div style="text-align: left;">
              <ArtistImage :artist="data.item.artist" />
            </div>
          </template>
        </b-table>
      </b-card>

      <b-card class="m-1">
        <iframe
          class="pl-2 pr-2"
          src="https://open.spotify.com/embed/playlist/58NEDLN8pRY27qU4zkWuZV"
          width="250"
          height="400"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <iframe
          src="https://cdn.lightwidget.com/widgets/a195d47648fb579aa192a3f6f892e692.html"
          scrolling="no"
          allowtransparency="true"
          class="lightwidget-widget pl-2 pr-2"
          style="border:0;overflow:hidden;"
          width="250"
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
import ArtistImage from '@/components/ArtistImage.vue';

export default {
  components: {
    ArtistSpotify,
    ArtistImage,
  },
  data() {
    return {
      filter: null,
      artistData: [],
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
  },
};
</script>
