<template>
  <div class="mb-4">
    <header-carousel
      class="carousel"
      :images="image"
      :title="`About Trieste`"
    />
    <div class="container">
      <p class="mt-4">
        The city of Trieste is located in northeastern Italy, bordering
        Slovenia, and is the capital of the autonomous region Friuli-Venezia
        Giulia and Trieste province. Since it is situated at the head of the
        Gulf of Trieste, a shallow bay of the Adriatic Sea, it serves as an
        important seaport in the region.
      </p>
      <img class="map" :src="require(`~/assets/homeImg/ancientMap.jpeg`)" />
      <p class="mt-3">
        Trieste's population is an ethnic mix of its neighbouring regions and
        countries: Venice, Austria and Slovenia. The dominant local Venetian
        dialect of Trieste is called Triestine (in Italian "Triestino"). This
        dialect and the official Italian language are spoken in the city centre
        while Slovene is spoken in several of the immediate suburbs. The
        Venetian and Slovene languages are considered autochthonous to the area.
        There are also a small number of German language speakers.
      </p>
      <p class="mt-2">
        Geographically,Trieste enjoys a unique and beautiful natural location as
        it is surrounded by the Carsic hills and the Adriatic Sea. The quality
        of life is high, and one's leisure time can be spent in tourism, culture
        and sports without the drawbacks that affect larger Italian cities such
        as heavy traffic jams, smog, and delinquency.
      </p>
      <img class="panorama" :src="require(`~/assets/homeImg/panorama.jpeg`)" />
    </div>
  </div>
</template>

<script>
import HeaderCarousel from '~/components/HeaderCarousel.vue'
export default {
  name: 'AboutPage',
  components: {
    HeaderCarousel,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/about')
    const title = data.title
    const image = data.images
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
img {
  height: 24rem;
  width: 30rem;
  margin-left: 50%;
  transform: translate(-50%, 0);
  border-radius: 10px 10px 10px 10px;
}
</style>
