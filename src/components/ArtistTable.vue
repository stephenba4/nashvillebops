<template>
  <div>
    <b-container>
      <b-table
        :fields="monthlyListenerFields"
        :items="monthlyListenerItems"
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
          Spotify Monthly Listeners
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
    }
  },
  computed: {
    rows() {
      return this.monthlyListenerItems.length;
    },
    monthlyListenerFields() {
      return this.getMonthlyListenerFields;
    },
    monthlyListenerItems() {
      return this.getMonthlyListenerItems;
    },
    ...mapGetters(['getMonthlyListenerFields', 'getMonthlyListenerItems']),
  },
  methods: {
    redirect(_, i) {
      this.$router.push(`/artistDetails/${i}`)
    },
  },
};
</script>
