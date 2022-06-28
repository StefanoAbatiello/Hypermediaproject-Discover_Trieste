<template>
  <div>
    <header-carousel
      class="carousel"
      :images="[
        `homeImg/carHome1.jpeg`,
        `homeImg/carHome2.jpeg`,
        `homeImg/carHome3.jpeg`,
      ]"
      :height="30"
    />
    <ht> Welcome to Trieste </ht>

    <section class="services-list">
      <div class="container">
        <p>
          Trieste è il Capoluogo di regione del Friuli-Venezia Giulia e capitale
          europea della cultura per il 2023. Lasciati meravigliare dalle sue
          bellezze che incantano miglioni di turisti ogni anno e immergiti nel
          cuore dellà città attraverso il sito.
        </p>
        <div
          class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 mr-2"
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
    const image = data.image
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
  /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;  */
  color: whitesmoke;
  font-size: 7vw;
  position: absolute;
  top: 200px;
  margin-left: 18%;
  /* width: 100%; */
  text-align: center;
}
</style>
