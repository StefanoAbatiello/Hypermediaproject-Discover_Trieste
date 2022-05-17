
<template>
  <div class="serviceCard" style="width: auto">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
        {{ address }}
      </p>
      <p class="card-text">
        {{ info }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid darkblue;
}
.btn-blu {
  background-color: lightblue;
  border: 2px solid blue;
}
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
}
</style>

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
   
  },
}
</script>
