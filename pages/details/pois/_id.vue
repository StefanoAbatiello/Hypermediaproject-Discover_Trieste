<template>
  <div class="container-fluid px-5">
    <div class="bg-primary text-white text-center">
      <h1>{{name}}</h1>
    </div>
    <div class="container-fluid m-0 p-0">
      Info:<br>
      <button class="prova m-0" value="prova" @click="accessibilityPrint()">Accessibility</button>
      <button class="prova m-0" value="prova" @click="timePrint()">Time</button>
      <button class="prova m-0" value="prova" @click="getPrint()">How to get here</button>
      <button class="prova m-0" value="prova" @click="pricePrint()">Prices</button>
    </div>
    <div id="test" class="test" >
      jvbvbdv ds cj ecki   kxn k
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
    const { data } = await $axios.get('/api/itineraries/' + id)
    return {
      name: data.name,
      img: data.img,
      description: data.description,
    }
  },
  head(){
    return {
      title: this.name
    }
  },
  mounted(){
    const date = new Date()
    // Example on how to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToList() {
      this.$router.push('/itineraries')
    },
    accessibilityPrint(){
      document.getElementById("test").innerHTML="accessibility";
    },
    timePrint(){
      document.getElementById("test").innerHTML="time";
    },
    pricePrint(){
      document.getElementById("test").innerHTML="prices";
    },
    getPrint(){
      document.getElementById("test").innerHTML="How to get here";
    }
  },
}
</script>

<style scoped>
.prova{
  background: lightblue;
  width: 20%;
  height: auto;
}
.colonna{
  width: 200px;
  margin: 0;
}
.test{
  border-style: solid;
  height: 100px;
}
</style>
