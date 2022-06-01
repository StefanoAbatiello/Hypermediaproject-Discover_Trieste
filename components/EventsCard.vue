<template>
    <div :id="`${season}`" class="m-1 shadow p-3 card" >
      <div class="row row-cols-2 justify-content-start">
        <div class="col-md-auto align-self-center">
          <img :src="require(`~/assets/${img}`)" class="img rounded card-image" />
        </div>
        <div class="col ml-auto">
          <div class="card-body">
            <h4 class="card-title">{{ name }}</h4>
            <div class="card-text"></div>
            <p>
              {{ date }}
            </p>
            <p>
              {{ location }}
            </p>
            <nuxt-link :to="`/${category}/${id}`">
              <div class="btn text-white btn-details">See more details...</div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'EventsCard',
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
    date: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    location: {
      type:String,
      required: true,
    },
    season: {
      type: String,
      required: true
    }
  },
  methods: {
    goToDetails() {
      this.$router.push(`/details/${this.id}`)
    },
  },
}
</script>

<style scoped>
.card{
  min-width: 400px;
  min-height: 230px;
  height: auto;
  border: transparent;
  background-color: transparent;
}
.card:hover {
  border: 3px solid rgb(195, 75, 75);
}
.card-title {
  color: rgb(136, 24, 24);
  text-align: left;
  font-size: 17px;
  height: auto;
}
.card-text {
  color: black;
  text-align: left;
  height: auto;
}
.card-body {
  min-width: 200px;
  width: auto;
  height: auto;
  margin-left: 1px;
}
.btn-details {
  background-color: rgb(136, 24, 24);
  opacity: 0.7;
}
.btn-details:hover {
  opacity: 1;
}
.card-image {
  width: 150px;
  height: 150px;
}
</style>