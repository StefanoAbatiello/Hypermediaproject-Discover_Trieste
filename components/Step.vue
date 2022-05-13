<template>
  <div class="step" style="width: 18rem">
    <div
      class="step-img-top step-image"
      :style="{ 'background-image': 'url(' + img + ')' }"
    ></div>
    <div class="step-body">
      <h5 class="step-title">{{ name }}</h5>
      <p class="step-text">
        {{ description }}
      </p>
      <nuxt-link :to="`/details/${id}`">
        <div class="btn btn-primary btn-orange">See Details</div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid lightgray;
}
.card:hover {
  border: 2px solid blue;
}
.btn-orange {
  background-color: greenyellow;
  border: 2px solid greenyellow;
}
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
}
</style>

<script>
export default {
  name: 'StepComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
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
