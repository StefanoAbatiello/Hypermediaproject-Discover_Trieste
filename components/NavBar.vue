<template>
  <nav class="navbar navbar-expand-lg navbar-dark px-3 header sticky-top">
    <img
      src="https://www.pseo.it/content/04_grafica/Loghi/grifone.jpg"
      class="img rounded-circle mr-auto ms-2 logo-img"
      alt="Logo"
      style="width: 60px"
    />
    <a class="navbar-brand ms-2 mr-auto" href="/">VisitPerugia</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarToggler" class="collapse navbar-collapse links">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
          @click="closeMenu()"
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
        {
          name: 'Example',
          path: '/example',
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
}
.logo-img {
  height: 60px;
  width: 60px;
  background-color: white;
}
.navbar-brand {
  color: white;
  font-size: 45px;
  font-family: 'My Soul', cursive;
}
.nav-item {
  color: white;
  font-size: 22px;
  font-family: 'Poppins', sans-serif;
}
.logo {
  color: white;
  font-size: 32px;
}
.navbar-nav {
  margin-left: auto;
}
</style>


