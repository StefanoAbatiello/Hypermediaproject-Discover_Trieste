<template>
  <div class="container-fluid pb-2">
    <div class="card m-1 shadow-lg p-3">

      <div v-if="notEven(id)" class="row no-gutters d-flex px-3 py-2 justify-content-start">
        <div class="col-md-5 m-0 p-0">
          <nuxt-link :to="`/pois/${id}`">
              <img :src="require(`~/assets/${img}`)" class="img responsive card-image"/>
            </nuxt-link>
        </div>
        <div class="col-md-7 m-0 p-0">
          <div class="card-body">
            <nuxt-link :to="`/pois/${id}`" style="text-decoration: none">
              <h3 class="card-title">{{ name }}</h3>
            </nuxt-link>
            <p class="card-text">
              {{ description }}
            </p>
          </div>
        </div>
      </div>

      <div v-else class="row no-gutters d-flex px-3 py-2 justify-content-end">
        <div class="col-md-7 m-0 p-0">
          <div class="card-body">
            <nuxt-link :to="`/pois/${id}`" style="text-decoration: none">
              <h3 class="card-title">{{ name }}</h3>
            </nuxt-link>
            <p class="card-text">
              {{ description }}
            </p>
          </div>
        </div>
        <div class="col-md-5 m-0 p-0">
          <nuxt-link :to="`/pois/${id}`">
              <img :src="require(`~/assets/${img}`)" class="img responsive card-image"/>
            </nuxt-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ItineraryStepComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/pois/${this.id}`)
    },
    notEven(id) {
      return !!(id%2)
    },
  },
}
</script>

<style scoped>
.card-title {
  color: royalblue;
  text-align: left;
}
.h3{
  font-size: 24px;
  font-weight: 700;
}
.card-body {
  width: auto;
  margin-left: 3px;
}
.card-image {
  width: 100%;
  height: auto;
  max-height: 260px;
  border-radius: 20px;
}
.card{
  border-radius: 20px;
}
</style>