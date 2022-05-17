<template>
  <div class="category rounded" style="width: 18rem">
    <div
      class="category-img-top category-image mt-1 mb-1 rounded"
      :style="{ 'background-image': 'url(' + img + ')' }"
    ></div>
    <div class="category-body text-center">
      <h5 class="category-title ">{{ name }}</h5>
      <nuxt-link :to="`/details/${category}/${this.id}`">
        <div class="btn btn-primary btn-orange mb-1 ">See Details</div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.category {
  border: 4px solid lightgray;
}
.category:hover {
  border: 2px solid orange;
}
.btn-blue {
  background-color: orange;
  border: 2px solid orange;
}
.category-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
}
</style>

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
