<template>
  <div class="container my-5">
    <div
      class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg"
    >
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">{{ title }}</h1>
        <b>Description:</b>
        <p class="lead">
          {{ description }}
        </p>
      <div class="row mt-3">
        <serviceCard
         v-for="(service, serviceIndex) of serviceList"
         class="col-sm-2 m-2"
         :key="`service-index-${serviceIndex}`"
         :name="service.name"
         :address="service.address"
         :info="service.info"
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
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import ServiceCard from '~/components/ServiceCard.vue'
export default {
  name: 'ServiceDetailsPage',
  components: {
    ServiceCard,
  },
  mixins: [CommonMixin],

  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/service/'+id)
    return {
      title: data.type.title,
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
