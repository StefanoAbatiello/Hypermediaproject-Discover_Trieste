<template>
  <div class="container-fluid px-5 mb-5 mt-4">
    <div class="bg text-danger text-center">
      <h1>Types of service</h1>
    </div>
    <div class="row mt-4 row-line">
      <list-card
        v-for="(services, servicesIndex) of servicesList"
        :id="services.id"
        :key="`services-index-${servicesIndex}`"
        class="col-sm-2 m-2"
        :name="services.name"
        :img="services.img"
        :category="'service'"
      />
    </div>
  </div>
</template>

<script>
import ListCard from '~/components/ListCard.vue'
export default {
  name: 'ServicesPage',
  components: {
    ListCard,
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/services')
    return {
      servicesList: data,
    }
  },
}
</script>

<style scoped>
.row-line {
  display: flex;
  justify-content: center;
}
</style>