<template>
  <div class="container-fluid m-0">
    <div class="card m-0 pb-3 px-3" style="width: 100%">
      <div class="row gx-5">
        <div class="col-md-6 p-0">
          <div class="container mt-4 p-0">
            <img :src="require(`~/assets/${img}`)" class="card-img mt-4 p-0" alt=""/>
            <div class="text-block mt-4"> 
              {{ name }}
            </div> 
          </div>
        </div>
        <div class="col-md-6 mb-2 p-0">
          <div class="card-body p-0 pt-5">
            <div class="card-text mt-0 ps-2">
              <tab-card-time
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
  max-height: 350px;
  /* min-width: 100px; */
  border-radius: 20px;
}
@media (max-width: 762px){
    .text-block{
        font-size: 4vw;
    }
}   
</style>