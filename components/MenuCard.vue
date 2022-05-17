<template>
  <div class="event-menu" style="width: 18rem">
    <h4 class="event-menu-title">{{ name }}</h4>
    <div
      class="event-menu-img-top event-menu-image"
      :style="{ 'background-image': 'url(' + img + ')' }"
    ></div>
    <div class="event-menu-body">
      <nuxt-link :to="`/events/${season}`">
        <div class="btn btn-primary btn-details mt-2 text-white">See details...</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuCard',
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/events/${this.season}`)
    },
  },
}
</script>

<style scoped>
.event-menu {
  border: 4px solid rgb(136, 24, 24);
}
.btn-details {
  background-color: rgb(220, 110, 110);
  border: 2px solid rgb(136, 24, 24);
  display: block;
  margin: 0 auto;
  width: 145px;
}
.event-menu-title{
  text-align: center;
  color: rgb(136, 24, 24);
}
.event-menu-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
}
</style>