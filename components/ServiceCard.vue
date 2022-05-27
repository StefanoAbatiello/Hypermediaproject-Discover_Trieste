<template>
  <div class="container-fluid mb-2">
    <div class="card m-1 shadow ps-2 pe-2 pb-2">
      <div class=" d-flex justify-content-between">
        <div class=" card-body">
          <h3 class="card-title text-danger">{{ name }}</h3>
          <p>
            {{ address }}
          </p>
          <img :src="img" class="img rounded card-image p-0 mr-0" />
        </div>
        <div class=" tab col-md-8 pt-5">
          <div class="card-text p-2 pt-3">
            <h5>Useful info:</h5>
            <tab-card-time />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 
  <div class="card-fluid" style="width: auto">
    <div class="card-body">
      <h3 class="card-title text-danger">{{ name }}</h3>
      <h5>Address:</h5>
          <p>
            {{ address }}
          </p>
        <div class="d-flex justify-content-between">
        <img :src="img" class="img rounded card-image p-0 mr-0" />
        <div class="card-text-fluid p-4 pt-0">
          <h5>Useful info:</h5>
         <tab-card-time 
        />
        </div>
      </div>
    </div>
  </div> -->
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
    address: {
      type: String,
      required: true,
    },
    info: {
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
.card-body{
max-width: 400px;
}
.card-text{
  width: 100%;
}
.card-image {
  max-height: 250px;
  height: auto;
  border: 2px solid rgb(195, 75, 75);
}  
.card{
  min-width: 640px;
}
</style>