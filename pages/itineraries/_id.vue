<template>
<!-- Page to describe a single itinerary -->
  <div>
    <!-- images to display in the header of the page -->
    <header-carousel class="carousel" :images="img" />
    <!-- main part of the event -->
    <section class="main-content">
      <div class="container">
        <section class="main-text">
          <!-- Breadcrumps -->
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
          <!-- Title -->
          <h2 class="mb-5">{{ name }}</h2>
          <!-- Description of the itinerary -->
          <div class="description-it">
            <p>
              {{ description }}
            </p>
          </div>
        </section>
        <!-- Map with the steps of the itinerary -->
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
        <!-- Cards to show the steps of the itinerary -->
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
import ItineraryStep from '~/components/ItineraryStep.vue'
export default {
  name: 'DetailsPage',
  components: {
    ItineraryStep,
  },
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
      meta: [
        {
          hid:'description',
          name:'description',
          content:'here you can find all the suggested itineraries to visit Trieste',
        }
      ]
    }
  },
}
</script>

<style scoped>
.backgr {
  background: royalblue;
}
.description-it {
  width: 100%;
}
</style>