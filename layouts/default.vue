<template>
  <div class="page-container">
    <div class="main-page">
      <the-header />
      <nuxt />
      <!-- <div class="push"></div> -->
    </div>
    <the-footer class="footer" />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style scoped>
.page-container {
  position: relative;
  min-height: 100vh;
}

.main-page {
  font-family: 'Lato', sans-serif;
  padding-bottom: 10rem; /* altezza del footer */
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10rem; /* altezza del footer */
}
</style>