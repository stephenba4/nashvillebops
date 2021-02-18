<template>
  <div>
    <b-container>
      <b-img src="./../assets/nelly.png" height="150" />
      <p>{{ id }}</p>
    </b-container>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      default: '',
    },
  },
}
</script>
