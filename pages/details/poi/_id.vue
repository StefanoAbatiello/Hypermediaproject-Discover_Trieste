<template>
  <div class="container-fluid px-5 mb-5">
    <div class="bg-primary text-white text-center">
      <h1>{{ name }}</h1>
    </div>
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a @click="backToList()">allPoi</a></li>
      <li class="breadcrumb-item"><a href="#">Summer 2017</a></li>
      <li class="breadcrumb-item"><a href="#">Italy</a></li>
      <li class="breadcrumb-item active">Rome</li>
    </ul>
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
    <ul class="pagination">
        <li class="page-item"><a class="page-link" @click="next()">Previous</a></li>
        <li class="page-item"><a class="page-link" @click="next(id)">Next</a></li>
    </ul>
    <script>
      console.log({{id}});
    </script>
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
    return {
      id,
      name: data.name,
      img: data.img,
      description: data.description,
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
    next(id){
      const temp= parseInt(id) + 1;
      this.$router.push('/details/poi/'+temp);
    },
    backToList() {
      this.$router.push('/pois')
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
