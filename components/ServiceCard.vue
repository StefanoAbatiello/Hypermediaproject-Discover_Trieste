<template>
  <div class="container-fluid m-2">
    <div class="card shadow pb-0 me-4 ms-2">
      <h2 class="card-title pt-4 pb-0 ps-3 pe-0">{{ name }}</h2>
      <div class="row-md d-flex justify-content-start p-0 m-0">
        <div class="col-md-7 ps-0 ms-2 me-0 pt-0 tab">
          <div class="card-text p-0 ps-2 pb-3 pt-3">
            <tab-card-time
              :id="id"
              :description="description"
              :time="time"
              :address="address"
            />
          </div>
        </div>
        <div class="col-md-5 ms-0 card-body m-0 mt-0 mb-0 me-4">
          <img
            :src="require(`~/assets/${img}`)"
            class="card-image img-responsive rounded pb-0 mb-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabCardTime from '~/components/TabCardTime.vue'
export default {
  name: 'ServiceCardComponent',
  components: {
    TabCardTime,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    time: {
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
.card {
  min-width: 500px; 
  min-height: 300px;
}
.card-title {
  font-size: 40px;
  text-align: left;
  margin-left: 5;
  margin-right: 5;
  color: lightblue;
}
.card-text {
  width: 100%;
  margin: auto;
  margin-right: 5;
  min-width: 400px;
}
/* .card-body {
  max-width: 500px;
} */
.card-image {
  /* min-height: 50px; */
  width: 100%;
  max-width: 100%;
  /* min-width: 270px; */
  border: 2px solid lightblue;
}
</style>