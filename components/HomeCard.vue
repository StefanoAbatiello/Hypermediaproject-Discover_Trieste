<template>
  <div class="col my-3">
    <div class="card">
      <nuxt-link :to="`${path}`">
        <div class="container m-0 p-0">
          <img
            class="card-img-top p-0 img"
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
  border-radius: 0px 10px 10px 0px;
}
.card:hover {
  opacity: 1;
  position: relative;
}
.card {
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;
  opacity: 0.85;
  position: relative;
  border-radius: 30px;
  max-width: 400px;
}
.img {
  width: 100%;
  height: 400px;
  border-radius: 20px 20px 0px 0px;
}
</style>