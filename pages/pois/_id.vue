<template>
  <div class="container-fluid px-0 mb-4">
    <header-carousel class="carousel" :images="img" :height="35" />

    <section class="main-content">
      <div class="container">
        <div class="row justify-content-between">
          <main class="col-md-7 mr-5">
            <section class="main-text">
              <nuxt-link to="/pois">
                <h5 class="btn back-btn px-0">
                  <span class="material-icons px-0"
                    >arrow_back_ios</span
                  >Pois
                </h5>
              </nuxt-link>
              <h1>{{ name }}</h1>
              <p>
                <span class="place material-icons"> place </span> via Golgi 26,
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
            <section class="useful-information">
              <div class="accesibility my-3">
                <h3>Accessibility</h3>
                <div class="row info-box">
                  <div class="icons col">
                    <span class="mi material-icons" style="color: green"
                      >done</span
                    >Step-Free
                  </div>
                  <div class="icons col">
                    <span class="mi material-icons" style="color: green"
                      >done</span
                    >Testo in Brile
                  </div>
                  <div class="icons col">
                    <span class="mi material-icons" style="color: red"
                      >block</span
                    >Audio Description
                  </div>
                </div>
              </div>
              <div class="interlinea" style="border-bottom-style: solid"></div>
              <div class="TimeTable my-3">
                <h3>TimeTable</h3>
                <div class="time-box">
                  <div class="row">
                    <div class="day col">Monday:</div>
                    <div class="hour col">10-19</div>
                  </div>
                  <div class="row">
                    <div class="day col">Tuesday:</div>
                    <div class="hour col">10-19</div>
                  </div>
                  <div class="row">
                    <div class="day col">Wednesday::</div>
                    <div class="hour col">10-19</div>
                  </div>
                  <div class="row">
                    <div class="day col">Thursday:</div>
                    <div class="hour col">10-19</div>
                  </div>
                  <div class="row">
                    <div class="day col">Friday:</div>
                    <div class="hour col">10-19</div>
                  </div>
                  <div class="row">
                    <div class="day col">Saturday:</div>
                    <div class="hour col">10-19</div>
                  </div>
                  <div class="row">
                    <div class="day col">Sunday:</div>
                    <div class="hour col">10-19</div>
                  </div>
                </div>
              </div>
              <div class="interlinea" style="border-bottom-style: solid"></div>
              <div class="Prices my-3">
                <h3>Prices</h3>
                <div class="price-box">
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
            </section>
          </main>
          <aside class="col-md-5">
            <div class="row row-cols-1">
              <h2>Related Links</h2>
              <div class="interlinea" style="border-bottom-style: solid"></div>
              <div class="aside col pt-3">
                <related-card
                  :id="itinerary.id"
                  :name="itinerary.name"
                  :img="itineraryImage"
                  category="itineraries"
                  icon="route"
                  text="It is part of "
                />
              </div>

              <div v-if="data.relatedEvent !== null">
                <div class="aside col pt-3">
                  <related-card
                    :id="data.relatedEvent.id"
                    :name="data.relatedEvent.name"
                    :img="eventImage"
                    category="events"
                    icon="event"
                    text="It is part of "
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section class="map">
          <div class="map rounded my-3"><map-card></map-card></div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import RelatedCard from '~/components/RelatedCard.vue'
import MapCard from '~/components/MapCard.vue'
export default {
  name: 'DetailsPage',
  components: {
    RelatedCard,MapCard
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
.material-icons {
  vertical-align: middle;
  font-size: 18px;
}
.place {
  color: royalblue;
}
.mi {
  font-size: 30pt;
}
.icons {
  font-size: 15pt;
}
.interlinea {
  border-color: royalblue;
}
.hour {
  text-align: left;
}
.aside {
  float: center;
}
.map{
  height:500px;
  max-width: 100%;
  margin-top: 4px;
  position: relative;
}
</style>
