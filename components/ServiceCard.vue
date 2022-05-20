<template>
  <div class="serviceCard" style="width: auto">
    <div class="card-body">
      <h5 class="card-title text-danger">{{ name }}</h5>
      <div class="d-flex justify-content-between">
        <img :src="img" class="img rounded card-image p-0 mr-0" />
        <div class="card-text p-3 pt-0">
          <h5>Address:</h5>
          <p>
            {{ address }}
          </p>
          <h5>Useful info and timetable:</h5>
          <p class="card-text">
            {{ info }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCardComponent',
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
.card {
  border: 2px solid rgb(195, 75, 75);
}
.btn-blu {
  background-color: lightcoral;
  border: 2px solid rgb(195, 75, 75);
}
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
}
</style>