<template>
  <div class="page container mt-5">
    <h1 class="display-4">Point of interest page</h1>
      <div class="row mt-5">
        <category
          v-for="(poi, poiIndex) of poiList"
          :id="poi.id"
          :key="`itinerary-index-${poiIndex}`"
          class="col-sm-2 m-2"
          :name="poi.name"
          :img="poi.img"
          :category="'poi'"
        />
    </div>
  </div>

</template>

<script>
import Category from '~/components/Category.vue'
export default {
  name: 'PoisPage',
  components: {
    Category,
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
      poiList: data,
    }
  },
}
</script>


