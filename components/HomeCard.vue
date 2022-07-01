<template>
  <div class="col my-3">
    <div class="card">
      <nuxt-link :to="`${path}`">
        <div class="container img-container m-0 p-0">
          <img
            class="p-0 img"
            :src="require(`~/assets/${img}`)"
            alt="Card image"
          />
          <div class="text-block py-3">
            {{ title }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.text-block {
  position: absolute;
  bottom: 25px;
  width: 100%;
  height: 75px;
  left: 0px;
  background-color: rgb(65, 105, 225, 0.75);
  color: white;
  margin-left: 0px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 30px;
  text-align: center;
}
.card:hover {
  opacity: 1;
}
.card {
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;
  opacity: 0.85;
  position: relative;
  border-radius: 30px;
  max-width: 400px;
}
.img-container{
  width: 100%;
  height: 400px;
}
.img-container .img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>