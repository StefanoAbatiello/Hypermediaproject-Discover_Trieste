<template>
  <div class="col my-3">
    <div class="has-bg-img card">
      <nuxt-link :to="`${path}`"
        ><img
            class="bg-img p-0 img"
            :src="require(`~/assets/${img}`)"
            alt="Card image"
            style="width: 100%; height: 400px"
          />
          <p>{{ title }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    path: {
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
.card:hover {
  opacity: 1;
  position: relative;
}
.card:hover .card-body .icon {
  color: royalblue;
  text-align: left;
  transform: scale(1.1);
  height: auto;
  font-weight: 500;
}
.card:hover .card-body .title {
  color: royalblue;
  text-align: left;
  transform: scale(1.1);
  height: auto;
  font-weight: 500;
}
.title {
  text-align: left;
  font-size: 18px;
}
.card:hover .container .img {
  transform: scale(1.2);
}
.card .container {
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;
}
.card .card-body .icon {
  vertical-align: bottom;
}
.card {
  opacity: 0.9;
  position: relative;
  border-radius: 20px;
}
.card:hover .card-body {
  transform: scale(1.05);
}
.card:hover .card-body .icon {
  color: royalblue;
  font-size: 28px;
}
</style>