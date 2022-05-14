<template>
  <div class="page container mt-5">
    <h1 class="display-4">All the Points of Interest</h1><br>
      <h5> there are all the PoIs:</h5>
      <div class="row mt-3">
        <poi
          v-for="(it, itineraryIndex) of itineraryList"
          :id="it.id"
          :key="`itinerary-index-${itineraryIndex}`"
          class="col-sm-2 m-2"
          :name="it.name"
          :img="it.img"
          :category="'itinerary'"
        />
    </div>
  </div>

</template>

<script>
import Poi from '~/components/Poi.vue'
export default {
  name: 'PoiPage',
  components: {
    Poi
  },
data() {
    return {
      // itinerariesList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/itineraries')
    const { data } = await $axios.get('/api/pois')
    return {
      itineraryList: data,
    }
  },
}
</script>


