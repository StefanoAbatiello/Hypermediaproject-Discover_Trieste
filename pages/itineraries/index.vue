<template>
  <div>
    <div class="image-header mb-5">
      <img style="height: 22rem; widht: 25rem" />
      <b class="title"> Itineraries </b>
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
.title {
  /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;  */
  color: whitesmoke; 
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 5vw;
  position: absolute;
  top: 200px;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  -webkit-text-stroke: 1px black;
}
.image-header {
  background-image: url('assets\homeImg\trieste8.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.9;
}
</style>