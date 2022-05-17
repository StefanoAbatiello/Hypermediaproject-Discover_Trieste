<template>
  <div class="category" style="width: 23rem">
    <h4 class="category-title">{{ name }}</h4>
    <div class="category-body">
      <div class="category-img-top category-image" :style="{ 'background-image': 'url(' + img + ')' }"> </div>
      <nuxt-link :to="`/details/${category}/${id}`">
        <div class="btn btn-primary btn-blu"> {{ name }}</div>
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
.btn-blu {
  background-color: lightblue;
  border: 2px solid blue;
  align-content: center;
}
.category-title {
  font-style: italic;
  text-align: center;
  color: darkblue;
  text-shadow: 8px;
}
.category-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
}
</style>

