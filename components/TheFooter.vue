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
      :src="require(`~/assets/logo.png`)"
      class="img mr-auto ms-2 logo-img"
      alt="Logo"
      href="/"
    />
    <div class="collapse navbar-collapse links">
      <ul class="navbar-nav mt-2 row d-flex justify-content-start">
        <li
          v-for="(navItem, navItemIndex) of footerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item col-md-auto"
        >
          <nuxt-link :to="navItem.path" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
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
  background: royalblue;
  position: absolute;
  bottom: 0px;
}
.logo-img {
  height: 95px;
  width: 300px;
}
.navbar-brand {
  color: white;
  font-size: 45px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.nav-item {
  color: white;
  font-size: 22px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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


