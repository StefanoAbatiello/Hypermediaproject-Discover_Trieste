<template>
  <div class="container-fluid px-0 mb-4 mt-1">
    <div class="text-white sign row">
      <div class="col">
        <h1 class="title text-left">{{name}}</h1>
        <ul class="ms-3 breadcrumb">
          <li class="breadcrumb-item text-white">
            <a @click="backToList()">itineraries/</a>
          </li>
        </ul>
      </div>

      <div class="col offset-sm-1 align-self-end botton-cont">
        <button
          type="button"
          class="btn btn-lg mb-3 ms-2 btn-back text-white"
          @click="backToList()"
        >
        Back to itineraries list
    </button>
    <div id="demo" class="carousel slide" data-bs-ride="carousel">

  <!-- Indicators/dots -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <!-- The slideshow/carousel -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="img[0]" alt="Los Angeles" class="d-block" style="width:100%">
    </div>
    <div class="carousel-item">
      <img :src="img[1]" alt="Chicago" class="d-block" style="width:100%">
    </div>
    <div class="carousel-item">
      <img :src="img[1]" alt="New York" class="d-block" style="width:100%">
    </div>
  </div>
  
  <!-- Left and right controls/icons -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
    <div class="m-3 des-div">
      <b> Description: </b>
      <p class="lead">
        {{ description }}
       </p>
    </div>
    <div id="test" class="mt-3 p-5 text-white rounded test">
      <h1>List of itinerary steps</h1>
        <itinerary-step
          v-for="(poi, poiIndex) of poiList"
          :id="poi.id"
          :key="`poi-index-${poiIndex}`"
          :name="poi.name"
          :img="poi.img"
          :description="poi.description"
          :category="'poi'"
        />
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import ItineraryStep from '~/components/ItineraryStep.vue'
export default {
  name: 'DetailsPage',
  components: {
    ItineraryStep
  },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itineraries/' + id)
    return {
      name: data.itinerary.name,
      img: data.itinerary.img,
      description: data.itinerary.description,
      poiList: data.relatedPois
    }
  },
  head(){
    return {
      title: this.name
    }
  },
  methods: {
    backToList() {
      this.$router.push('/itineraries')
    },
  },
}
</script>

<style scoped>
.sign{
  background: rgb(195, 75, 75);
}
.title{
  margin-left: 10px;
}
.test{
  background: rgb(195, 75, 75);
}
.btn-back {
  border-color: whitesmoke;
  color: rgb(195, 75, 75);
}
.botton-cont{
  align-items: right;
}
</style>