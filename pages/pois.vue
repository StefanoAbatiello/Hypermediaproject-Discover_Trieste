<template>
  <div class="container-fluid px-0 mb-4 mt-1">
    <div class="text-white text-left sign">
      <h1 class="title">All the Points of Interest</h1>
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
.sign{
  background: rgb(195, 75, 75);
}
.title{
  margin-left: 10px;
}
</style>