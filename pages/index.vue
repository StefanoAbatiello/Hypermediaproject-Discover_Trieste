<template>
  <div>
    <header-carousel
      class="carousel"
      :title="''"
      :images="[
        `homeImg/carHome1.jpeg`,
        `homeImg/carHome2.jpeg`,
        `homeImg/carHome3.jpeg`,
      ]"
      :height="30"
    />
    <b class="title text-fluid"> Benvenuto a Trieste </b>
    <custom-page :title="title" :image="image[0]" :description="description" />
    <section class="services-list">
    <div class="container">
      <div class="row row-cols-2 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 mr-2">
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
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'IndexPage',
  components: {
    CustomPage,
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 7vw;
  position: absolute;
  top: 200px;
  margin-left: 18%;
  /* width: 100%; */
  text-align: center;
}

</style>
