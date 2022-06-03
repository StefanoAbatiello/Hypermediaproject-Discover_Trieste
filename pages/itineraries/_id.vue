<template>
  <div class="container-fluid px-0 mb-4 mt-1">
    <div class="row-md d-flex justify-content-between text-white sign">
      <div class="col">
        <h1 class="title text-left">{{ name }}</h1>
        <ul class="ms-3 breadcrumb">
          <li class="breadcrumb-item text-white">
            <a @click="backToItineraries()">All itineraries/</a>
            <a>{{ name }}</a>
          </li>
        </ul>
      </div>

      <div class="col align-self-center botton-cont">
        <button
          type="button"
          class="btn btn-lg mb-3 ms-2 btn-back text-white"
          @click="backToItineraries()"
        >
          See all itineraries
        </button>
      </div>
    </div>

    <div id="demo" class="carousel slide" data-bs-ride="carousel">
      <!-- Indicators/dots -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>

      <!-- The slideshow/carousel -->
      <div class="carousel-inner mt-2">
        <div class="carousel-item active">
          <img
            :src="require(`~/assets/${img[0]}`)"
            class="mx-auto d-block"
            style="height: 22rem;widht: 25rem"
          />
        </div>
        <div class="carousel-item ">
          <img
            :src="require(`~/assets/${img[1]}`)"
            class="mx-auto d-block"
            style="height: 23rem;widht: 22rem"
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require(`~/assets/${img[2]}`)"
            class="mx-auto d-block"
            style="height: 23rem;widht: 22rem"
          />
        </div>
      </div>

      <!-- Left and right controls/icons -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>
    
    <div class="m-3 des-div">
      <b> Description: </b>
      <p class="lead">
        {{ description }}
      </p>
    </div>
    <div id="backgr" class="text-white rounded backgr">
      <h1 class="title">List of itinerary steps</h1>
      <div class="list-fluid mt-1 list">
        <itinerary-step
          v-for="(poi, poiIndex) of poiList"
          :id="poi.id"
          :key="`poi-index-${poiIndex}`"
          :name="poi.name"
          :img="poi.img"
          :description="poi.description"
          :category="'poi'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import ItineraryStep from '~/components/ItineraryStep.vue'
export default {
  name: 'DetailsPage',
  components: {
    ItineraryStep,
  },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itineraries/' + id)
    return {
      name: data.itinerary.name,
      img: data.itinerary.img,
      description: data.itinerary.description,
      poiList: data.relatedPois,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  methods: {
    backToItineraries() {
      this.$router.push('/itineraries/')
    },
  },
}
</script>

<style scoped>
.sign {
  background: rgb(195, 75, 75);
}
.title {
  margin-left: 10px;
}
.backgr {
  background: rgb(195, 75, 75);
}
.list {
  margin-left: 8%;
  margin-right: 8%;
}
.carousel-inner > .item > img { 
  margin: 0 auto; 
} 
.btn-back {
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translate(0%, -50%);
  border-color: whitesmoke;
  color: rgb(195, 75, 75);
}
.arrow{
  color: rgb(195, 75, 75);
  opacity: 1;
}
.botton-cont {
  position: relative;
}
</style>