<template>
  <div>
    <header-carousel class="carousel" :images="img"/>
    <section class="main-container">
      <div class="container">
        <div class="row justify-content-between">
          <main class="col-lg-7">
            <section class="main-text">
              <nuxt-link to="/events">
                <div class="btn back-btn px-0">
                  <h4>
                    <span class="material-icons px-0 icon"
                      >arrow_back_ios</span
                    >
                    Events
                  </h4>
                </div>
              </nuxt-link>
              <h2 class="mb-3 title">{{ name }}</h2>
              <h5>
                <span class="material-icons px-0 icon"> event </span>
                {{ date }}
              </h5>
              <div class="mt-5 description-events">
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
          <aside class="col-lg-4">
            <div class="sticky-top row justify-content-between pt-1 column">
              <div class="my-5 col-lg-12 col-md-5 col-sm-12 col-xs-12 location">
                <related-card
                  :id="poi.id"
                  class="location-card"
                  :name="poi.name"
                  :img="poi.img[0]"
                  category="pois"
                  icon="place"
                  text="This event take place at:"
                />
              </div>
              <div class="mt-3 col-lg-12 col-md-7 col-sm-12 col-xs-12 tab">
                <tab-card
                  :access-info="accessInfo"
                  :time-info="timeInfo"
                  :prices="prices"
                  :website="website"
                />
              </div>
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
    const timeInfo=[]
    for (let i=0;i<data.timeInfo.length;i=i+2) {
      timeInfo.push({ day: data.timeInfo[i], hour: data.timeInfo[i+1] })
    }
    return {
      name: data.name,
      img: data.img,
      date: data.date,
      description: data.description,
      poi: data.poi,
      accessInfo: data.accessInfo,
      timeInfo,
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
.location{
  display: flex;
  justify-content: center;
}
.description {
  font-size: 20px;
}
.icon {
  vertical-align: middle;
}
</style>