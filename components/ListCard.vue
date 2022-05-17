<template>
  <div class="category" style="width: 23rem">
    <h4 class="category-title">{{ name }}</h4>
    <div class="category-body">
      <div class="category-img-top category-image" :style="{ 'background-image': 'url(' + img + ')' }"> </div>
      <nuxt-link :to="`/details/${category}/${id}`">
        <div class="btn btn-details mt-2 text-white"> See details...</div>
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
.category {
  border: 4px solid rgb(136, 24, 24);
}
.btn-details {
  background-color: rgb(220, 110, 110);
  border: 2px solid rgb(136, 24, 24);
  display: block;
  margin: 0 auto;
  width: 145px;
}
.category-title {
  font-style: italic;
  text-align: center;
  color: rgb(136, 24, 24);
}
.category-image {
  background-position: center;
  background-size: cover;
  height: 200px;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>

