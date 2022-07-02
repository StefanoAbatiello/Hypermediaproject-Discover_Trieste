<template>
  <div class="container-fluid pb-2">
    <div class="card m-1 shadow-lg p-3">
      <nuxt-link :to="`/pois/${id}`" style="text-decoration: none">
        <div
          v-if="notEven(id)"
          class="row no-gutters d-flex px-3 py-2 justify-content-start"
        >
          <div class="col-md-5 m-0 p-0">
            <img
              :src="require(`~/assets/${img}`)"
              class="img responsive card-image"
              alt=""
            />
          </div>
          <div class="col-md-7 m-0 p-0">
            <div class="card-body1 ps-3 p-0">
              <h3 class="card-title">{{ name }}</h3>
              <p class="card-text text-black">
                {{ description }}
              </p>
            </div>
          </div>
        </div>

        <div v-else class="row no-gutters d-flex px-3 py-2 justify-content-end">
          <div class="col-md-7 m-0 p-0">
            <div class="card-body2 pe-3 p-0">
              <h3 class="card-title">{{ name }}</h3>
              <p class="card-text text-black">
                {{ description }}
              </p>
            </div>
          </div>
          <div class="col-md-5 m-0 p-0">
            <img
              :src="require(`~/assets/${img}`)"
              class="img responsive card-image"
              alt=""
            />
          </div>
        </div>
      </nuxt-link>
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
      return !!(id % 2)
    },
  },
}
</script>

<style scoped>
.card-title {
  color: royalblue;
  width: 100%;
  font-size: 24px;
  text-align: center;
}
.card-text {
  text-align: center;
}
.card-body1,
.card-body2 {
  width: auto;
  margin-left: 3px;
  margin-top: 50px;
}
.card-image {
  width: 100%;
  height: auto;
  max-height: 260px;
  border-radius: 20px;
}
.card {
  border-radius: 20px;
}
.card:hover{
  border: 1px solid royalblue;
}
@media (max-width: 992px) {
  .card-body1 {
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .card-body2 {
    margin-top: 0px;
    margin-bottom: 20px;
  }
}
</style>