<template>
 <!-- component used to didplay the related card in a single event/poi -->
 <!-- all the card is clickable --> 
  <nuxt-link class="p-0" :to="`/${category}/${id}`">
    <div class="btn m-0 p-0 responsive text-box">
      <!-- Title of the card -->
      <h5 class="text-center mt-2 p-0">
        <!-- icon to display with the title -->
        <span class="material-icons icon"> {{ icon }} </span>
        {{ text }}
      </h5>
      <!-- image to display in the card -->
      <div class="img-container p-0">
        <img :src="require(`~/assets/${img}`)" class="card-img" alt=""/>
        <!-- text to display above the image -->
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
  background-color: rgb(65, 105, 225, 0.75);
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 2px;
  border-radius: 0px 10px 10px 0px;
}
.img-container {
  position: relative;
}
</style>