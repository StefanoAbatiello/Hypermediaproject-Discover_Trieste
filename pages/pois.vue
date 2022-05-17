<template>
  <div class="container-fluid px-5 mb-5 mt-3">
    <div class="bg-danger text-white text-left">
      <h1>All the Points of Interest</h1>
    </div>
      <div class="row mt-3 row-line">
        <list-card
          v-for="(poi, poiIndex) of poiList"
          :id="poi.id"
          :key="`poi-index-${poiIndex}`"
          class="col-sm-2 m-2"
          :name="poi.name"
          :img="poi.img"
          :category="'poi'"
        />
    </div>
  </div>

</template>

<script>
import ListCard from '~/components/ListCard.vue'
export default {
  name: 'PoisPage',
  components: {
    ListCard,
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
.row-line {
  display: flex;
  justify-content: center;
}
</style>