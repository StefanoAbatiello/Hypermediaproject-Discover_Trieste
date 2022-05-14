<template>
   <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="img" class="img-fluid rounded-start card-image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">{{ description }}</p>
        <nuxt-link :to="`/details/${category}/${this.id}`">
        <div class="btn btn-primary btn-blu">See More</div>
      </nuxt-link>
      </div>
    </div>
  </div>
</div>
</template>


<style scoped>
.card {
  border: 4px solid lightgray;
}
.card:hover {
  border: 2px solid blue;
}
.btn-blu {
  background-color: lightblue;
  border: 2px solid blue;
}
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
  width: 160px;
}
</style>

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
