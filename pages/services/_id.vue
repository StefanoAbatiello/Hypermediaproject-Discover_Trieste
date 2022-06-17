<template>
  <div class="container-fluid px-0">
    <div class="image-header mb-3">
      <img style="height: 22rem; widht: 25rem" />
      <b class="header"> Types of service </b>
    </div>
    <section class="main-content">
      <div class="container">
        <div class="row-md d-flex justify-content-between sign">
          <div class="col">
            <nuxt-link to="/services">
              <h5 class="btn back-btn px-0">
                <span class="material-icons px-0 back-icon">arrow_back_ios</span
                >Type of services
              </h5>
            </nuxt-link>
            <!-- <ul class="ms-4 breadcrumb">
          <li class="breadcrumb-item ">
            <a @click="backToServices()">Types of services</a>
             <a>{{ title }}/</a> 
          </li>
        </ul> -->
            <h1 class="mb-5 title">{{ title }}</h1>
          </div>
          <!-- <div class="col align-self-center botton-cont">
        <button
          type="button"
          class="btn btn-lg mb-3 ms-2 btn-back"
          @click="backToServices()"
        >
          See all service types
        </button>
      </div> -->
        </div>

        <div class="m-0 des-div">
          <p class="description lead ps-0 p-2">
            {{ description }}
          </p>
        </div>
        <div class="row-md mt-3">
          <serviceCard
            v-for="(service, serviceIndex) of serviceList"
            :key="`service-index-${serviceIndex}`"
            :id="service.id"
            :name="service.name"
            :address="service.address"
            :description="service.description"
            :time="service.time"
            :img="service.img"
            :map="service.map"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CommonMixin from '~/mixins/common'
import ServiceCard from '~/components/ServiceCard.vue'
// import MapCard from '~/components/MapCard.vue'
export default {
  name: 'ServiceDetailsPage',
  components: {
    ServiceCard,
    // MapCard,
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
  // methods: {
  //   backToServices() {
  //     this.$router.push('/services')
  //   },
  // },
}
</script>

<style scoped>
.header {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  color: whitesmoke;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 5vw;
  position: absolute;
  top: 200px;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  /* -webkit-text-stroke: 1px black; */
}
.image-header {
  background-image: url('assets\homeImg\trieste22.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.9;
  padding-top: 100px;
}
.title {
  font-size: 4vw;
  color: royalblue;
}
.description {
  font-size: 2vw;
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