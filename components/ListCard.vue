<template>
  <div class="rounded shadow p-3 category" style="width: 23rem" >
     <h4 class="category-title text-center">{{ name }}</h4>
    <div class="category-body">
      <div class="category-img-top category-image rounded" :style="{ 'background-image': 'url(' + img + ')' }"> 
      </div>
      <nuxt-link :to="`/details/${category}/${id}`">
        <div class="btn btn-details mt-2 mb-1 text-white"> See details...</div>
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
.category:hover {
  border: 3px solid rgb(195, 75, 75);
}
.btn-details {
  background: rgb(195, 75, 75);
  display: block;
  margin: 0 auto;
  width: 145px;
}
.category-title {
  font-style: italic;
  text-align: left;
  color: rgb(136, 24, 24);
  text-shadow: 45ch;
}
.category-image {
  background-position: center;
  background-size: cover;
  height: 200px;
 
}
</style>

