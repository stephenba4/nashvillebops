<template>
  <div>
    <iframe
      v-if="artist === 'somegirlnamedanna'"
      src="https://open.spotify.com/embed/artist/3uS3te8WcySMktA5XGyyM3"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Quinn Lewis'"
      src="https://open.spotify.com/embed/artist/5n69lhq7BLWqnSjJgNPRh4"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Dylan Russell'"
      src="https://open.spotify.com/embed/artist/1ByyPIge9NSNxLZ24kf6nk"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Mokita'"
      src="https://open.spotify.com/embed/artist/3sKeaby6GMSJWgYueZaSjE"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Callen'"
      src="https://open.spotify.com/embed/artist/03ECCGHAyJFGt30gftQKj2"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist ==='Jared Minnix'"
      src="https://open.spotify.com/embed/artist/2GXNpaddQJ98IyslS7fB5S"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Drew Scheuler'"
      src="https://open.spotify.com/embed/artist/1F2PBVC03y1a9PCszIxJhI"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Clinton John'"
      src="https://open.spotify.com/embed/artist/4KSOZJxttt2OFVniA7yZxR"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Lost Stars'"
      src="https://open.spotify.com/embed/artist/22LWBhZGE9ycuFtLV6jJYG"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
  </div>
</template>

<script>
export default {
  props: {
    artist: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>

</style>
