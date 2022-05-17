<template>
  <div class="container-fluid px-5 mb-5">
    <div class="bg-primary text-white text-center">
      <h1>{{ name }}</h1>
    </div>
    <img :src="img" class="img-fluid mx-auto d-block" />
    <b>Description:</b>
    <p class="lead">
        {{ description }}
    </p>
    <div id="test" class="test mt-4 p-5 bg-primary text-white rounded">
      <h1>List of itinerary steps</h1>
        <itinenary-step
          v-for="(poi, poiIndex) of poiList"
          :id="poi.id"
          :key="`poi-index-${poiIndex}`"
          :name="poi.name"
          :img="poi.img"
          :description="poi.description"
          :category="'poi'"
        />
    </div>
    <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4"
        @click="backToList"
        >
        Back to itineraries list
      </button>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import ItinenaryStep from '~/components/ItinenaryStep.vue'
export default {
  name: 'DetailsPage',
  components: {
    ItinenaryStep
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
  mounted(){
    const date = new Date()
    // Example on how to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToList() {
      this.$router.push('/itineraries')
    },
  },
}
</script>
