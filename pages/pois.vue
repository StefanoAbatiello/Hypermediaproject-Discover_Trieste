<template>
  <div class="page container mt-5">
    <h1 class="display-4">All the Points of Interest</h1><br>
      <h5> there are all the PoIs:</h5>
      <div class="row mt-3">
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


