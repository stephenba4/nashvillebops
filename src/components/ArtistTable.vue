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
      fields: [
        { key: 'number', sortable: true },
        { key: 'artist', sortable: true },
        { key: 'monthly_listeners', sortable: true },
      ],
      items: [
        { number: 1, artist: 'Nelly', monthly_listeners: 100 },
        { number: 2, artist: 'Britney Spears', monthly_listeners: 90 },
        { number: 3, artist: 'Chris Brown', monthly_listeners: 80 },
      ],
    }
  },
};
</script>
