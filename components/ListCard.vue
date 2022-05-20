<template>
  <div class="rounded shadow category-image" style="width: 23rem" :style="{ 'background-image': 'url(' + img + ')' }" >
     
    <div class="category-body">
      <!-- <h4 class="category-title text-center">{{ name }}</h4> -->
      <nuxt-link :to="`/details/${category}/${id}`">
        <div class="btn text-white btn-details"> {{ name }} </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListCardComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/details/${this.id}`)
    },
  },
}
</script>

<style scoped>
.category-image:hover {
  border: 3px solid rgb(195, 75, 75);
  opacity: 1;
}
.btn-details {
  background: rgb(195, 75, 75);
  text-shadow: 2px 2px 4px black;
  opacity:1;
  position: absolute;
  left: 50%;
  top: 85%;
  transform: translate(-50%,-50%);
}
/* .category-title {
  font-style: italic;
  text-align: left;
  color: white;
  text-shadow: 3px 3px 4px black;
} */
.category-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  opacity: 0.6;
  position: relative;
}
</style>

