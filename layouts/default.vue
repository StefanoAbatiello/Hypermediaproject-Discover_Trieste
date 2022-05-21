<template>
  <div class="main-page">
    <the-header />
    <nuxt />
    <div class="push"></div>
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
html,
body {
  height: 100%;
}

.main-page {
  min-height: 100%;
  height: auto;
  margin: 0 auto -80px;
}

.footer,
.push {
  height: 80px;
}
</style>