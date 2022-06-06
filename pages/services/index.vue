<template>
  <div class="container-fluid px-0 mb-5 mt-1">
    <div class="text-white text-left sign">
      <h1 class="title">Types of service</h1>
    </div>
    <div class="row ms-4 mt-5 row-line">
      <list-card
        v-for="(services, servicesIndex) of servicesList"
        :id="services.id"
        :key="`services-index-${servicesIndex}`"
        class="col-sm-2 m-3 mb-5"
        :name="services.name"
        :img="services.img"
        :category="'services'"
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
  max-width: 1850px;
}
.title {
  margin-left: 10px;
  font-size: 70px;
}
.sign {
  background: rgb(195, 75, 75);
}
</style>