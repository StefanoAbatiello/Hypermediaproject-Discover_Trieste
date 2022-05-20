<template>
  <div class="container-fluid px-0 mb-4 mt-1">
    <div class="text-white text-left sign">
      <h1 class="title">{{ name }}</h1>
      <ul class="ms-3 breadcrumb">
        <li class="breadcrumb-item text-white"><a @click="backToList()">All itineraries/</a></li>
      </ul>
    </div>
    <button
        type="button"
        class="btn btn-lg mb-3 ms-2 btn-back"
        @click="backToList"
        >
        Back to itineraries list
    </button>
    
    <img :src="img" class="img-fluid mx-auto d-block" />
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
.btn-back{
  border-color: rgb(195, 75, 75);;
  color: rgb(195, 75, 75);
}
</style>