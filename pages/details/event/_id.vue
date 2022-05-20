<template>
  <div class="container my-5">
    <div
      class="row pt-lg-5 pb-lg-5 align-items-center rounded-3 border shadow-lg"
    >
      <h1 class="display-4 fw-bold lh-1 text-danger text-center">{{ name }}</h1>
      <div>
        <div class="image-event text-center">
          <img class="img rounded ms-2 mt-5" :src="img" />
        </div>
        <p class="lead">
          {{ description }}
        </p>
        <button
          type="button"
          class="btn btn-lg px-4 mb-2 btn-poi"
          @click="goToPoi(poiId)"
        >
          See the location
        </button>
        <tab-card
          :access-info="`col-sm-2 m-2`"
          :time-info="`event`"
          :directions="`event.name`"
          :prices="`event.img`"
        />
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
        >
          <button
            v-if="season === 'summer'"
            type="button"
            class="btn btn-outline-secondary btn-lg px-4"
            @click="backToEvents(season)"
          >
            Back to summer events
          </button>
          <button
            v-else
            type="button"
            class="btn btn-outline-secondary btn-lg px-4"
            @click="backToEvents(season)"
          >
            Back to winter events
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg px-4"
            @click="back()"
          >
            Back to all the events
          </button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img class="rounded-lg-3" :src="img" alt="" width="" />
      </div>
    </div>
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
      poiId: data.poiId,
      season: data.season,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  methods: {
    backToEvents(season) {
      this.$router.push('/events/' + season)
    },
    back() {
      this.$router.push('/events/allYear')
    },
    goToPoi(poiId) {
      this.$router.push('/details/poi/' + poiId)
    },
  },
}
</script>

<style scoped>
.img {
  height: 300px;
  width: 450px;
}
.carousel-slide {
  height: 300px;
  width: 450px;
}
.btn-poi{
  border-color: rgb(195, 75, 75);;
  color: rgb(195, 75, 75);
}
</style>