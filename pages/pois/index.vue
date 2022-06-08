<template>
  <div>
    <div class="image-header">
      <img style="height: 22rem; widht: 25rem" />
      <b class="title"> Points of Interest </b>
    </div>
    <section class="poi-list">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          <card-composed
            v-for="(poi, poiIndex) of poiList"
            :id="poi.id"
            :key="`poi-index-${poiIndex}`"
            :name="poi.name"
            :img="poi.img"
            :category="'pois'"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardComposed from '~/components/CardComposed.vue'
export default {
  name: 'PoisPage',
  components: {
    CardComposed,
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/itineraries')
    const { data } = await $axios.get('/api/pois')
    return {
      poiList: data,
    }
  },
  data() {
    return {
      // itinerariesList: []
    }
  },
}
</script>

<style scoped>
.row-line {
  display: flex;
  justify-content: center;
}
.sign {
  background: rgb(195, 75, 75);
}
.title {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  color: whitesmoke;
  font-family: 'My Soul', cursive;
  font-size: 70px;
  position: absolute;
  top: 200px;
  margin-left: 50%;
  transform: translate(-50%, -50%);
}
.image-header {
  background-image: url('assets\homeImg\panorama1.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>