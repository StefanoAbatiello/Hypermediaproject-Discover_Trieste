<template>
  <div class="container-fluid px-0 mb-4 mt-1">

    <div class="row justify-content-between text-white sign">
      <div class="col">
        <h1 class="title text-left">{{ title }}</h1>
        <ul class="ms-3 breadcrumb">
          <li class="breadcrumb-item text-white">
            <a @click="backToServices()">All types of services/</a>
            <a>{{ title }}/</a>
          </li>
        </ul>
      </div>
      <div class="col align-self-center botton-cont">
        <button
          type="button"
          class="btn btn-lg mb-3 ms-2 text-white btn-back"
          @click="backToServices()"
        >
          See all service types
        </button>
      </div>
    </div>

    <div class="m-3 des-div">
      <h2 class="lead">
        {{ description }}
      </h2>
    </div>
    <div class="mt-3">
      <serviceCard
        v-for="(service, serviceIndex) of serviceList"
        :key="`service-index-${serviceIndex}`"
        :name="service.name"
        :address="service.address"
        :description="service.description" 
        :time="service.time"
        :img="service.img"
      />
    </div>
    <div><map-card /></div>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import ServiceCard from '~/components/ServiceCard.vue'
import MapCard from '~/components/MapCard.vue'
export default {
  name: 'ServiceDetailsPage',
  components: {
    ServiceCard,
    MapCard,
  },
  mixins: [CommonMixin],

  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/service/' + id)
    return {
      title: data.type.name,
      description: data.type.description,
      serviceList: data.services,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  mounted() {
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToServices() {
      this.$router.push('/services')
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