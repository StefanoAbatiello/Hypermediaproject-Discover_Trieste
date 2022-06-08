<template>
  <div>
    <div class="image-header">
      <img style="height: 22rem; widht: 25rem" />
      <b class="title">
      Types of service
    </b>
    </div>
    <div class="container-fluid px-0 mb-5 mt-1">
      <!-- <div class="text-white text-left sign">
        <h1 class="title">Types of service</h1>
      </div> -->
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
  background: rgb(195, 75, 75);
}
.image-header {
  background-image: url('assets\homeImg\panorama1.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>