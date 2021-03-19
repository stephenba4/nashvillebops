<template>
  <div class=" pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <b-card>
        <div class="mt-2">
          <b-img src="./../assets/aboutNashville.png" height="32" />
          <b-img src="./../assets/bops.png" height="32" />
        </div>
        <br>
        <h5>
          <b-icon icon="instagram" />
          <span class="header" style="font-weight: bold;">
            Instagram
          </span>
        </h5>
        Everyday we feature a
        <b-link class="link" href="https://www.instagram.com/nashvillebops/" target="_blank">
          Bop Of The Day
        </b-link>
        by up and coming Nashville pop artists.
        <br>
        <br>

        <h5>
          <i class="fa fa-spotify mr-1" />
          <span class="header" style="font-weight: bold;">Spotify</span>
        </h5>
        Every month we update
        the
        <b-link
          href="https://open.spotify.com/playlist/58NEDLN8pRY27qU4zkWuZV"
          target="_blank"
          class="link"
        >
          Nashville Bops Next Up
        </b-link>
        playlist with 15
        new songs from our Instagram.
        <br>
        <br>
        <h5 class="header" style="font-weight: bold;">
          Website
        </h5>
        Along with showing
        the "Bop Of The Day" and our Spotify playlist,
        we have the "100 Hottest Pop Artists In Nashville" chart
        with artists we have had the opportunity to feature on
        our Instagram. Each artist has a profile
        you can view to listen to their music and
        learn more about them.
        <br>
        <br>
        <div>
          <b-img src="./../assets/songAndArtist.png" height="32" />
          <b-img src="./../assets/submissions.png" height="32" />
        </div>
        <br>
        If you would like us to feature your song
        or an artist, please send the information
        to stephen@nashvillebops.com.
        <br>
        <br>
        <div>
          <b-img src="./../assets/connectWithUs.png" height="32" />
        </div>
        <br>
        Nashville Bops is growing, and we aspire to
        support Nashville pop artists in new ways.
        We want your feedback, so if you
        have any suggestions or ideas, please send
        an email to stephen@nashvillebops.com.
        <br>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>
