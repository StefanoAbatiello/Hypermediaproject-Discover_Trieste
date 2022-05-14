<template>
  <div class="container-fluid px-5 mb-5">
    <div class="row mt-3">
      <card
        v-for="(cat, catIndex) of catList"
        :id="cat.id"
        :key="`cat-index-${catIndex}`"
        class="col-sm-2 m-2"
        :name="cat.name"
        :img="cat.img"
        :breed="cat.breed"
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
import Card from '~/components/Card.vue'
import CommonMixin from '~/mixins/common'
export default {
  name: 'DetailsPage',
  components: {
    Card,
  },
  mixins: [CommonMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/pois/' + id)
    const { cats } = await $axios.get('/api/cats')
    return {
      name: data.name,
      img: data.img,
      description: data.description,
      catList: cats,
    }
  },
  async asyncGatti({ route, $axios }) {
    
  },
  data(){

  },
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
