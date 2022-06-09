<template>
  <div class="container-fluid px-0 mb-4 mt-1">
    <header-carousel class="carousel"
    :images="img"
    :height="35"
    />
    <div class="text-white sign row-md d-flex justify-content-between">
      <div class="col">
        <h1 class="title text-left">{{ name }}</h1>
        <ul class="ms-3 breadcrumb">
          <li class="breadcrumb-item text-white">
            <a @click="backToPois()">All pois/</a>
            <a>{{ name }} </a>
          </li>
        </ul>
      </div>

      <div class="col align-self-center botton-cont">
        <button
          type="button"
          class="btn btn-lg mb-3 ms-2 btn-back text-white"
          @click="backToPois()"
        >
          See all Points of interest
        </button>
      </div>
    </div>

    <!-- <img :src="require(`~/assets/${img[0]}`)" class="img-fluid mx-auto d-block my-4" /> -->
    <div id="textBox" class="test mt-4 p-5 text-white rounded">
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
    </div>

    <tab-card
      :access-info="`accessibilty informations are needed here`"
      :time-info="`this poi is always open`"
      :directions="`print a map of the point of interest`"
      :prices="`free ticket to visit this poi`"
    />

    <div id="textBox" class="test mt-4 mb-4 p-5 text-white rounded">
      {{ name }} is correlated with the following itinerary:
      <nuxt-link :to="`/itineraries/${itinerary.id}`"
        ><div class="btn text-white btn-details">
          <b>{{ itinerary.name }}</b>
        </div></nuxt-link
      >
      <div v-if="data.relatedEvent !== null">
        and it is host of
      <nuxt-link :to="`/events/${data.relatedEvent.id}`">
        <div class="btn text-white btn-details">
          <b >{{ data.relatedEvent.name }}</b>
        </div></nuxt-link
      >
      </div>
    </div>

    <!-- carousel -->
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
      <div class="carousel-inner row w-100 mx-auto" role="listbox">
        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
          <img
            :src="require(`~/assets/${data.relatedPois[2].img}`)"
            class="img-fluid mx-auto d-block"
            style="height: 23rem; widht: 22rem"
          />
          <div class="carousel-caption d-none d-md-block">
            <nuxt-link :to="`/pois/${data.relatedPois[2].id}`">
              <div class="btn btn-danger text-white btn-lg">
                {{ data.relatedPois[2].name }}
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
          <img
            :src="require(`~/assets/${data.relatedPois[0].img}`)"
            class="img-fluid mx-auto d-block"
            style="height: 23rem; widht: 22rem"
          />
          <div class="carousel-caption d-none d-md-block">
            <nuxt-link :to="`/pois/${data.relatedPois[0].id}`">
              <div class="btn btn-danger text-white btn-lg">
                {{ data.relatedPois[0].name }}
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
          <img
            :src="require(`~/assets/${data.relatedPois[1].img}`)"
            class="img-fluid mx-auto d-block"
            style="height: 23rem; widht: 22rem"
          />
          <div class="carousel-caption d-none d-md-block">
            <nuxt-link :to="`/pois/${data.relatedPois[1].id}`">
              <div class="btn btn-danger text-white btn-lg">
                {{ data.relatedPois[1].name }}
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>

      <!-- Left and right controls/icons -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span class="material-icons" style="color: rgb(195, 75, 75)"> arrow_back_ios </span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span class="material-icons" style="color: rgb(195, 75, 75)"> arrow_forward_ios </span>
      </button>
    </div>
    <!-- end carousel -->

    <script>
      console.log({{ data }})
    </script>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import TabCard from '~/components/TabCard.vue'
export default {
  name: 'DetailsPage',
  components: {
    TabCard,
  },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/pois/' + id)
    // const di = 1;
    // const { it } = await $axios.get('/itineraries/' + di)
    // const { relatedItinerary } = await $axios.get('/itineraries/' + data.poi.itineraryId)
    return {
      itinerary: data.poi.itinerary,
      id,
      name: data.poi.name,
      img: data.poi.img,
      description: data.poi.description,
      data,
    }
  },
  data() {},
  head() {
    return {
      title: this.name,
    }
  },
  mounted() {
    // const date = new Date()
    // Example on how to use mixinx
    // console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToPois() {
      this.$router.push('/pois/')
    },
  },
}
</script>

<style scoped>
.prova {
  background: lightskyblue;
  width: 20%;
  height: auto;
}
.title {
  margin-left: 10px;
}
.colonna {
  width: 200px;
  margin: 0;
}
.carousel{
  padding-top: 100px;
  background-color: lightblue;
}
.sign {
  background: rgb(195, 75, 75);
}
.test {
  border-style: solid;
  background-color: rgb(195, 75, 75);
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
