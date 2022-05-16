<template>
  <div class="container my-5">
    <div
      class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg"
    >
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">{{ name }}</h1>
        <b>Description:</b>
        <p class="lead">
          {{ description }}
        </p>
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
        >
          <button v-if="season === 'summer'"
            type="button"
            class="btn btn-outline-secondary btn-lg px-4"
            @click="backToEvents(season)"
          >
            Back to summer events
          </button>
          <button v-else
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
import CommonMixin from '~/mixins/common'
export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/event/' + id)
    return {
      name: data.name,
      img: data.img,
      description: data.description,
      season: data.season,
    }
  },
  head(){
    return {
      title: this.name
    }
  },
  mounted(){
    const date = new Date()
    // Example on how to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToEvents(season) {
      this.$router.push('/events/'+ season)
    },
    back() {
      this.$router.push('/events/allYear')
    },
  },
}
</script>
