<template>
<!-- page to display a Type of Service -->
  <div>
    <!-- Header image -->
    <div class="image-header mb-3" >
      <img class="img" style="height: 30rem" :src="require(`~/assets/${img}`)" alt="background"/>
    <div class="overlay"></div>
    </div>
    <!-- main section -->
    <section class="main-content">
      <div class="container">
        <div class="row-md d-flex justify-content-between sign">
          <div class="col">
            <!-- Breadcrumps -->
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
            <!-- title -->
            <h2 class="mb-5 title">{{ title }}</h2>
          </div>
        </div>

        <!-- Short description of the service -->
        <div class="m-0 des-div">
          <p class="description lead ps-0 p-2">
            {{ description }}
          </p>
        </div>
        <!-- List of all the same service -->
        <div class="row-md mt-3">
          <!-- single service -->
          <serviceCard
            v-for="(service, serviceIndex) of serviceList"
            :id="service.id"
            :key="`service-index-${serviceIndex}`"
            :service-type-id="service.serviceTypeId"
            :name="service.name"
            :address="service.address"
            :description="service.description"
            :time="service.timeInfo"
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
      meta: [
        {
          hid:'description',
          name:'description',
          content:'here you can find all the searched services',
        }
      ]
    }
  }
}
</script>

<style scoped>
.image-header {
  height: 30rem;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30rem;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.3);
}
</style>