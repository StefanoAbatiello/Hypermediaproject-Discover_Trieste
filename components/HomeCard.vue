<template>
 <div class="col my-3">
    <div class="card">
      <nuxt-link :to="`${path}`"
        ><div class="container m-0 p-0">
          <img
            class="card-img-top p-0 img"
            :src="require(`~/assets/${img}`)"
            alt="Card image"
            style="width: 100%; height: 500px"
          />
           <div class="text-block mt-4">
        {{ title }}
      </div>
        </div>
      </nuxt-link>
    </div>
  </div>
  <!-- <div class="has-bg-img mb-5 mx-2 p-0 card">
    <nuxt-link :to="`${path}`">
      <img
        class="bg-img responsive img"
        :src="require(`~/assets/${img}`)"
      />
      <div class="text-block mt-4">
        {{ title }}
      </div>
    </nuxt-link>
  </div> -->
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
  height: 120px;
  left: 0px;
  background-color: rgb(65, 105, 225, 0.7);
  color: white;
  margin-left: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  font-size: 40px;
  text-align: center;
  border-radius: 0px 10px 10px 0px;
}
.card:hover {
  opacity: 1;
  position: relative;
}
.card:hover .card-body .icon {
  color: royalblue;
  text-align: left;
  transform: scale(1.1);
  height: auto;
  font-weight: 500;
}
.card:hover .card-body .title {
  color: royalblue;
  text-align: left;
  transform: scale(1.1);
  height: auto;
  font-weight: 500;
}
.title {
  text-align: left;
  font-size: 18px;
}
.card {
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;
  /* width: 100%;
  height: auto;
  max-height: 400px; */
}
.card .card-body .icon {
  vertical-align: bottom;
}
.card {
  opacity: 0.85;
  position: relative;
  border-radius: 30px;
  max-width: 400px; 
}
.card:hover .card-body {
  transform: scale(1.05);
}
.card:hover .card-body .icon {
  color: royalblue;
  font-size: 28px;
}
.img {
  width: 100%;
  height: auto;
  border-radius: 20px 20px 0px 0px;
}
</style>