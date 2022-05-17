<template>
  <div class="page container mt-5">
    <h1 class="display-4">Services</h1><br>
    <div class="row mt-3 row-line">
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