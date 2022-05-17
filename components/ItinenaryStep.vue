<template>
  <div class="container-fluid">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-2">
          <img :src="img" class="img rounded-start card-image" />
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h4 class="card-title">{{ name }}</h4>
            <p class="card-text">
              {{ description }} fvjhcvbjw dcncsdn fn dn j fdsn dn dfn sdmk nj
              dfj fnio fn oisdfn fosn n nj snjnj n ofdn jn jnjin ij fdnj n fiujn
              dfji nj fdncj n junaju njun
            </p>
            <nuxt-link :to="`/details/${category}/${this.id}`">
              <div class="btn btn-primary btn-blu">See more details...</div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 4px solid lightgray;
}
.card-title {
  color: black;
  text-align: left;
}
.card-text {
  color: black;
  text-align: left;
}
.card:hover {
  border: 2px solid blue;
}
.btn-blu {
  background-color: lightblue;
  border: 2px solid blue;
}
.card-image {
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  width: 200px;
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
