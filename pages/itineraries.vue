<template>
  <div class="page container mt-5">
    <h1 class="display-4">Itineraries page</h1>
      <div class="row mt-3">
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


