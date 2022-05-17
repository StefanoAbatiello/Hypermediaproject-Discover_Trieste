<template>
  <div class="container-fluid">
    <div class="card mb-3 shadow p-3">
      <div class="row g-0">
        <div class="col-md-2">
          <img :src="img" class="img rounded-start card-image" />
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h4 class="card-title">{{ name }}</h4>
            <p class="card-text">
              {{ description }}
            </p>
            <nuxt-link :to="`/details/${category}/${id}`">
              <div class="btn btn-primary btn-details text-white">See more details...</div>
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
      this.$router.push(`/details/${this.id}`)
    },
  },
}
</script>

<style scoped>
.card:hover {
  border: 3px solid rgb(136, 24, 24);
}
.card-title {
  color: rgb(136, 24, 24);
  text-align: left;
}
.card-text {
  color: black;
  text-align: left;
}
.btn-details {
  background-color: rgb(136, 24, 24);
}
.card-image {
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  width: 200px;
}
</style>