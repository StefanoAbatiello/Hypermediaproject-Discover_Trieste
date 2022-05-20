<template>
  <div class="container-fluid px-0 mb-4 mt-1">
    <div class="text-white text-left sign">
      <h1 class="title">{{ name }}</h1>
      <ul class="ms-3 breadcrumb">
      <li class="breadcrumb-item"><a @click="backToList()">AllPoi/</a></li>
    </ul>
    </div>
    <img :src="img" class="img-fluid mx-auto d-block" />
    <div id="textBox" class="test mt-4 p-5 bg-danger text-white rounded">
      <h1>{{name}}</h1>
      <p>{{description}}</p>
    </div>
    <div id="textBox" class="test mt-4 mb-4 p-5 bg-danger text-white rounded">
      {{name}} is correlated with the following itinerary: <nuxt-link :to="`/details/itinerary/${itinerary.id}`"><div class="btn text-white btn-details"> <b>{{itinerary.name}}</b> </div></nuxt-link>
    </div>
    <tab-card
          :access-info="`accessabilty informations are needed here`"
          :time-info="`this poi is always open`"
          :directions="`print a map of the point of interest`"
          :prices="`free ticket to visit this poi`"
    />
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" @click="previous(id, len)">Previous</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="backToList()">Back to All Pois</a>
      </li>
      <li class="page-item">
        <a class="page-link" @click="next(id, len)">Next</a>
      </li>
    </ul> 
    <script>console.log({{ itinerary }})</script>
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
    // const { relatedItinerary } = await $axios.get('/itineraries/' + data.poi.itineraryId)
    return {
      itinerary: data.poi.itinerary,
      len: data.len,
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
    next(id, len) {
      if (parseInt(id) === parseInt(len)) {
        this.$router.push('/details/poi/1')
      } else {
        const temp = parseInt(id) + 1
        this.$router.push('/details/poi/' + temp)
      }
    },
    previous(id, len) {
      if (parseInt(id) === 1) {
        this.$router.push('/details/poi/' + len)
      } else {
        const temp = parseInt(id) - 1
        this.$router.push('/details/poi/' + temp)
      }
    },
    backToList() {
      this.$router.push('/pois')
    },
    print(context) {
      if (context === 'description') {
        document.getElementById('textBox').innerHTML = 'description'
      }
      // document.getElementById('textBox').innerHTML = {description}
    },
    descriptionPrint(description) {
      document.getElementById('textBox').innerHTML = description
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
.title{
  margin-left: 10px;
}
.colonna {
  width: 200px;
  margin: 0;
}
.sign{
  background: rgb(195, 75, 75);
}
.test {
  border-style: solid;
}
</style>
