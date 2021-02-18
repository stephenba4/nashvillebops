<template>
  <div>
    <b-container>
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
        stacked="md"
        @row-clicked="redirect"
      >
        <template #table-caption>
          A curated chart for the hottest pop artists in Nashville
          <b-form-group
            class="w-25 m-1"
            style="float: right;"
          >
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Type to Search"
              />

              <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">
                  Clear
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </template>
      </b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        style="float: right;"
        class="m-1"
      />
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
    redirect(row) {
      this.$router.push({ name: 'Artist Details', params: { id: row.id } })
    },
  },
};
</script>
