<template>
  <!-- component used to display the single card in index page of POIs, events, Typeof Services and Itineraries -->
  <!-- season is an attribute used only by events to determine the season of an event -->
  <div :id="`${season}`" class="col my-3">
    <div class="card">
      <!-- Here there is the link to the related single page -->
      <nuxt-link :to="`/${category}/${id}`">
        <div class="container m-0 p-0">
          <!-- Image to show in the card -->
          <img
            class="card-img-top img"
            :src="require(`~/assets/${img}`)"
            alt=""
            style="width: 100%; height: 200px"
          />
        </div>
        <!-- text to display in the preview -->
        <div class="btn card-body">
          <!-- title of the card -->
          <h3 class="title text-center">{{ name }}</h3>
          <!-- only for itineraries or events there are icons to show additional info -->
          <div v-if="category==='itineraries' || category==='events'">
          <h5 class="text-start" >
            <span class="material-icons icon"> {{icons[0] }}</span> {{ texts[0] }}
          </h5>
          <h4 class="text-start">
            <span class="material-icons icon" > 
            {{icons[1]}} </span>
            {{ texts[1] }}
          </h4>
          </div>
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
    id: {
      type: Number,
      required: true,
    },
    season: {
      type: String,
      required: false,
      default: '',
    },
    texts:{
      type: Array,
      required:false,
      default:() => [] ,
    },
    icons:{
      type: Array,
      required:false,
      default:() => [] ,
    }
  },
}
</script>

<style scoped>
.card:hover {
  opacity: 1;
}
.card:hover .card-body .icon {
  color: royalblue;
  transform: scale(1.1);
  font-weight: 500;
}
.card:hover .card-body .title {
  color: royalblue;
  transform: scale(1.05);
}
.card:hover .container .img {
  transform: scale(1.2);
}
.card .container{
  overflow: hidden;
  border-radius: 20px 20px 0px 0px; 
}
.card .card-body .icon {
  vertical-align: middle;
}
.card-body{
  width: 100%;
}
.card{
  opacity: 0.9;
  position: relative;
  border-radius: 20px;
  max-width: 400px;
}
.card:hover .card-body {
  transform: scale(1.05);
}
.card:hover .card-body .icon {
  color: royalblue;
  font-size: 28px;
}
</style>