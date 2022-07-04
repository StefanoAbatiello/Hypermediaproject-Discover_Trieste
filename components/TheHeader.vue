<template>
<!-- Component used to create the header of the page -->
  <nav
    class="navbar navbar-expand-md px-3 pt-0 nav-fill w-100 header sticky-top"
  >
  <!-- Logo of the page that is all a link to the homePage -->
    <a href="/">
      <img
        :src="require(`~/assets/page-logo.webp`)"
        class="img mr-auto ms-2 mt-4 logo-img"
        alt="logo to home"
      />
    </a>
    <!-- Menu icon for small screens -->
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
    <!-- List of all the link to the section of the page -->
      <ul class="navbar-nav mt-2 mt-lg-0">
        <!-- single element of the list -->
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
          name: 'Points of Interest',
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
          name: 'Contact Us',
          path: '/contacts/',
        },
      ],
    }
  },
  methods: {
    // If the icon menù is shown, when a link is clicked the menu-window is closed
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
  top: 20px;
}
.logo-img {
  height: auto;
  width: 20vw;
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

.navbar-toggler .icon{
  color: whitesmoke;
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
  .logo-img {
    height: auto;
    width: 154px;
  }
}
@media only screen and (max-width: 992px) and (min-width: 767px) {
  .nav-item {
    text-align: left;
  }
  .link {
    font-size: 1.15rem;
  }
}
</style>


