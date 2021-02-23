<template>
  <div>
    <b-img
      v-if="artist === 'somegirlnamedanna'"
      src="../assets/somegirlnamedanna.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Quinn Lewis'"
      src="../assets/Quinn Lewis.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Dylan Russell'"
      src="../assets/Dylan Russell.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Mokita'"
      src="../assets/Mokita.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Callen'"
      src="../assets/Callen.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Jared Minnix'"
      src="../assets/Jared Minnix.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Drew Schueler'"
      src="../assets/Drew Schueler.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Clinton John'"
      src="../assets/Clinton John.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Lost Stars'"
      src="../assets/Lost Stars.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Kayla Nettles'"
      src="../assets/Kayla Nettles.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Lackhoney'"
      src="../assets/Lackhoney.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Brooke'"
      src="../assets/Brooke.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Gatsby'"
      src="../assets/Gatsby.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Jon Santana'"
      src="../assets/Jon Santana.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'James Droll'"
      src="../assets/James Droll.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Notelle'"
      src="../assets/Notelle.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Bryce Green'"
      src="../assets/Bryce Green.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Sansol the Artist'"
      src="../assets/Sansol the Artist.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Abigail Rose'"
      src="../assets/Abigail Rose.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'Talia Stewart'"
      src="../assets/Talia Stewart.png"
      width="60"
      rounded
    />
    <b-img
      v-if="artist === 'MILKK'"
      src="../assets/MILKK.png"
      width="60"
      rounded
    />
    {{ artist }}
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
