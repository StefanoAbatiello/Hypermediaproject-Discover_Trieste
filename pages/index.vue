<template>
  <div>
      <header-carousel/>
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
