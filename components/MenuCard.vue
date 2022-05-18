<template>
  <div class="rounded event-menu-img-top shadow-lg event-menu-image" style="width: 23rem" :style="{ 'background-image': 'url(' + img + ')' }">
    <div class="btn-div">
      <nuxt-link :to="`/events/${season}`">
        <h4 class="event-menu-title mt-1">{{ name }}</h4>
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
.event-menu-image:hover {
  border: 3px solid rgba(192, 94, 94, 0.85);
}
.btn-details {
  background-color: rgb(136, 24, 24);
}
.event-menu-title{
  text-align: left;
  color: white;
  text-shadow: 2px 2px 4px black;
  position: relative;
  top: 50px;
  left: 50px
}
.event-menu-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
}
</style>