<template>
  <div class="container-fluid px-5 mb-5 mt-3">
    <div class="bg-danger text-white text-left">
      <h1>{{ name }}</h1>
    </div>
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a @click="backToList()">allPoi/</a></li>
    </ul>
    <img :src="img" class="img-fluid mx-auto d-block" />
    <div id="textBox" class="test mt-4 p-5 bg-danger text-white rounded">
      <h1>{{name}}</h1>
      <p>{{description}}</p>
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
    return {
      len: data.len,
      id,
      name: data.poi.name,
      img: data.poi.img,
      description: data.poi.description,
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
.colonna {
  width: 200px;
  margin: 0;
}
.test {
  border-style: solid;
}
</style>
