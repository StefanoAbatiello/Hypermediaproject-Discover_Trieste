<template>
    <div class="has-bg-img card">
      <nuxt-link :to="`${path}`"
        ><img
            class="bg-img responsive img"
            :src="require(`~/assets/${img}`)"
            style="width: 100%; height: 400px"
          />
           <div class="text-block mt-4"> 
              {{ title }}
            </div> 
      </nuxt-link>
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
  width: 70%;
  height: 50px;
  left: 0px;
  background-color: rgb(65, 105, 225,0.7);
  color: white;
  margin-left: 0px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0px;
  font-size: 30px;
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
.card:hover .container .img {
  transform: scale(1.2);
}
.card .container {
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;
}
.card .card-body .icon {
  vertical-align: bottom;
}
.card {
  opacity: 0.85;
  position: relative;
  border-radius: 20px;
  max-width: 300px;
}
.card:hover .card-body {
  transform: scale(1.05);
}
.card:hover .card-body .icon {
  color: royalblue;
  font-size: 28px;
}
</style>