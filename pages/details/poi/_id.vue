<template>
  <div class="container-fluid px-5 mb-5">
    <div class="row mt-3">
      <card
        v-for="(poi, poiIndex) of poiList"
        :id="poi.id"
        :key="`cat-index-${poiIndex}`"
        class="col-sm-2 m-2"
        :name="poi.name"
        :img="poi.img"
      />
    </div>
    <div class="bg-primary text-white text-center">
      <h1>{{ name }}</h1>
    </div>
    <img :src="img" class="img-fluid mx-auto d-block" />
    <div class="container-fluid m-0 p-0">
      Info:<br />
      <button class="prova m-0" value="prova" @click="accessibilityPrint()">
        Accessibility
      </button>
      <button class="prova m-0" value="prova" @click="timePrint()">Time</button>
      <button class="prova m-0" value="prova" @click="getPrint()">
        How to get here
      </button>
      <button class="prova m-0" value="prova" @click="pricePrint()">
        Prices
      </button>
    </div>
    <div id="test" class="test mt-4 p-5 bg-primary text-white rounded">
      <h1>Jumbotron Example</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat...
      </p>
    </div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/pois/' + id)
    const { dio } = await $axios.get('/api/dio/1')
    return {
      name: data.name,
      img: data.img,
      description: data.description,
      poiList: dio,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  mounted() {
    const date = new Date()
    // Example on how to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToList() {
      this.$router.push('/itineraries')
    },
    accessibilityPrint() {
      document.getElementById('test').innerHTML = 'accessibility'
    },
    timePrint() {
      document.getElementById('test').innerHTML = 'time'
    },
    pricePrint() {
      document.getElementById('test').innerHTML = 'prices'
    },
    getPrint() {
      document.getElementById('test').innerHTML = 'How to get here'
    },
  },
}
</script>

<style scoped>
.prova {
  background: lightblue;
  width: 20%;
  height: auto;
}
.colonna {
  width: 200px;
  margin: 0;
}
.test {
  border-style: solid;
}
</style>
