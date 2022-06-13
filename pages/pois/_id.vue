<template>
  <div class="container-fluid px-0 mb-4">
    <header-carousel class="carousel" :images="img" :height="35" />

    <section class="main-content">
      <div class="container">
        <div class="row justify-content-between">
          <main class="col-md-7 mr-3">
            <section class="main-text">
              <nuxt-link to="/events">
                <h5 class="btn back-btn px-0">
                  <span class="material-icons px-0 back-icon"
                    >arrow_back_ios</span
                  >Pois
                </h5>
              </nuxt-link>
              <h1>{{ name }}</h1>
              <p>
                <span class="material-icons"> place </span> via Golgi 26,
                Trieste
              </p>
              <div class="description-poi">
                <p>
                  Your gaze is lost among the many wonders that surround what is
                  one of Procida's most beautiful beaches: on the right-hand
                  side is the rocky ridge on which stand a few houses with
                  typical island architecture, on the other is the small port of
                  Corricella, a small nativity scene made up of colourful houses
                  set between the rock and the hill on which Terra Murata
                  stands, Procida's oldest nucleus. Opposite, the absolute
                  protagonist is the azure blue sea.
                </p>
                <p>
                  Your gaze is lost among the many wonders that surround what is
                  one of Procida's most beautiful beaches: on the right-hand
                  side is the rocky ridge on which stand a few houses with
                  typical island architecture, on the other is the small port of
                  Corricella, a small nativity scene made up of colourful houses
                  set between the rock and the hill on which Terra Murata
                  stands, Procida's oldest nucleus. Opposite, the absolute
                  protagonist is the azure blue sea.
                </p>
                <p>
                  Your gaze is lost among the many wonders that surround what is
                  one of Procida's most beautiful beaches: on the right-hand
                  side is the rocky ridge on which stand a few houses with
                  typical island architecture, on the other is the small port of
                  Corricella, a small nativity scene made up of colourful houses
                  set between the rock and the hill on which Terra Murata
                  stands, Procida's oldest nucleus. Opposite, the absolute
                  protagonist is the azure blue sea.
                </p>
              </div>
            </section>
            <div class="interlinea" style="border-bottom-style: solid"></div>
            <section>
              <div class="container useful-information">
                <h3>Useful Information</h3>
                <div class="accesibility my-3">
                  <h5>Accessibility</h5>
                  
                  <div class="info-box">
                    <span class="material-icons" style="color: green;">done</span>Ascensore<br>
                    <span class="material-icons" style="color: green;">done</span> Testo in Brile<br>
                    <span class="material-icons" style="color: red;">block</span>Audio guida<br>
                  </div>
                </div>
                <div class="TimeTable my-3">
                  <h5>TimeTable</h5>
                  <div class="info-box">
                    Mon: 10-19 <br />
                    Tue: 10-19 <br />
                    Wed: 10-19 <br />
                    Thu: 10-19 <br />
                    Fri: 10-19 <br />
                    Sat: 15-23 <br />
                    Sun: 15-23 <br />
                  </div>
                </div>
                <div class="Prices my-3">
                  <h5>Prices</h5>
                  <div class="info-box">
                    {{ name }} is accessible in different prices:
                    <ul>
                      <li>For over65 is free</li>
                      <li>Fot students there is a discount of 20%</li>
                      <li>The regular admission is 20€</li>
                    </ul>
                    <p>
                      For more information about the tickets visit the following
                      site: <a href="https://www.google.it">www.prova.it</a>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <aside class="col-md-5">
            <div class="row row-cols-1">
              <h2>Related Links</h2>
              <div class="interlinea" style="border-bottom-style: solid"></div>
              <div class="col pt-3">
                <h5>It is part of {{ itinerary.name }}</h5>
                <nuxt-link :to="`/itineraries/${itinerary.id}`">
                  <img
                    class="card-img"
                    :src="require(`~/assets/${itineraryImage}`)"
                    alt="Itinerary Image"
                    style="width: 100%; height: auto"
                    data-bs-toggle="tooltip"
                    title="Click me to see more!"
                  />
                </nuxt-link>
              </div>

              <div v-if="data.relatedEvent !== null">
                <div class="col pt-3">
                  <h5>
                    In {{ data.relatedEvent.season }} hosts
                    {{ data.relatedEvent.name }}
                  </h5>
                  <nuxt-link :to="`/events/${data.relatedEvent.id}`">
                    <img
                      class="card-img"
                      :src="require(`~/assets/${eventImage}`)"
                      alt="Event Image"
                      style="width: 100%; height: auto"
                      data-bs-toggle="tooltip"
                      title="Click me to see more!"
                    />
                  </nuxt-link>
                </div>
              </div>
            </div>
          </aside>
        </div>
        <section class="map pt-5"><map-card></map-card></section>
      </div>
    </section>

    <script>
      console.log({{ itineraryImage }})
    </script>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import MapCard from '~/components/MapCard.vue'
export default {
  name: 'DetailsPage',
  components: {
    MapCard,
  },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/pois/' + id)
    let eventImage = null
    if (data.relatedEvent == null) {
      eventImage = null
    } else {
      eventImage = data.relatedEvent.img[0]
    }
    return {
      itinerary: data.poi.itinerary,
      itineraryImage: data.poi.itinerary.img[0],
      eventImage,
      id,
      name: data.poi.name,
      img: data.poi.img,
      description: data.poi.description,
      data,
    }
  },
  data() {},
  head() {
    return {
      title: this.name,
    }
  },
  mounted() {
    // const date = new Date()
    // Example on how to use mixinx
    // console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToPois() {
      this.$router.push('/pois/')
    },
  },
}
</script>

<style scoped>
.carousel {
  padding-top: 125px;
  background-color: rgb(65, 105, 225);
}
.info-box {
  border-style: solid;
  border-width: 0px 0px 0px 4px;
  background-color: lightgrey;
}
.material-icons{
  vertical-align: center;
  font-size: 18px ;
}
</style>
