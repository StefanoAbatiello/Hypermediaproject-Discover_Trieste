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
    <ht> Benvenuto a Trieste </ht>
    <custom-page :title="title" :image="image[0]" :description="description" />

    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 mr-2">
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
</style>
