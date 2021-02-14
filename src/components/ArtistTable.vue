<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container>
      <b-table :items="items" />
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
      items: [
        { number: 1, artist: 'Nelly', monthlyListeners: 100 },
        { number: 2, artist: 'Britney Spears', monthlyListeners: 90 },
        { number: 3, artist: 'Chris Brown', monthlyListeners: 80 },
      ],
    };
  },
};
</script>
