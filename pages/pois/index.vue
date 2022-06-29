<template>
  <div>
    <div class="image-header mb-5">
      <img style="height: 30rem" />
      <h1> Points of Interest </h1>
    </div>
    <section class="poi-list">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          <card-composed
            v-for="(poi, poiIndex) of poiList"
            :id="poi.id"
            :key="`poi-index-${poiIndex}`"
            :name="poi.name"
            :img="poi.img"
            :category="'pois'"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardComposed from '~/components/CardComposed.vue'
export default {
  name: 'PoisPage',
  components: {
    CardComposed,
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/itineraries')
    const { data } = await $axios.get('/api/pois')
    return {
      poiList: data,
    }
  },
  data() {
    return {
      // itinerariesList: []
    }
  },
}
</script>

<style scoped>
.image-header {
  background-image: url('assets\homeImg\trieste20.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.9;
}
</style>