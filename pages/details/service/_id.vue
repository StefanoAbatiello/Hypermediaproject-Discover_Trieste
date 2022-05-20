<template>
  <div class="container my-5">
    <div
      class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 align-items-center rounded-3 border shadow-lg"
    >
      <!-- <div class="col-lg-7 p-3 p-lg-5 pt-lg-3"> -->
      <div class="col-lg-10 p-0 p-lg-0 pt-lg-0 pb-lg-2">
        <h1 class="display-4 fw-bold lh-1 text-danger">{{ title }}</h1>
        <p class="lead mt-4">
          {{ description }}
        </p>
      <div class="row mt-3"> 
        <serviceCard
         v-for="(service, serviceIndex) of serviceList"
         class="col-sm-2 "
         :key="`service-index-${serviceIndex}`"
         :name="service.name"
         :address="service.address"
         :info="service.info"
         :img="service.img"
        />
      </div>
    </div>
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
        >
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg px-4"
            @click="backToServices"
          >
            Back to services
          </button>
        </div>    
        <div><map-card/></div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import ServiceCard from '~/components/ServiceCard.vue'
import MapCard from '~/components/MapCard.vue'
export default {
  name: 'ServiceDetailsPage',
  components: {
    ServiceCard,
        MapCard,
  },
  mixins: [CommonMixin],

  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/service/'+id)
    return {
      title: data.type.name,
      description: data.type.description,
      serviceList: data.services,
    }
  },
  head(){
    return {
      title: this.name
    }
  },
  mounted(){
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToServices() {
      this.$router.push('/services')
    },
  },
}
</script>
