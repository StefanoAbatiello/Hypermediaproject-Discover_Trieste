<template>
  <nuxt-link class="p-0" :to="`/${category}/${id}`">
    <div class="btn m-0 p-0 responsive text-box">
      <p class="text p-0">
        <span class="material-icons icon"> {{ icon }} </span>
        {{ text }}
      </p>
      <div class="img-container p-0">
        <img :src="require(`~/assets/${img}`)" class="card-img" />
        <div class="text-block">
          <h5>{{ name }}</h5>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'RelatedCard',

  props: {
    id: {
      type: Number,
      required: true,
    },
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

    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.text-box:hover {
  background-color: rgb(65, 105, 225, 0.1);
  border: 1px solid royalblue;
}
.text-box {
  border-radius: 20px;
  border: 1px solid lightblue;
  overflow: hidden;
  min-width: 200px;
  max-width: 400px;
}
.text {
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
  
}
.icon {
  color: royalblue;
  font-size: 30px;
  vertical-align: middle;
}
.card-img {
  width: 100%;
  height: auto;
  max-width: 400px;
  min-width: 200px;
}
.text-block {
  position: absolute;
  top: 20px;
  width: 70%;
  /* left: 12px; */
  background-color: rgb(65, 105, 225, 0.3);
  color: white;
  /* margin-left: 4px; */
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  border-radius: 0px 10px 10px 0px;
}
.img-container {
  position: relative;
}
</style>