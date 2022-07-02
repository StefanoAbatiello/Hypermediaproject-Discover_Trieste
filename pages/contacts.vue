<template>
<!-- Page to display the useful contacts of Trieste -->
  <div >
    <!-- Header of the Page -->
    <div class="image-header mb-5">
      <img class="img" :src="require(`~/assets/homeImg/contactCopertina.jpeg`)" alt="background"/>
      <div class="overlay"></div>
      <h1>Contact Us</h1>
    </div>
    <!-- List of all the informations -->
    <div class="container">
      <p class="mt-4">
       Do you need more information about Trieste? Here you can find some useful contacts and links in order to deep explore some city aspects 
      </p>
      <!-- touristic Information -->
      <div>
        <b>Touristic information</b>
        <p>website:
          <a href="https://www.discover-trieste.it/" target="_blank">www.discover-trieste.it</a>
        </p>
        <p>e-mail: info.trieste@promoturismo.fvg.it</p>
      </div>
      <!-- University Information -->
      <div>
        <b>University contacts</b>
        <p>website:
          <a href="https://www.units.it/" target="_blank">www.units.it</a> 
        </p>
        <p>e-mail: scpolitiche.studenti@amm.units.it</p>
      </div>
      <!-- Municipality Information -->
      <div>
        <b>Municipality contacts</b>
        <p>website:
          <a href="https://www.comune.trieste.it/" target="_blank">www.comune.trieste.it</a> 
        </p>
        <p>e-mail: comune.trieste@certgov.fvg.it</p>
      </div>
      <!-- Emergency Informations -->
      <div>
        <b>Emergency contacts</b>
        <p>Ambulance: 118</p>
        <p>Triage of Cattinara Hospital: 040 399 4563</p>
        <p>Police station: 040 303 0661</p>
        <p>Firefighters station: 040 378 9911</p>
      </div>
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

b{
  font-size: 24px;
  font-weight: 700;
}
</style>
