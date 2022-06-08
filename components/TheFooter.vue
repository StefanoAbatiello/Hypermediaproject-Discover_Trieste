<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-dark
      px-3
      footer
      justify-content-start
    "
  >
    <img
      src="https://www.pseo.it/content/04_grafica/Loghi/grifone.jpg"
      class="img rounded-circle mr-auto ms-2 logo-img"
      alt="Logo"
      style="width: 60px"
    />
    <a class="navbar-brand ms-2 mr-auto" href="/">VisitTrieste</a>

    <div class="collapse navbar-collapse links">
      <ul class="navbar-nav mt-2 row d-flex justify-content-start ">
      <li
        v-for="(navItem, navItemIndex) of footerList"
        :key="`navItem${navItemIndex}`"
        class="nav-item col-md-auto"
      >
        <nuxt-link :to="navItem.path" class="nav-link">
          {{ navItem.name }}
        </nuxt-link>
      </li>
    </ul></div>
  </nav>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      footerList: [
        {
          name: 'Policy Cookies',
          path: '/policy',
        },
        {
          name: 'Contacts',
          path: '/contacts',
        },
      ],
    }
  },
}
</script>

<style scoped>
.footer {
  background: lightblue;
}
.logo-img {
  height: 60px;
  width: 60px;
  background-color: white;
}
.navbar-brand {
  color: white;
  font-size: 45px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.nav-item {
  color: white;
  font-size: 22px;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
.logo {
  color: white;
  font-size: 32px;
}
.navbar-nav {
  min-width: 400px;
  width: auto;
}
</style>


