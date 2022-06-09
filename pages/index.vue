<template>
  <div>
      <header-carousel class="carousel" :title="''"
      :images= "[`homeImg/trieste10.jpeg`,`homeImg/trieste9.jpeg`,`homeImg/trieste12.jpeg`]"
      :height="30"
      />
      <b class="title text-fluid">
      Benvenuto a Trieste
    </b>
      <custom-page :title="title" :image="image" :description="description" />
</div>
</template>

<script>
import HeaderCarousel from '~/components/HeaderCarousel.vue'
import CustomPage from '~/components/CustomPage.vue'
export default {
  name: 'IndexPage',
  components: {
    CustomPage,
    HeaderCarousel,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/index')
    const title = data.title
    const image = data.image
    const description = data.description
    return {
      title,
      description,
      image,
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
  font-size: 5vw;
  position: absolute;
  top: 200px;
  margin-left: 50%;
  transform: translate(-50%, -50%);
}
</style>
