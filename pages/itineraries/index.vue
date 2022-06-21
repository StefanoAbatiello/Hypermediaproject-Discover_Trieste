<template>
  <div>
    <div class="image-header mb-5">
      <img style="height: 22rem; widht: 25rem" />
      <ht> Itineraries </ht>
    </div>
    <section class="itinerary-list">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
          <card-composed
          v-for="(it, itineraryIndex) of itineraryList"
          :id="it.id"
          :key="`itinerary-index-${itineraryIndex}`"
          :name="it.name"
          :img="it.img[0]"
          :category="'itineraries'"
        />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardComposed from '~/components/CardComposed.vue'
export default {
  name: 'ItinerariesPage',
  components: {
    CardComposed,
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/itineraries')
    return {
      itineraryList: data,
    }
  },
}
</script>

<style scoped>
.sign {
  background: rgb(195, 75, 75);
}
.row-line {
  display: flex;
  justify-content: center;
}
.image-header {
  background-image: url('assets\homeImg\trieste8.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.9;
}
</style>