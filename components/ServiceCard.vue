<template>
  <div class="container-fluid m-2">
    <div class="card shadow pb-0 me-4 ms-2">
      <div class="row-md d-flex justify-content-start p-0">
        <div class="col-md-7 ps-0 pt-0 tab">
          <h2 class="card-title text-danger p-3 pb-0 ps-5">{{ name }}</h2>
          <div class="card-text flex p-1 ms-auto pb-3">
            <tab-card-time
              :id="id"
              :description="description"
              :time="time"
              :address="address"
            />
          </div>
        </div>
        <div class="col-md-4 ms-2 card-body ">
          <img :src="require(`~/assets/${img}`)" class="card-image img-responsive rounded p-0 mt-3 m-0" />
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
  max-width: 400px;
}
.card-text {
  width: 100%;
  margin: auto;
}
/* .card-body {
  max-width: 500px;
} */
.card-image {
  /* min-height: 50px; */
  /* max-width: 450px;  */
  max-width: 100%;
  border: 2px solid rgb(195, 75, 75);
  justify-content: space-between;
}
</style>