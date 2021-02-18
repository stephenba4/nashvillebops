<template>
  <div>
    <b-container>
      <b-img src="./../assets/nelly.png" height="150" class="m-3" />
      <p style="border-top: 1px solid grey">
        Artist Id: {{ id }}
      </p>
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
