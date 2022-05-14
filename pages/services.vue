<template>
  <div class="page container mt-5">
    <h1 class="display-4">Services page</h1>
    <div class="row mt-3">
      <list-card
        v-for="(services, servicesIndex) of servicesList"
        :id="services.id"
        :key="`services-index-${servicesIndex}`"
        class="col-sm m-2"
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
