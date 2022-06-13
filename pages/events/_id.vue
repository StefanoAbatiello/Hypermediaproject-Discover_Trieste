<template>
  <div class="container-fluid px-0 mb-4">
    <header-carousel class="carousel" :images="img" :height="35" />
    <section class="main-container">
      <div class="container">
        <div class="row-md d-flex justify-content-between">
          <main class="col-md-7 col-sm-6">
            <section class="main-text">
              <nuxt-link to="/events">
                <h5 class="btn back-btn px-0">
                  <span class="material-icons px-0 back-icon"
                    >arrow_back_ios</span
                  >Events
                </h5>
              </nuxt-link>
              <h1 class="mb-5 title">{{ name }}</h1>
              <div>
                <p
                  class="mt-3 description"
                  v-for="(text, textIndex) of description"
                  :key="`text-index-${textIndex}`"
                >
                  {{ text }}
                </p>
              </div>
            </section>
          </main>
          <aside class="col-md-4 col-sm-4 aside">
            <div class="sticky-top">
              <diV class="row row-cols-1">
                <nuxt-link class="" :to="`/pois/${poi.id}`">
                  <div class="test mt-5 mb-5 responsive text-box">
                    <div
                      class="btn btn-details mt-3 m-2"
                      alt="location link"
                      data-bs-toggle="tooltip"
                      title="Click me to see more!"
                    >
                      <p class="loc-script">
                        <span class="material-icons loc-icon"> place </span>
                        This event take place at:
                      </p>
                      <!-- <p class="location">{{ poi.name }}</p> -->
                      <div class="img-container px-2">
                        <img
                          :src="require(`~/assets/${poi.img[0]}`)"
                          class="card-img mx-2 mb-1"
                        />
                        <div class="text-block">
                          <h5>{{ poi.name }}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
                <div>
                  <tab-card class="mt-2"
                    :access-info="accessInfo"
                    :time-info="timeInfo"
                    :directions="directions"
                    :prices="prices"
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
  padding-top: 125px;
  background-color: rgb(65, 105, 225);
}
.title {
  font-size: 4vw;
  color: royalblue;
}
.aside {
  min-width: 250px;
}
.text-box {
  border-radius: 20px;
  border: 2px solid lightblue;
  overflow: hidden;
  /* min-width: 250px; */
}
.loc-script {
  font-size: 17px;
  text-align: left;
}
.loc-icon {
  color: royalblue;
  font-size: 25px;
}
/*.back-icon{
   vertical-align: middle;
   align-items: center; 
}*/
.back-btn {
  font-size: 1.5vw;
}
.description{
  font-size: 20px;
}
.text-box:hover {
  background-color: rgb(65, 105, 225, 0.1);
  border: 2px solid royalblue;
}
.card-img {
  width: 100%;
  height: auto;
  min-width: 180px;
  max-width: 400px;
}
.text-block {
  position: absolute;
  top: 20px;
  width: 70%;
  left: 12px;
  background-color: rgb(65, 105, 225, 0.3);
  color: white;
  margin-left: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  border-radius: 0px 10px 10px 0px;
}
.img-container {
  position: relative;
}
</style>