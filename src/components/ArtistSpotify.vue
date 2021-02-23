<template>
  <div>
    <iframe
      v-if="artist === 'somegirlnamedanna'"
      src="https://open.spotify.com/embed/artist/3uS3te8WcySMktA5XGyyM3"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Quinn Lewis'"
      src="https://open.spotify.com/embed/artist/5n69lhq7BLWqnSjJgNPRh4"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Dylan Russell'"
      src="https://open.spotify.com/embed/artist/1ByyPIge9NSNxLZ24kf6nk"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Mokita'"
      src="https://open.spotify.com/embed/artist/3sKeaby6GMSJWgYueZaSjE"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Callen'"
      src="https://open.spotify.com/embed/artist/03ECCGHAyJFGt30gftQKj2"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist ==='Jared Minnix'"
      src="https://open.spotify.com/embed/artist/2GXNpaddQJ98IyslS7fB5S"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Drew Schueler'"
      src="https://open.spotify.com/embed/artist/1F2PBVC03y1a9PCszIxJhI"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Clinton John'"
      src="https://open.spotify.com/embed/artist/4KSOZJxttt2OFVniA7yZxR"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Lost Stars'"
      src="https://open.spotify.com/embed/artist/22LWBhZGE9ycuFtLV6jJYG"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Kayla Nettles'"
      src="https://open.spotify.com/embed/artist/3EZakRdUrrmRH77bAmehLg"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Lackhoney'"
      src="https://open.spotify.com/embed/artist/4lPCP0EblrGCOJwEAM9WTh"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Brooke'"
      src="https://open.spotify.com/embed/artist/5jYtPJp5sGTc3amH9E5cdq"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Gatsby'"
      src="https://open.spotify.com/embed/artist/03YSt5Q4dXtwqB4P5m8ca0"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Jon Santana'"
      src="https://open.spotify.com/embed/artist/05XxXeBmy0Kge0WdgDfj05"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'James Droll'"
      src="https://open.spotify.com/embed/artist/3lPtB78D5puSWQ7ltAafQw"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Notelle'"
      src="https://open.spotify.com/embed/artist/2QH237xSFhmfZJHrRulT7U"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Bryce Green'"
      src="https://open.spotify.com/embed/artist/0dYp8xHqG4qZX3G7NxSbbc"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Sansol the Artist'"
      src="https://open.spotify.com/embed/artist/5AXMzlQxmVl6FKVqdxzs44"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Abigail Rose'"
      src="https://open.spotify.com/embed/artist/6uXHv7VdgIW1OdLgHy1zCN"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'Talia Stewart'"
      src="https://open.spotify.com/embed/artist/7iymtCFEZNcH49Q53HJMFk"
      width="230"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    />
    <iframe
      v-if="artist === 'MILKK'"
      src="https://open.spotify.com/embed/artist/4zhJqpHEEaLhYIY0hAFd9h"
      width="230"
      height="250"
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
