<template>
  <div class="container mt-5">
    <div class="jumbotron">
      <h1 class="title">{{ title }}</h1>
      <img :src="require(`~/assets/${image[0]}`)" class="img-fluid mx-auto d-block images" />
      <hr class="my-4" />
      <p class="lead">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomPage',
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.title {
  text-align: center;
  text-emphasis-color: green;
}
p {
  text-align: left;
}
.images{
  width: 1000px;
  height: 490px;
}
</style>
