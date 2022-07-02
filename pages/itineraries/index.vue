<template>
  <div>
    <div class="image-header mb-5">
      <img class="img" :src="require(`~/assets/homeImg/itineraryCopertina.jpeg`)" alt="background"/>
      <div class="overlay"></div>
      <h1>Itineraries</h1>
    </div>
    <div class="container">
      <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
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
.image-header {
  height: 30rem;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30rem;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.15);
}
</style>