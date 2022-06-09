<template>
  <div class="container-fluid px-0 mt-1 mb-4">
    <header-carousel class="carousel" :images="img" :height="35" />
    <section class="main-container">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-7">
            <section class="main-text">
              <nuxt-link to="/events">
                <div class="btn">Events</div>
              </nuxt-link>
              <h1>{{ name }}</h1>
              <p>{{ description }}</p>
            </section>
            <aside>
              <div class="test mt-4 mb-4 p-5 textBox">
                <nuxt-link :to="`/pois/${poi.id}`">
                  <div class="btn btn-details">
                    <b>{{ poi.name }}</b>
                  </div>
                </nuxt-link>
              </div>
            </aside>
          </div>
        </div>
        <tab-card
          :access-info="accessInfo"
          :time-info="timeInfo"
          :directions="directions"
          :prices="prices"
        />
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
  background-color: lightblue;
}
.title {
  margin-left: 30px;
  font-size: 50px;
}
.breadcrumb-item {
  margin-left: 30px;
  font-size: 1vw;
}
.textBox {
  border-radius: 20px;
  border: royalblue;
}

.btn-details {
  color: royalblue;
}
.btn-poi {
  border-color: royalblue;
  color: royalblue;
}
.btn-back {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(0%, -50%);
  border-color: royalblue;
  color: royalblue;
}
.botton-cont {
  position: relative;
}
</style>