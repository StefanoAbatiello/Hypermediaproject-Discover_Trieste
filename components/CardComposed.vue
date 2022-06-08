<template>
  <div class="col my-3">
    <div class="card">
      <img
        class="card-img-top rounded-top"
        :src="require(`~/assets/${img}`)"
        alt="Card image"
        style="width: 100%; height:200px"
      />
      <div class="card-body">
        <nuxt-link :to="`/${category}/${id}`">
            <div class="btn allign-center "> <h6>{{ name }}</h6> </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComposed',
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