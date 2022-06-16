<template>
  <nav class="navbar navbar-expand-md px-3 nav-fill w-100 header sticky-top">
    <a href="/">
    <img
      :src="require(`~/assets/logo.png`)"
      class="img mr-auto ms-2 logo-img"
      href="/"
    />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="material-icons" style="color:royalblue"> menu </span>
    </button>
    <div id="navbarToggler" class="collapse navbar-collapse links">
      <ul class="navbar-nav mt-2 mt-lg-0">
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
          @click="closeMenu()"
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
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Events',
          path: '/events/',
        },
        {
          name: 'Point of Interest',
          path: '/pois/',
        },
        {
          name: 'Itineraries',
          path: '/itineraries/',
        },
        {
          name: 'Services',
          path: '/services/',
        },
        {
          name: 'About',
          path: '/about',
        },
      ],
    }
  },
  methods: {
    closeMenu() {
      const menuShown = document
        .getElementById('navbarToggler')
        .classList.contains('show')
      if (menuShown) {
        const menuToggle = document.getElementsByClassName('navbar-toggler')[0]
        menuToggle.click()
      }
    },
  },
}
</script>

<style scoped>
.header {
  background: transparent;
  position: absolute;
  top: 0px;
}
.logo-img {
  height: 130px;
  width: 380px;
}
.navbar-brand {
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;  
  font-size: 45px;
  font-weight: 700;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.nav-item {
  font-size: 2.5vw;
  font-weight: 600;
  text-align: right;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.link{
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;  
}  
.logo {
  color: white;
  font-size: 32px;
}
.navbar-nav {
  margin-left: auto;
  /* background-color: rgba(15, 15, 15, .2); */
}
.navbar-toggler {
  border: 1px solid royalblue;
  margin-left: auto;
}

@media only screen and (max-width : 768px) {
       .navbar-collapse .navbar-nav li a { 
         background: rgba(15, 15, 15, .3);
         padding-right: 10px;
         width:100px; 
         margin-left: auto;
        }
        .link{
         text-shadow: none;
         font-size: 20px;  
        }
}
</style>


