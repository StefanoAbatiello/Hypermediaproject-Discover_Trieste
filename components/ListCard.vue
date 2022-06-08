<template>
  <div class="has-bg-img rounded shadow category px-0" style="width: 23rem">
    <img class="bg-img img-responsive " :src="require(`~/assets/${img}`)">
    <div class="category-body">
      <nuxt-link :to="`/${category}/${id}`">
        <div class="btn text-white btn-details"> {{ name }} </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListCardComponent',
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
.category:hover {
  border: 3px solid lightblue;
  opacity: 1;
}
.btn-details {
  background: lightblue;
  text-shadow: 2px 2px 4px black;
  opacity:1;
  position: absolute;
  left: 50%;
  top: 85%;
  transform: translate(-50%,-50%);
}
.category {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  opacity: 0.6;
  position: relative;
}
.bg-img{
  width: 100%;
  height: 100%;
}
</style>

