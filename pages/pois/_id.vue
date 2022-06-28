<template>
  <div class="container-fluid px-0 mb-4">
    <header-carousel class="carousel" :images="img" :height="35" />

    <section class="main-content">
      <div class="container">
        <div class="row justify-content-between">
          <main class="col-md-7 mr-5">
            <section class="main-text">
              <nuxt-link class="breadcrumps" to="/pois">
                <div class="btn back-btn px-0">
                <bc>
                  <span class="material-icons px-0 back-icon">arrow_back_ios</span>
                  Pois
                </bc></div>
              </nuxt-link>
              <h1 class="mb-5 title">{{ name }}</h1>
              <p>
                <span class="place material-icons"> place </span> {{data.poi.directions}}
              </p>
              <div class="description-poi">
                <p
                  v-for="(text, textIndex) of description"
                  :key="`text-index-${textIndex}`"
                  class="mt-3 description"
                >
                {{text}}</p>
              </div>
              <div class="interlinea">
                <tab-card
                    class="mt-3"
                    :access-info="accessInfo"
                    :time-info="timeInfo"
                    :prices="prices"
                    :website="website"
                  />
              </div>
            </section>
          </main>
          <aside class="col-md-5">
            <div class="row row-cols-1">
              <h2>Related Links</h2>
              <div class="interlinea" style="border-bottom-style: solid"></div>
              <div class="aside col pt-3 ms-5 mt-2">
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
                <div class="aside col pt-3 ms-5 mt-2">
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

        <section>
          <div class="map rounded responsive mt-3">
          <iframe
            width="100%"
            height="600"
            referrerpolicy="no-referrer-when-downgrade"
            frameborder="0"
            :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyADzK4sxJZO_98ynJdb3WaW0e1CrcZjJcc&q=${data.poi.map}`"
            allowfullscreen
          >
          </iframe>
        </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import RelatedCard from '~/components/RelatedCard.vue'
import TabCard from '~/components/TabCard.vue'
export default {
  name: 'DetailsPage',
  components: {
    RelatedCard,TabCard
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
    const day=["Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const timeInfo = []
    for (let index = 0; index <7; index++) {
      timeInfo.push({day: day[index], hour: data.poi.timeInfo[index]})      
    }
    return {
      itinerary: data.poi.itinerary,
      itineraryImage: data.poi.itinerary.img[0],
      eventImage,
      id,
      name: data.poi.name,
      img: data.poi.img,
      description: data.poi.description,
      accessInfo: data.poi.accessInfo,
      // timeInfo: data.poi.timeInfo,
      timeInfo,
      prices: data.poi.prices,
      website: data.poi.website,
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
.title {
  font-size: 4vw;
  color: royalblue;
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
.description {
  text-align: justify;
  text-justify: inter-word;
}
</style>
