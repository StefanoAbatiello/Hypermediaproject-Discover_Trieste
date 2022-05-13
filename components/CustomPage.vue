<template>
  <div class="container mt-5">
    <div class="jumbotron">
      <h1 class="display-title">{{ title }}</h1>
      <img :src="image" alt="" />
      <hr class="my-4" />
      <p class="lead">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 300px;
  display: block;
  margin: 0 auto;
}
.display-title {
  text-align: center;
  text-emphasis-color: green;
}
.page {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
p {
  text-align: left;
}
</style>

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
