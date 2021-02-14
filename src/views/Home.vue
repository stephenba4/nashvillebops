<template>
  <div class="home">
    <b-container>
      <ArtistTable msg="Nashville Bops" />
    </b-container>
  </div>
</template>

<script>
import ArtistTable from '@/components/ArtistTable.vue';

export default {
  components: {
    ArtistTable,
  },
};
</script>
