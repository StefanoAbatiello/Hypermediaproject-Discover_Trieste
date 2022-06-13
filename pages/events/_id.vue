<template>
  <div class="container-fluid px-0 mb-4">
    <header-carousel class="carousel" :images="img" :height="35" />
    <section class="main-container">
      <div class="container">
        <div class="row-md d-flex justify-content-between">
          <main class="col-md-7 mr-3">
            <section class="main-text">
              <nuxt-link to="/events">
                  <h5 class="btn back-btn px-0"><span class="material-icons px-0 back-icon">arrow_back_ios</span>Events</h5>
              </nuxt-link>
              <h1 class="title">{{ name }}</h1>
              <div>
                <p
                  v-for="(text, textIndex) of description"
                  :key="`text-index-${textIndex}`"
                >
                  {{ text }}
                </p>
              </div>
            </section>
          </main>
          <aside class="col-md-4">
            <div class="sticky-top">
              <diV class="row row-cols-1">
                <nuxt-link class="" :to="`/pois/${poi.id}`">
                  <div class="test mt-4 mb-4 textBox">
                    <div
                      class="btn btn-details mt-4 mb-2 ms-4"
                      alt="location link"
                      data-bs-toggle="tooltip"
                      title="Click me to see more!"
                    >
                      <p>
                        <span class="material-icons loc-icon"> place </span>
                        This event take place at:
                      </p>
                      <p class="location">{{ poi.name }}</p>
                    </div>
                  </div>
                </nuxt-link>
              </diV>
            </div>
          </aside>
        </div>
        <div>
          <tab-card
            :access-info="accessInfo"
            :time-info="timeInfo"
            :directions="directions"
            :prices="prices"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TabCard from '~/components/TabCard.vue'
export default {
  name: 'DetailsPage',
  components: {
    TabCard,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/event/' + id)
    return {
      name: data.name,
      img: data.img,
      description: data.description,
      poi: data.poi,
      accessInfo: data.accessInfo,
      timeInfo: data.timeInfo,
      directions: data.directions,
      prices: data.prices,
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
  padding-top: 100px;
  background-color: rgb(65, 105, 225, 0.4);
  border-radius: 0px 0px 40px 40px;
}
.title {
  font-size: 4vw;
  color: royalblue;
}
.textBox {
  border-radius: 20px;
  border: 2px solid lightblue;
  font-size: 1vw;
}
.loc-icon {
  color: royalblue;
}
/*.back-icon{
   vertical-align: middle;
   align-items: center; 
}*/
.back-btn{
  font-size: 1.5vw;
}
.location {
  margin-left: 30px;
  font-size: 1.5vw;
}
.textBox:hover {
  background-color: rgb(65, 105, 225, 0.1);
  border: 2px solid royalblue;
}
</style>