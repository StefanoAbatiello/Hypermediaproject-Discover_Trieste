<template>
  <div class="container-fluid px-0">
    <div class="mb-3" >
      <img class="image-header" style="height: 30rem" :src="require(`~/assets/${img}`)"/>
    </div>
    <section class="main-content">
      <div class="container">
        <div class="row-md d-flex justify-content-between sign">
          <div class="col">
            <nuxt-link to="/services">
              <div class="btn back-btn px-0">
                <h4>
                  <span class="material-icons px-0 back-icon"
                    >arrow_back_ios</span
                  >
                  Types of service
                </h4>
              </div>
            </nuxt-link>
            <h2 class="mb-5 title">{{ title }}</h2>
          </div>
        </div>

        <div class="m-0 des-div">
          <p class="description lead ps-0 p-2">
            {{ description }}
          </p>
        </div>
        <div class="row-md mt-3">
          <serviceCard
            v-for="(service, serviceIndex) of serviceList"
            :id="service.id"
            :service-type-id="service.serviceTypeId"
            :key="`service-index-${serviceIndex}`"
            :name="service.name"
            :address="service.address"
            :description="service.description"
            :time="service.time"
            :img="service.img"
            :map="service.map"
            :info="service.info"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from '~/components/ServiceCard.vue'
export default {
  name: 'ServiceDetailsPage',
  components: {
    ServiceCard,
  },
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/service/' + id)
    return {
      title: data.type.name,
      description: data.type.description,
      img: data.type.img,
      serviceList: data.services,
    }
  },
  head() {
    return {
      title: this.name,
    }
  }
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
}
.image-header {
  opacity: 0.9;
  width: 100%;
}
.botton-cont {
  position: relative;
}
</style>