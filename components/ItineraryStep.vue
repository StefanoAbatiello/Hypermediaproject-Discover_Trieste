<template>
  <div class="container-fluid pb-2">
    <div class="card m-1 shadow-lg p-3">
      <div class="row-md row-cols-2 d-flex justify-content-start">
        <div class="col-md-auto">
          <img :src="require(`~/assets/${img}`)" class="img rounded card-image" />
        </div>
        <div class="col ml-auto">
          <div class="card-body ms-4">
            <h4 class="card-title">{{ name }}</h4>
            <p class="card-text ">
              {{ description }}
            </p>
            <nuxt-link :to="`/pois/${id}`">
              <div class="btn text-white btn-details">See more details...</div>
            </nuxt-link>
          </div>
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
  },
}
</script>

<style scoped>
.card-title {
  color: rgb(136, 24, 24);
  text-align: left;
}
.card-text {
  color: black;
  text-align: left;
}
.card-body {
  width: auto;
  margin-left: 3px;
}
.btn-details {
  background-color: rgb(136, 24, 24);
  opacity: 0.7;
}
.btn-details:hover {
  opacity: 1;
}
.card-image {
  width: 320px;
  height: 200px;
 
}
</style>