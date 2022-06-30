<template>
  <div>
    <div class="image-header mb-5">
      <img style="height: 30rem" />
      <h1>
      Types of service
    </h1>
    </div>
    <section class="services-list">
      <div class="container">
        <div class="row row-cols-sm-2 row-cols-md-2 row-cols-lg-3 justify-content-center">
          <preview-card
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
import PreviewCard from '~/components/PreviewCard.vue'
export default {
  name: 'ServicesPage',
  components: {
    PreviewCard,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/services')
    return {
      servicesList: data,
    }
  },
}
</script>

<style scoped>
.title {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;  
  color: whitesmoke; 
  font-size: 5vw;
  position: absolute;
  top:200px;
  margin-left: 50%;
  transform: translate(-50%, -50%);
}
.sign {
  background: rgb(39, 123, 250);
}
.image-header {
  background-image: url('assets\homeImg\trieste22.jpeg');
  background-size: cover;
  background-position: center center;
  opacity: 0.9;
}
</style>