<template>
  <div>
  <div class="container-fluid px-0 mt-1 mb-4">
          <header-carousel class="carousel"/>
    <div class="text-white sign d-flex row-md justify-content-between">
      <div class="col">
        <h1 class="title text-left">{{ name }}</h1>
        <ul class="ms-3 breadcrumb">
          <li class="breadcrumb-item text-white">
            <a @click="backToEvents()">All events/</a>
            <a>{{ name }} </a>
          </li>
        </ul>
      </div>
      <div class="col align-self-center botton-cont">
        <button
          type="button"
          class="btn btn-lg mb-3 ms-2 btn-back text-white"
          @click="backToEvents()"
        >
          See all events
        </button>
      </div>
    </div>
    <div class="container px-0 mt-1 mb-4">
      <!-- <div class="image-event text-center">
        <img class="img rounded ms-2 mt-5" :src="require(`~/assets/${img}`)" /> -->
      </div>
      <p class="lead">
        
      </p>
      <!-- <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4 mb-4"
        @click="goToPoi(poi.id)"
      >
        {{poi.name}}
      </button> -->
      <div id="textBox" class="test mt-4 mb-4 p-5 rounded textBox">
        {{ description }}<br>{{ name }} take place at:
        <nuxt-link :to="`/pois/${poi.id}`">
          <div class="btn btn-details">
            <b>{{ poi.name }}</b>
          </div>
        </nuxt-link>
      </div>
      <tab-card
        :access-info="accessInfo"
        :time-info="timeInfo"
        :directions="directions"
        :prices="prices"
      />
    </div>
  </div>
</template>

<script>
import TabCard from '~/components/TabCard.vue'
export default {
  name: 'DetailsPage',
  components: {
    TabCard,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/event/' + id)
    return {
      name: data.name,
      img: data.img,
      description: data.description,
      poi: data.poi,
      accessInfo: data.accessInfo,
      timeInfo: data.timeInfo,
      directions: data.directions,
      prices: data.prices,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  methods: {
    backToEvents() {
      this.$router.push('/events/')
    },
    goToPoi(poiId) {
      this.$router.push('/pois/' + poiId)
    },
  },
}
</script>

<style scoped>
.title {
  margin-left: 10px;
}
.carousel{
  padding-top: 100px;
}
.sign {
  background: rgb(195, 75, 75);
}
.textBox {
  background: rgb(195, 75, 75);
  color: whitesmoke;
}
.img {
  height: auto;
  width: 75%;
}
.btn-details{
    color: whitesmoke;
}
.btn-poi {
  border-color: rgb(195, 75, 75);
  color: rgb(195, 75, 75);
}
.btn-back {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(0%, -50%);
  border-color: whitesmoke;
  color: rgb(195, 75, 75);
}
.botton-cont {
  position: relative;
}
</style>