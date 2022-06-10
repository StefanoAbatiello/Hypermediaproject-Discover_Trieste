<template>
  <div class="container-fluid px-0 mb-4">
    <header-carousel class="carousel" :images="img" :height="35" />
    <section class="main-container">
      <div class="container">
        <div class="row-md d-flex justify-content-between">
          <main class="col-md-7 mr-3">
            <section class="main-text">
              <nuxt-link to="/events">
                <div class="btn">Events</div>
              </nuxt-link>
              <h1>{{ name }}</h1>
              <div>
                <p>{{ description }}</p>
              </div>
              
            </section>
          </main>
          <aside class="col-md-4">
            <div class="sticky-top">
              <diV class="row row-cols-1">
                <div class="test mt-4 mb-4 textBox">
                  <nuxt-link class="" :to="`/pois/${poi.id}`">
                    <div class="btn btn-details mt-4 mb-2 ms-4" 
                        alt="location link"
                        data-bs-toggle="tooltip"
                        title="Click me to see more!">
                      <p>
                        <span class="material-icons icon"> place </span>
                        This event take place at:
                      </p>
                      <p class="location">{{ poi.name }}</p>
                    </div>
                  </nuxt-link>
                </div>
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
  background-color: rgb(65, 105, 225,.4);
  border-radius: 0px 0px 40px 40px;
}
.title {
  margin-left: 30px;
  font-size: 7vw;
}
.breadcrumb-item {
  margin-left: 30px;
  font-size: 1vw;
}
.textBox {
  border-radius: 20px;
  border: 2px solid lightblue;
  font-size: 1vw;
}
.icon {
  color: royalblue;
}
.location {
  margin-left: 30px;
  font-size: 1.5vw;
}
.textBox:hover{
  background-color: rgb(65, 105, 225,.1);
   border: 2px solid royalblue;
}
</style>