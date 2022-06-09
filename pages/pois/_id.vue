<template>
  <div class="container-fluid px-0 mb-4 mt-1">
    <header-carousel class="carousel" :images="img" :height="35" />

    <section class="main-content">
      <div class="container">
        <div class="row justify-content-between">
          <main class="col-md-7 mr-3">
            <section class="main-text">
              <nuxt-link to="/pois">Pois</nuxt-link>
              <h1>{{ name }}</h1>
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
              <div>
                <tab-card
                :access-info="`accessibilty informations are needed here`"
                :time-info="`this poi is always open`"
                :directions="`print a map of the point of interest`"
                :prices="`free ticket to visit this poi`"
              />
              </div>
            </section>
          </main>
          <aside class="col-md-5">
            <div class="sticky-top">
              <div class="row row-cols-1">
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
import TabCard from '~/components/TabCard.vue'
export default {
  name: 'DetailsPage',
  components: {
    TabCard,
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
.prova {
  background: lightskyblue;
  width: 20%;
  height: auto;
}
.title {
  margin-left: 10px;
}
.colonna {
  width: 200px;
  margin: 0;
}
.carousel {
  padding-top: 100px;
  background-color: lightblue;
}
.sign {
  background: rgb(195, 75, 75);
}
.test {
  border-style: solid;
  background-color: rgb(195, 75, 75);
}
.btn-back {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(0%, -50%);
  border-color: whitesmoke;
  color: rgb(195, 75, 75);
}
.botton-cont {
  position: relative;
}
</style>
