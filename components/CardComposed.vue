<template>
  <div class="col">
    <div class="card">
      <img
        class="card-img-top rounded-3"
        :src="require(`~/assets/${img}`)"
        alt="Card image"
        style="width: 100%"
      />
      <div class="card-body">
        <nuxt-link :to="`/${category}/${id}`">
            <div class="btn"> {{ name }} </div>
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