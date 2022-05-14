<template>
  <div class="page container mt-5">
    <h1 class="display-4">Itineraries page</h1>
      <div class="row mt-3">
        <category
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
import Category from '~/components/Category.vue'
export default {
  name: 'ItineraryPage',
  components: {
    Category
  },
data() {
    return {
      // itinerariesList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/itineraries')
    const { data } = await $axios.get('/api/itineraries')
    return {
      itineraryList: data,
    }
  },
}
</script>


