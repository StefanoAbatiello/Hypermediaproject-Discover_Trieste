<template>
  <div :id="`${season}`" class="col my-3">
    <div class="card" style="width:300px">
      <div class="container m-0 p-0">
      <img
        class="card-img-top rounded-top img"
        :src="require(`~/assets/${img}`)"
        alt="Card image"
        style="width: 100%; height: 200px"
      />
      </div>
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
.card .card-body .icon{
  vertical-align: bottom;
}
.card:hover{
  opacity: 1;
  /* transform: scale(1.05); */
  position: relative;
}
.card:hover .card-body {
  transform: scale(1.05);
}
.card:hover .card-body .icon{
  color: royalblue;
  font-size: 28px;
}
.card:hover .container .img{
  transform: scale(1.2);
}
.card .container{
  overflow: hidden;
}
</style>