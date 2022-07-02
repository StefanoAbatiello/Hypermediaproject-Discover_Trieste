<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="3500">
        <img
          :src="require(`~/assets/${images[0]}`)"
          class="d-block w-100 img"
          alt="first-img"
        />
      </div>
      <div class="carousel-item" data-bs-interval="3500">
        <img
          :src="require(`~/assets/${images[1]}`)"
          class="d-block w-100 img"
          alt="second-img"
        />
      </div>
      <div class="carousel-item" data-bs-interval="3500">
        <img
          :src="require(`~/assets/${images[2]}`)"
          class="d-block w-100 img"
          alt="third-img"
        />
      </div>
      <div class="overlay"></div>
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
  },
}
</script>


<style scoped>
.carousel {
  height: 30rem;
}
.carousel-inner {
  height: 30rem;
}
img {
  height: 30rem;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.3);
}
@media (max-width: 992px){
  .carousel {
  height: 20rem;
}
.carousel-inner {
  height: 20rem;
}
img {
  height: 20rem;
}
}
</style>
