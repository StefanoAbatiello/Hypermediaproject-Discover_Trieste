<template>
  <div>
    <div class="image-header">
      <img style="height: 22rem; widht: 25rem" />
      <b class="title">
      Types of service
    </b>
    </div>
    <section class="itinerary-list">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <card-composed
          v-for="(services, servicesIndex) of servicesList"
          :id="services.id"
          :key="`services-index-${servicesIndex}`"
          :name="services.name"
          :img="services.img"
          :category="'services'"
        />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardComposed from '~/components/CardComposed.vue'
export default {
  name: 'ServicesPage',
  components: {
    CardComposed,
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
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; 
  color: rgb(39, 123, 250); 
  font-family: 'My Soul', cursive;
  font-size: 70px;
  position: absolute;
  top:200px;
  margin-left: 50%;
  transform: translate(-50%, -50%);
}
.sign {
  background: rgb(39, 123, 250);
}
.image-header {
  background-image: url('assets\homeImg\trieste1.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>