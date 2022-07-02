<template>
  <nav
    class="navbar navbar-expand-md px-3 pt-0 nav-fill w-100 header sticky-top"
  >
    <a href="/">
      <img
        :src="require(`~/assets/page-logo.png`)"
        class="img mr-auto ms-2 mt-4 logo-img"
        href="/"
        alt="logo to home"
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
      <span class="material-icons icon"> menu </span>
    </button>
    <div
      id="navbarToggler"
      :class="{ active: isActive }"
      class="button collapse navbar-collapse links"
      @click="isActive = !isActive"
    >
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
      isActive: false,
      headerList: [
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
          path: '/about/',
        },
        {
          name: 'Contacs Us',
          path: '/contacts/',
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
  height: 100px;
  width: 300px;
}
.nav-item {
  text-align: right;
}
.link {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
  color: whitesmoke;
  font-size: 1.6rem;
  font-weight: 700;
}
.navbar-nav {
  margin-left: auto;
}
.navbar-toggler {
  margin-left: auto;
}

.navbar-toggler:focus,
.navbar-toggler.active,
.icon:focus {
  outline: none !important;
  box-shadow: none;
}
@media only screen and (max-width: 768px) {
  .navbar-collapse .navbar-nav li a {
    background: rgba(15, 15, 15, 0.3);
    padding-right: 10px;
    width: 100px;
    margin-left: auto;
  }
  .link {
    text-shadow: none;
    font-size: 20px;
  }
}
@media only screen and (max-width: 992px) and (min-width: 767px) {
  .logo-img {
    height: 100px;
    width: 30vw;
  }
  .nav-item {
    text-align: left;
  }
  .link {
    font-size: 1.15rem;
  }
}
</style>


