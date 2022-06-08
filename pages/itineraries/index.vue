<template>
  <div>
    <div class="image-header">
      <img style="height: 22rem; widht: 25rem" />
      <b class="title">
      Itineraries
    </b>
    </div>
    <div class="container-fluid px-0 mt-1 mb-4">
      <!-- <div class="text-white text-left sign">
        <h1 class="title">Itineraries</h1>
      </div> -->
      <div class="row mt-3 row-line">
        <list-card
          v-for="(it, itineraryIndex) of itineraryList"
          :id="it.id"
          :key="`itinerary-index-${itineraryIndex}`"
          class="col-sm-2 m-2"
          :name="it.name"
          :img="it.img[0]"
          :category="'itineraries'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ListCard from '~/components/ListCard.vue'
export default {
  name: 'ItinerariesPage',
  components: {
    ListCard,
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
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; 
  color: whitesmoke; 
  font-family: 'My Soul', cursive;
  font-size: 70px;
  position: absolute;
  top:200px;
  margin-left: 50%;
  transform: translate(-50%, -50%);
}
.image-header {
  background-image: url('assets\homeImg\trieste1.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>