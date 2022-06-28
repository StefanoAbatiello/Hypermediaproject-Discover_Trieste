<template>
  <div class="container-fluid px-0 mb-4">
    <header-carousel class="carousel" :images="img" :height="35" />
    <section class="main-container">
      <div class="container">
        <div class="row-md d-flex justify-content-between">
          <main class="col-md-7 col-sm-6">
            <section class="main-text">
              <nuxt-link to="/events">
              <div class="btn back-btn px-0">
                <h4>
                  <span class="material-icons px-0 back-icon">arrow_back_ios</span>
                  Events
                </h4></div>
              </nuxt-link>
              <h2 class="title">{{ name }}</h2>
              <h5 class="mb-5">
                <span class="material-icons px-0 date-icon"> event </span>
                {{ date }}
              </h5>
              <div>
                <p
                  v-for="(text, textIndex) of description"
                  :key="`text-index-${textIndex}`"
                  class="mt-3 description"
                >
                  {{ text }}
                </p>
              </div>
            </section>
          </main>
          <aside class="col-md-4 col-sm-4 aside">
            <div class="sticky-top">
              <diV class="row row-cols-1">
                <div class="ms-3 my-5">
                  <related-card
                    :id="poi.id"
                    :name="poi.name"
                    :img="poi.img[0]"
                    category="pois"
                    icon="place"
                    text="This event take place at:"
                  />
                </div>
                <div>
                  <tab-card
                    class="mt-3"
                    :access-info="accessInfo"
                    :time-info="timeInfo"
                    :prices="prices"
                    :website="website"
                  />
                </div>
              </diV>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TabCard from '~/components/TabCard.vue'
import RelatedCard from '~/components/RelatedCard.vue'
export default {
  name: 'DetailsPage',
  components: {
    TabCard,
    RelatedCard,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/event/' + id)
    return {
      name: data.name,
      img: data.img,
      date: data.date,
      description: data.description,
      poi: data.poi,
      accessInfo: data.accessInfo,
      timeInfo: data.timeInfo,
      // directions: data.directions,
      prices: data.prices,
      website: data.website,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  methods: {
    backToEvents() {
      this.$router.push('/events/')
    },
    goToPoi(poiId) {
      this.$router.push('/pois/' + poiId)
    },
  },
}
</script>

<style scoped>
.carousel {
  padding-top: 125px;
  background-color: rgb(65, 105, 225);
}

.aside {
  min-width: 300px;
}
/* .back-btn {
  font-size: 1.5vw;
} */
.description {
  font-size: 20px;
}
.date-icon {
  vertical-align: middle;
}
.back-icon{
  vertical-align: middle;
}
</style>