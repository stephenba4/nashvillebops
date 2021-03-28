<template>
  <div class=" pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <b-card>
        <div>
          <b-img src="./../assets/aboutNashville.png" height="30" />
          <b-img src="./../assets/bops.png" height="30" />
        </div>
        <br>
        <h5 class="header" style="font-weight: bold;">
          Instagram
        </h5>
        Everyday we feature a
        <b-link class="link" href="https://www.instagram.com/nashvillebops/" target="_blank">
          Bop Of The Day
        </b-link>
        by an up and coming Nashville pop artist.
        <br>
        <br>
        <h5 class="header" style="font-weight: bold;">
          Spotify
        </h5>
        Currently we have two playlists.
        <b-link
          href="https://open.spotify.com/playlist/2RAgrtMEF6ZTTg2jh3FNY2"
          target="_blank"
          class="link"
        >
          Nashville Bops Weekly Radar
        </b-link>
        is updated weekly
        with 10 rising Nashville pop songs.
        And
        <b-link
          href="https://open.spotify.com/playlist/58NEDLN8pRY27qU4zkWuZV"
          target="_blank"
          class="link"
        >
          Nashville Bops Monthly Recap
        </b-link>
        is updated monthly
        with 15 Nashville pop
        songs featured
        as Bop Of The Day last month.
        <br>
        <br>
        <h5 class="header" style="font-weight: bold;">
          Website
        </h5>
        Along with showing
        the "Bop Of The Day" and our Spotify playlists,
        we have an artist chart showing the top 100 Nashville pop
        artists previously featured as Bop Of The Day and an
        artist chart for each of the playlists. You can click an
        artist to listen to their top songs.
      </b-card>
      <b-card class="mt-4">
        <div>
          <b-img src="./../assets/songAndArtist.png" height="30" />
          <b-img src="./../assets/submissions.png" height="30" />
        </div>
        <br>
        If you would like us to feature your song
        or an artist, please send the information
        to stephen@nashvillebops.com.
      </b-card>
      <b-card class="mt-4">
        <div>
          <b-img src="./../assets/connectWithUs.png" height="30" />
        </div>
        <br>
        Nashville Bops is growing, and we aspire to
        support Nashville pop artists in new ways.
        We want your feedback, so if you
        have any suggestions or ideas, please send
        an email to stephen@nashvillebops.com.
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>
