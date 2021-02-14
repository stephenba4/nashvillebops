<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container>
      <b-table
        :fields="fields"
        :items="items"
        caption-top
        striped
        responsive="sm"
        bordered
        small
      >
        <template #table-caption>
          Spotify Monthly Listeners
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
import monthlyListenerData from '@/data/MonthlyListenerData'

export default {
  name: 'ArtistTable',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      fields: monthlyListenerData.fields,
      items: monthlyListenerData.items,
    }
  },
};
</script>
