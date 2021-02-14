<template>
  <div class="home">
    <ArtistTable msg="Nashville Bops" />
  </div>
</template>

<script>
import ArtistTable from '@/components/ArtistTable.vue';

export default {
  name: 'Home',
  components: {
    ArtistTable,
  },
};
</script>
