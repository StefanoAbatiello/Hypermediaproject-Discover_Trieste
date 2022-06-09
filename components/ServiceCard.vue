<template>
  <div class="container-fluid m-0">
    <div class="card m-3" style="max-width: 100%;">
  <div class="row no-gutters">
     <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <div class="card-text mt-3">
       <tab-card-time
              :id="id"
              :description="description"
              :time="time"
              :address="address"
            />
        </div>
      </div>
    </div>
    <div class="col-md-4 ml-3 mt-5">
      <img :src="require(`~/assets/${img}`)" class="card-img">
    </div>
   
  </div>
</div>
    <!-- <div class="card pb-0 me-0 ms-0">
      <h2 class="card-title pt-4 pb-0 ps-3 pe-0">{{ name }}</h2>
      <div class="row-sm d-flex justify-content-start p-0 m-0">
        <div class="col-sm-8 ps-0 ms-2 me-0 pt-0 tab">
          <div class="card-text p-0 ps-2 pb-3 pt-3">
            <tab-card-time
              :id="id"
              :description="description"
              :time="time"
              :address="address"
            />
          </div>
        </div>
        <div class="col-sm-4 ms-3 card-body m-0 mt-0 mb-0 me-4">
          <img
            :src="require(`~/assets/${img}`)"
            class="card-image img-responsive pb-0 mb-4"
          />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
// import TabCardTime from '~/components/TabCardTime.vue'
export default {
  name: 'ServiceCardComponent',
  // components: {
  //   TabCardTime,
  // },
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
  min-width: 300px; 
  min-height: 300px;
  border: transparent;
}
.card-title {
  font-size: 40px;
  text-align: center;
  margin-left: 5;
  margin-right: 5;
  color: black;
}
.card:hover .card-title{
  color: royalblue;
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
.card-img {
  /* min-height: 50px; */
  width: 100%;
  max-height: 250px;
  /* min-width: 100px; */
  border-radius: 20px;
}
.card-img:hover{
  transform: scale(1.05);
}
</style>