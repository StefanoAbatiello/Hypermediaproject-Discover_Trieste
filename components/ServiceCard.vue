<template>
  <!-- component used to display one service in a dedicated typeOfService page -->
  <div class="container-fluid m-0">
    <div class="card m-0 pb-3 px-3">
      <div class="row gx-5">
        <div class="col-md-6 p-0">
          <div class="container mt-4 p-0">
            <!-- image to display -->
            <img :src="require(`~/assets/${img}`)" class="card-img mt-4 p-0" alt=""/>
            <!-- text to display above the image -->
            <div class="text-block mt-4"> 
              {{ name }}
            </div> 
          </div>
        </div>
        <!-- here is called the tab-card-time component to display the info of a service -->
        <div class="col-md-6 mb-2 p-0">
          <div class="card-body p-0 pt-5">
            <div class="card-text mt-0 ps-2">
              <tab-card-services
                :id="id"
                :name="name"
                :service-type-id="serviceTypeId"
                :description="description"
                :time-info="timeInfo"
                :time="time"
                :address="address"
                :map="map"
                :info="info"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabCardServices from '~/components/TabCardServices.vue'
export default {
  name: 'ServiceCardComponent',
  components: {
     TabCardServices,
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
    serviceTypeId:{
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
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
    },
    info:{
      type:Array,
      required:true,
    },
  },
  data(){
  const day = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
  const timeInfo = []
    for (let index = 0; index < 7; index++) {
    timeInfo.push({ day: day[index], hour: this.time[index] })
    }
    return {timeInfo}
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
  font-size: 2vw;
  border-radius: 0px 10px 10px 0px;
}
.card {
  width: 100%;  
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
.card-img {
  width: 100%;
  max-height: 350px;
  border-radius: 20px;
  overflow: hidden;
}
@media (max-width: 762px){
    .text-block{
        font-size: 4vw;
    }
}   
</style>