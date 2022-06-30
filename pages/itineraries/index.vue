<template>
  <div>
    <div class="image-header mb-5">
      <img style="height: 30rem" />
      <h1> Itineraries </h1>
    </div>
      <div class="container">
        <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 ">
            <preview-card
            v-for="(it, itineraryIndex) of itineraryList"
            :id="it.id"
            :key="`itinerary-index-${itineraryIndex}`"
            :name="it.name"
            :img="it.img[0]"
            :category="'itineraries'"
            :texts="[it.distances[0], it.distances[1]]"
            :icons="['moving', 'directions_walk']"
          />
        </div>
      </div>
  </div>
</template>

<script>
import PreviewCard from '~/components/PreviewCard.vue'
export default {
  name: 'ItinerariesPage',
  components: {
    PreviewCard,
  },
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
  background-image: url('assets\homeImg\trieste10.jpeg');
  background-size: cover;
  background-position: center center;
  opacity: 0.9;
}
</style>