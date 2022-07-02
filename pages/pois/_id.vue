<template>
  <div>
    <header-carousel class="carousel" :images="img" />
    <section class="main-content">
      <div class="container">
        <div class="row justify-content-between">
          <main class="col-lg-7">
            <section class="main-text">
              <nuxt-link class="breadcrumps" to="/pois">
                <div class="btn back-btn px-0">
                  <h4>
                    <span class="material-icons px-0 back-icon"
                      >arrow_back_ios</span
                    >
                    Pois
                  </h4>
                </div>
              </nuxt-link>
              <h2 class="mb-3 title">{{ name }}</h2>
              <p>
                <span class="material-icons px-0 place-icon"> place </span>
                {{ data.poi.directions }}
              </p>
              <div class="mt-5 description-poi">
                <p
                  v-for="(text, textIndex) of description"
                  :key="`text-index-${textIndex}`"
                  class="mt-3"
                >
                  {{ text }}
                </p>
              </div>
              <div class="mt-3 tab">
                <tab-card
                  :access-info="accessInfo"
                  :time-info="timeInfo"
                  :prices="prices"
                  :website="website"
                />
              </div>
            </section>
          </main>
          <aside class="col-lg-4">
            <div class="row">
              <div class="my-3 col-12 related-links">
                <related-card
                  :id="itinerary.id"
                  class="itinerary"
                  :name="itinerary.name"
                  :img="itineraryImage"
                  category="itineraries"
                  icon="route"
                  text="It is part of "
                />
              </div>
              <div v-if="data.relatedEvent!==null" class="col-12 related-link" >
                <related-card
                  :id="data.relatedEvent.id"
                  class="eventy"
                  :name="data.relatedEvent.name"
                  :img="eventImage"
                  category="events"
                  icon="event"
                  text="Will hosts "
                />
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
import RelatedCard from '~/components/RelatedCard.vue'
import TabCard from '~/components/TabCard.vue'
export default {
  name: 'DetailsPage',
  components: {
    RelatedCard,
    TabCard,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/pois/' + id)
    let eventImage = null
    if (data.relatedEvent == null) {
      eventImage = null
    } else {
      eventImage = data.relatedEvent.img[0]
    }
    const day = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ]
    const timeInfo = []
    for (let index = 0; index < 7; index++) {
      timeInfo.push({ day: day[index], hour: data.poi.timeInfo[index] })
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
      timeInfo,
      prices: data.poi.prices,
      website: data.poi.website,
      data,
    }
  },
  head() {
    return {
      title: this.name,
      meta: [
        {
          hid:'description',
          name:'description',
          content:'here you can find all the point of interest of Trieste',
        }
      ]
    }
  },
  methods: {
    backToPois() {
      this.$router.push('/pois/')
    },
  },
}
</script>

<style scoped>
.material-icons {
  vertical-align: middle;
}
.place-icon {
  color: royalblue;
}
.related-link {
  display: flex;
  justify-content: center;
}
</style>
