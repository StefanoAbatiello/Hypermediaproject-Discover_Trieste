<template>
  <div class="container-fluid m-0">
    <div class="card m-0" style="max-width: 100%">
      <div class="row no-gutters">
        <div class="col-md-6 p-0">
          <div class="container mt-4 p-0">
            <img :src="require(`~/assets/${img}`)" class="card-img mt-4 p-0 " />
            <div class="text-block mt-4"> 
              {{ name }}
            </div> 
          </div>
        </div>
        <div class="col-md-6 ml-0 mb-2 p-0">
          <div class="card-body p-0 pt-5">
            <div class="card-text mt-2">
              <tab-card-time
                :id="id"
                :description="description"
                :time="time"
                :address="address"
                :map="map"
              />
            </div>
          </div>
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
      type: Array,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    map:{
      type:String,
      required:true,
    }
  },
}
</script>

<style scoped>
.text-block {
  position: absolute;
  top: 20px;
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
.card {
  /* min-width: 300px;*/
  min-height: 400px; 
  border: transparent;
  border-bottom: 1px solid royalblue;
  border-radius: 0px;
}

.container{
  position:relative;
}
.card-text {
  width: 100%;
  margin: auto;
  margin-right: 5;
  min-width: 400px;
  max-height: 400px;

}
/* .card-body {
  max-width: 500px;
} */
.card-img {
  /* min-height: 50px; */
  width: 100%;
  max-height: 300px;
  /* min-width: 100px; */
  border-radius: 20px;
}
</style>