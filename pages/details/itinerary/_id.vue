<template>
  <div class="container my-5">
    <h1 class="display-4 fw-bold lh-1 header">{{ name }}</h1>
    <div class="media">
      <img class="mr-3 it-img" :src="img" alt="Generic placeholder image">
        <div class="media-body">
          <h5 class="mt-0">Media heading</h5>
            questa deve essere la descrizione della fotografia 
    </div>
  </div>
  <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4 button-back"
        @click="backToList"
      > Back to itineraries list </button>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'ItineraryPage',
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itineraries/' + id)
    return {
      name: data.name,
      img: data.img,
      description: data.description,
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
    backToList() {
      this.$router.push('/itineraries')
    },
  },
}
</script>

<style scoped>
.header {
  color: brown;
  text-align: center;
}
.it-img{
  height: 160px;
  width: 160px;
}
.button-back {
  background-color: green; /* Green */
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>