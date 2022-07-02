<template>
  <div>
    <div class="image-header mb-5">
      <img class="img" :src="require(`~/assets/homeImg/serviceCopertina.jpeg`)" alt="backgrounds"/>
      <h1 class="title">Types of service</h1>
    </div>
    <section class="services-list">
      <div class="container">
        <div
          class="
            row row-cols-2 row-cols-sm-2 row-cols-md-2 row-cols-lg-3
            justify-content-center
          "
        >
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
.image-header {
  height: 30rem;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>