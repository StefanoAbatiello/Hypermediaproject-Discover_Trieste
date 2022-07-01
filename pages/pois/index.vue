<template>
  <div>
    <div class="image-header mb-5">
      <img class="img" :src="require(`~/assets/homeImg/trieste20.jpeg`)" />
      <div class="overlay"></div>
      <h1>Points of Interest</h1>
    </div>
    <section class="poi-list">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          <preview-card
            v-for="(poi, poiIndex) of poiList"
            :id="poi.id"
            :key="`poi-index-${poiIndex}`"
            :name="poi.name"
            :img="poi.img"
            :category="'pois'"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PreviewCard from '~/components/PreviewCard.vue'
export default {
  name: 'PoisPage',
  components: {
    PreviewCard,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/pois')
    return {
      poiList: data,
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
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30rem;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.15);
}
</style>