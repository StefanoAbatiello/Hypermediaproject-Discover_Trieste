<template>
  <div :id="`${season}`" class="col my-3">
    <div class="card">
      <nuxt-link :to="`/${category}/${id}`">
        <div class="container m-0 p-0">
          <img
            class="card-img-top img"
            :src="require(`~/assets/${img}`)"
            alt="Card image"
            style="width: 100%; height: 200px"
          />
        </div>
        <div class="btn card-body">
          <ch class="title">{{ name }}</ch>
          <p class="text">
            <span class="material-icons icon"> {{icons[0] }}</span> {{ date }}
          </p>
          <p class="text">
            <span class="material-icons icon"> {{icons[1]}} </span>
            {{ location }}
          </p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsCard',
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
    date: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    icons:{
      type: Array,
      required:true,
    }
  },
  methods: {
    goToDetails() {
      this.$router.push(`/details/${this.id}`)
    },
  },
}
</script>

<style scoped>
.card:hover {
  opacity: 1;
  /* transform: scale(1.05); */
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
}
.text {
  text-align: left;
  /* font-size: 15px; */
  font-weight: 400;
}
.title {
  text-align: center;
}
.card:hover .container .img {
  transform: scale(1.2);
}
.card .container{
  overflow: hidden;
  border-radius: 20px 20px 0px 0px; 
}
.card .container .img{
  border-radius: 20px 20px 0px 0px; 
}
.card .card-body .icon {
  vertical-align: bottom;
}
.card-body{
  width: 100%;
}
.card{
  opacity: 0.9;
  position: relative;
  border-radius: 20px;
}
.card:hover .card-body {
  transform: scale(1.05);
}
.card:hover .card-body .icon {
  color: royalblue;
  font-size: 28px;
}
</style>