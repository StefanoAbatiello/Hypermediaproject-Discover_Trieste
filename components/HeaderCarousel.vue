<template>
  <div>
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
      <!-- Indicators/dots -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>

      <!-- The slideshow/carousel -->
      <div class="carousel-inner mt-2">
        <div class="carousel-item active">
          <img class="mx-auto d-block" style="height: 22rem; widht: 25rem" />
        </div>
        <div class="carousel-item">
          <img class="mx-auto d-block" style="height: 23rem; widht: 22rem" />
        </div>
        <div class="carousel-item">
          <img class="mx-auto d-block" style="height: 23rem; widht: 22rem" />
        </div>
      </div>

      <!-- Left and right controls/icons -->
      <button
        class="carousel-control-prev pl-5"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span class="material-icons" style="color: rgb(195, 75, 75)">
          arrow_back_ios
        </span>
      </button>
      <button
        class="carousel-control-next pr-5"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span class="material-icons" style="color: rgb(195, 75, 75)">
          arrow_forward_ios
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCarousel',
  // Note: This happens on backend (server) side
}
</script>


<style scoped>
/* Carousel styling */
#introCarousel,
.carousel-inner,
.carousel-item,
.carousel-item.active {
  height: 100vh;
}

.carousel-item{
  opacity:0.8;
}

.carousel-item:nth-child(1) {
  background-image: url('assets\homeImg\panorama1.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.carousel-item:nth-child(2) {
  background-image: url('assets\homeImg\panorama2.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.carousel-item:nth-child(3) {
  background-image: url('assets\homeImg\streetView.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
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
    height: 50vh;
  }
}

.navbar .nav-link {
  color: #fff !important;
}
</style>
