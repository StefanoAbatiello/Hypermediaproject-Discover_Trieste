<template>
  <div>
    <header-carousel
      class="carousel"
      :images="image"
      :height="40"
      :title="`Welcome to Trieste`"
    />
    <section class="services-list">
      <div class="container">
        <p>
          Trieste è il Capoluogo di regione del Friuli-Venezia Giulia e capitale
          europea della cultura per il 2023. Lasciati meravigliare dalle sue
          bellezze che incantano miglioni di turisti ogni anno e immergiti nel
          cuore dellà città attraverso il sito.
        </p>
        <div
          class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 mr-2 justify-content-center"
        >
          <home-card 
            v-for="(item, itemIndex) of names"
            :id="item.id"
            :key="`item-index-${itemIndex}`"
            :title="item"
            :img="backImgs[itemIndex]"
            :path="paths[itemIndex]"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HeaderCarousel from '~/components/HeaderCarousel.vue'
import HomeCard from '~/components/HomeCard.vue'
export default {
  name: 'IndexPage',
  components: {
    HomeCard,
    HeaderCarousel,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/index')
    const title = data.title
    const image = data.images
    const description = data.description
    const names = data.names
    const paths = data.paths
    const backImgs = data.cardImages
    return {
      title,
      description,
      image,
      names,
      paths,
      backImgs,
    }
  },
}
</script>

<style scoped>
.carousel {
  opacity: 0.8;
}
.title {
  text-align: center;
  transform: translate(-45%,35%);
  }
</style>
