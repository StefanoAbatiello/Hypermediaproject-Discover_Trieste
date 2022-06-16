<template>
  <div class="container-fluid pb-2">
    <div class="card m-1 shadow-lg p-3">

      <div v-if="notEven(id)" class="row no-gutters d-flex justify-content-start">
        <div class="col-md-5 m-0 p-0 mr-4">
          <img :src="require(`~/assets/${img}`)" class="img responsive ms-3 card-image"/>
        </div>
        <div class="col-md-7 ml-4 ">
          <div class="card-body ps-3">
            <h3 class="card-title">{{ name }}</h3>
            <p class="card-text ">
              {{ description }}
            </p>
            <nuxt-link :to="`/pois/${id}`">
              <div class="btn text-white btn-details">See more details...</div>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div v-else class="row no-gutters d-flex justify-content-end">
        <div class="col-md-7 m-0 p-0">
          <div class="card-body">
            <h3 class="card-title">{{ name }}</h3>
            <p class="card-text">
              {{ description }}
            </p>
            <nuxt-link :to="`/pois/${id}`">
              <div class="btn text-white btn-details">See more details...</div>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-5 m-0 p-0 pe-3">
          <img :src="require(`~/assets/${img}`)" class="img responsive me-3 card-image"/>
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
.card-text-sx {
  color: black;
  text-align: left;
}
.card-body {
  width: auto;
  margin-left: 3px;
}
.btn-details {
  background-color: royalblue;
  opacity: 0.6;
}
.btn-details:hover {
  opacity: 1;
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