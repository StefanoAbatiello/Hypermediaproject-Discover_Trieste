<template>
  <div class="col my-3">
    <div class="card">
      <div class="container m-0 p-0">
      <img
        class="card-img-top rounded-top p-0 img"
        :src="require(`~/assets/${img}`)"
        alt="Card image"
        style="width: 100%; height:200px"
      />
      </div>
      <div class="card-body">
        <nuxt-link :to="`/${category}/${id}`">
            <div class="btn allign-center text"> <h6>{{ name }}</h6> </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComposed',
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
.card:hover{
  opacity: 1;
  /* transform: scale(1.05); */
  position: relative;
}
.card:hover .card-body .text{
  color: royalblue;
  transform: scale(1.2);
}
.card:hover .container .img{
  transform: scale(1.2);
}
.card .container{
  overflow: hidden;
}
.card{
  opacity: 0.9;
  position: relative;
}
</style>