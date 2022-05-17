<template>
  <div class="container-fluid px-5 mb-5 mt-3">
    <div class="bg-danger text-white text-left">
      <h1>Itineraries</h1>
    </div>
      <div class="row mt-3 row-line">
        <list-card
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
import ListCard from '~/components/ListCard.vue'
export default {
  name: 'ItinerariesPage',
  components: {
    ListCard
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

<style scoped>
.row-line {
  display: flex;
  justify-content: center;
}
</style>