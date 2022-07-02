<template>
  <div >
    <div class="image-header mb-5">
      <img class="img" :src="require(`~/assets/homeImg/contactCopertina.jpeg`)" alt="background"/>
      <div class="overlay"></div>
      <h1>Contact Us</h1>
    </div>
    <div class="container">
      <p class="mt-4">
       Do you need more information about Trieste? Here you can find some useful contacts and links in order to deep explore some city aspects 
      </p>
      <b>Touristic information</b>
      
      <b>University contacts</b>
      <p class="mt-2">
        Geographically,Trieste enjoys a unique and beautiful natural location as
        it is surrounded by the Carsic hills and the Adriatic Sea. The quality
        of life is high, and one's leisure time can be spent in tourism, culture
        and sports without the drawbacks that affect larger Italian cities such
        as heavy traffic jams, smog, and delinquency.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
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
.image-header {
  height: 30rem;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
