<template>
  <div class="page-container">
    <div class="main-page">
      <the-header class="header" />
      <nuxt />
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
.header {
  height: 6rem;
}
.main-page {
  font-family: 'Lato', sans-serif;
  padding-bottom: 13rem;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 13rem;
}
</style>