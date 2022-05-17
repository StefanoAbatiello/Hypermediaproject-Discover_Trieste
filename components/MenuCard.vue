<template>
  <div class="event-menu" style="width: 18rem">
    <div
      class="event-menu-img-top event-menu-image"
      :style="{ 'background-image': 'url(' + img + ')' }"
    ></div>
    <div class="event-menu-body">
      <h5 class="event-menu-title">{{ name }}</h5>
            <nuxt-link :to="`/events/${season}`">
        <div class="btn btn-primary btn-orange">See More</div>
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
  border: 4px solid lightgray;
}
.event-menu:hover {
  border: 2px solid orange;
}
.btn-orange {
  background-color: orange;
  border: 2px solid orange;
}
.event-menu-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
}
</style>