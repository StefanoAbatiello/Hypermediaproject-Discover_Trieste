<template>
  <nav
    class="navbar navbar-expand-lg navbar-expand-sm w-100 px-3 footer justify-content-start">
    <a href="/">
    <img
      :src="require(`~/assets/logo.png`)"
      class="img mr-auto responsive ms-2 logo-img"
      alt="Logo"
      href="/"
    />
    </a>
    <div class=" ms-4 navbar links">
      <ul class="navbar-nav mt-2">
        <li
          v-for="(navItem, navItemIndex) of footerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item col-md-auto"
        >
          <nuxt-link :to="navItem.path" class="nav-link link">
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
          name: 'About',
          path: '/about/',
        },
        {
          name: 'Contacts',
          path: '/contacts/',
        },
        {
          name: 'Policy & Privacy',
          path: '/policy/',
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
  width: 100%;
  height: 3rem;
}
/* .navbar-brand {
  color: white;
  font-size: 45px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
} */
.nav-item {
  font-size: 2vw;
  font-weight: 600;
  text-align: right;
}
.navbar-nav {
  min-width: 400px;
  width: auto;
}
.link{
  text-align: center; 
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;  
}
</style>


