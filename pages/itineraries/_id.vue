<template>
  <div class="container-fluid px-0 mb-4">
    <header-carousel class="carousel" :images="img" :height="35" />

    <section class="main-content">
      <div class="container">
        <section class="main-text">
          <nuxt-link to="/itineraries">
            <div class="btn back-btn px-0">
                <bc>
                  <span class="material-icons px-0 back-icon">arrow_back_ios</span>
                  Itineraries
                </bc></div>
          </nuxt-link>
          <h1 class="mb-5 title">{{ name }}</h1>
          <div class="description-it">
            <p>
              {{ description }}
            </p>
          </div>
        </section>
        <div class="map rounded">
          <iframe
            width="1300vw"
            height="500vw"
            frameborder="0"
            style="border: 0"
            referrerpolicy="no-referrer-when-downgrade"
            :src="`https://www.google.com/maps/embed/v1/directions?key=AIzaSyADzK4sxJZO_98ynJdb3WaW0e1CrcZjJcc&origin=${map}`"
            allowfullscreen
          >
          </iframe>
        </div>

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
.sign {
  background: rgb(195, 75, 75);
}
.title {
  font-size: 4vw;
  color: royalblue;
}
.backgr {
  background: royalblue;
}
.carousel {
  padding-top: 125px;
  background-color: rgb(65, 105, 225);
}
.carousel-inner > .item > img {
  margin: 0 auto;
}
.btn-back {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(0%, -50%);
  border-color: whitesmoke;
  color: rgb(195, 75, 75);
}
.arrow {
  color: rgb(195, 75, 75);
  opacity: 1;
}
.botton-cont {
  position: relative;
}
.description-it {
  width: 100%;
}
</style>