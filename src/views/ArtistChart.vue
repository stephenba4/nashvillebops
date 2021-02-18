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
        hover
        stacked="md"
        class="m-3"
        @row-clicked="redirect"
      >
        <template #table-caption>
          <h3 style="display: inline;">
            The hottest pop artists in Nashville
          </h3>

          <b-form-group class="w-25" style="float: right;">
            <b-input-group size="sm">
              <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Search"
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
