<template>
  <div>
    <header-carousel class="carousel" :images="img" />

    <section class="main-content">
      <div class="container">
        <section class="main-text">
          <nuxt-link to="/itineraries">
            <div class="btn back-btn px-0">
              <h4>
                <span class="material-icons px-0 back-icon"
                  >arrow_back_ios</span
                >
                Itineraries
              </h4>
            </div>
          </nuxt-link>
          <h2 class="mb-5 title">{{ name }}</h2>
          <div class="description-it">
            <p>
              {{ description }}
            </p>
          </div>
        </section>
        <section>
          <div class="map rounded responsive mt-3">
            <iframe
              width="100%"
              height="600"
              referrerpolicy="no-referrer-when-downgrade"
              frameborder="0"
              :src="`https://www.google.com/maps/embed/v1/directions?key=AIzaSyADzK4sxJZO_98ynJdb3WaW0e1CrcZjJcc&origin=${map}`"
              allowfullscreen
            >
            </iframe>
          </div>
        </section>
        <div class="list-fluid mt-5 list">
          <itinerary-step
            v-for="(poi, poiIndex) of poiList"
            :id="poi.id"
            :key="`poi-index-${poiIndex}`"
            :name="poi.name"
            :img="poi.img[0]"
            :description="poi.stepDescription"
            :category="'poi'"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import ItineraryStep from '~/components/ItineraryStep.vue'
export default {
  name: 'DetailsPage',
  components: {
    ItineraryStep,
  },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itineraries/' + id)
    return {
      name: data.itinerary.name,
      img: data.itinerary.img,
      description: data.itinerary.description,
      map: data.itinerary.map,
      poiList: data.relatedPois,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  methods: {
    backToItineraries() {
      this.$router.push('/itineraries/')
    },
  },
}
</script>

<style scoped>
.title {
  font-size: 4vw;
  color: royalblue;
}
.backgr {
  background: royalblue;
}
.description-it {
  width: 100%;
}
</style>