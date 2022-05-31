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
  padding-bottom: 5rem; /* altezza del footer */
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem; /* altezza del footer */
}
/* html,
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.main-page {
  flex: 1;
} */

/* .main-page {
  min-height: 100%;
  height: auto !important;
  height: 100%;
  margin: 0 auto -80px;
} */

/* .footer,
.push {
  height: 80px;
} */
</style>