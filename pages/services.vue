<template>
  <div class="page container mt-5">
    <h1 class="display-4">Services page</h1>
    <div class="row mt-3">
      <card2
        v-for="(services, servicesIndex) of servicesList"
        class="col-sm m-2"
        :key="`services-index-${servicesIndex}`"
        :category="'service'"
        :id="services.id"
        :title="services.title"
        :img="services.img"
      />
    </div>
  </div>
</template>

<script>
import Card2 from '~/components/Card2.vue'
export default {
  name: 'ServicesPage',
  components: {
    Card2,
  },
  data() {
    return {
      // servicesList: []
    }
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/services')
    return {
      servicesList: data,
    }
  },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>
