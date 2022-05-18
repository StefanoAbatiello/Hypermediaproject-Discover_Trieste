<template>
  <div class="rounded shadow  category-image" style="width: 23rem" :style="{ 'background-image': 'url(' + img + ')' }" >
     
    <div class="category-body">
      <h4 class="category-title text-center">{{ name }}</h4>
      <nuxt-link :to="`/details/${category}/${id}`">
        <div class="btn text-white btn-details"> See details...</div>
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
}
.btn-details {
  background: rgba(225, 216, 216, 0.734);
  text-shadow: 2px 2px 4px black;
  position: relative;
  left: 20px;
  top: 160px;
}
.category-title {
  font-style: italic;
  text-align: left;
  color: white;
  text-shadow: 3px 3px 4px black;
}
.category-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
}
</style>

