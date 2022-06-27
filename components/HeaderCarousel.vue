<template>
  <div>
    <div id="demo" class="carousel slide mb-4 " data-bs-ride="carousel">
      <!-- Indicators/dots -->
      <div class="carousel-indicators" >
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          class="active button"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
          class="button"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
          class="button"
        ></button>
      </div>

      <!-- The slideshow/carousel -->
      <div class="carousel-inner container p-0" :style="`height:${height}rem`">
        <div class="has-bg-img carousel-item active"  >
          <img class="bg-img img-responsive" :style="`height:${height}rem`" :src="require(`~/assets/${images[0]}`)"/>
        </div>
        <div class="has-bg-img carousel-item">
          <img class="bg-img img-responsive" :style="`height:${height}rem`" :src="require(`~/assets/${images[1]}`)"/>
        </div>
        <div class="has-bg-img carousel-item">
          <img class="bg-img img-responsive" :style="`height:${height}rem`" :src="require(`~/assets/${images[2]}`)"/>
        </div>
        <div class="overlay"></div>
      </div>

      <!-- Left and right controls/icons -->
      <!-- <button
        class="carousel-control-prev pl-5"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span class="material-icons icon" style="color: royalblue">
          arrow_back_ios
        </span>
      </button>
      <button
        class="carousel-control-next pr-5"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span class="material-icons icon" style="color: royalblue">
          arrow_forward_ios
        </span>
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCarousel',
  props: {
    images: {
      type: Array.String,
      required: true,
    },
    height:{
      type: Number,
      require:true,
    }
  },
}
</script>


<style scoped>
/* Carousel styling  */
#introCarousel,
.carousel-inner,
.carousel-item,
.carousel-item.active {
  min-width: 100%;
  height:100%; 
} 
.carousel-indicators {
  opacity: 1;
}
.icon{
  font-size: 60px;
}
.carousel-item {
  opacity: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.overlay{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(0,0,0,0.15);
}

/* Height for devices larger than 576px */
@media (min-width: 992px) {
  #introCarousel {
    margin-top: -58.59px;
  }
  #introCarousel,
  .carousel-inner,
  .carousel-item,
  .carousel-item.active {
    height: 70vh;
  }
}
.bg-img{
  width: 100%;
  height: 100%;
}

.navbar .nav-link {
  color: #fff !important;
}
</style>
