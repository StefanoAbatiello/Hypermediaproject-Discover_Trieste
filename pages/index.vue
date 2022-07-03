<template>
<!-- HomePage of the Website -->
  <div>
    <!-- Header images -->
    <header-carousel
      class="carousel"
      :images="image"
    />
    <!-- Title -->
    <h1 class="title">Welcome to Trieste</h1>
    <section class="services-list">
      <!-- Short Description of Trieste -->
      <div class="container">
        <p class="mt-4">
          Trieste is the regional capital of Friuli-Venezia Giulia and European
          capital of culture for 2023. Let yourself be amazed by its beauties
          that enchant millions of tourists every year and immerse yourself in
          the heart of the city through the site: analyze points of interest one
          by one or let you inspire by our itineraries, join the best events of
          the city collecting all the useful information regarding them or
          simply find the service you need in the dedicated section! Have a nive
          discovering session!
        </p>
        <!-- List of alle the section of the page -->
        <div class="container">
          <div
            class="
              row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3
              mr-2
              justify-content-center
            "
          >
          <!-- Single Card -->
            <home-card
              v-for="(item, itemIndex) of names"
              :id="item.id"
              :key="`item-index-${itemIndex}`"
              :title="item"
              :img="backImgs[itemIndex]"
              :path="paths[itemIndex]"
              :alt="`image_${item}`"
            />
          </div>
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
.title {
  width: 100%;
  text-align: center;
}
@media (max-width: 992px) {
  h1 {
    top: 9rem;
  }
}
</style>


