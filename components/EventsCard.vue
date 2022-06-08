<template>
  <div :id="`${season}`" class="col my-3">
    <div class="card" style="width:300px">
      <img
        class="card-img-top rounded-top"
        :src="require(`~/assets/${img}`)"
        alt="Card image"
        style="width: 100%; height: 200px"
      />
      <div class="card-body">
        <nuxt-link :to="`/${category}/${id}`">
          <h4 class="card-title">{{ name }}</h4>
        </nuxt-link>
        <div class="card-text"></div>
        <p>
          <span class="material-icons icon"> schedule </span> {{ date }}
        </p>
        <p>
          <span class="material-icons icon"> navigation </span> {{ location }}
        </p>
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
      type: String,
      required: true,
    },
    season: {
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

<style scoped>
.card-title {
  color: royalblue;
  text-align: left;
  font-size: 17px;
  height: auto;
}
</style>