<template>
  <nav class="navbar navbar-expand-lg navbar-dark px-3 header sticky-top">
    <button
      class="navbar-menu"
      type="button"
    >
      <span class="navbar-toggler-icon"></span>
    </button> 
    <img src="https://www.pseo.it/content/04_grafica/Loghi/grifone.jpg" class="img rounded-circle mr-auto ms-2 logo-img" alt="Logo" style="width:60px;">
    <a class="navbar-brand mr-auto" href="/">VisitPerugia</a>
    <!-- <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button> -->

    <div id="navbarToggler" class="collapse navbar-collapse links" >
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
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
          path: '/eventsMenu',
        },
        {
          name: 'Point of Interest',
          path: '/pois',
        },
        {
          name: 'Itineraries',
          path: '/itineraries',
        },
         {
          name: 'Services',
          path: '/services',
        },
         {
          name: 'About',
          path: '/about',
        },
      ],
    }
  },
}
</script>

<style scoped>
.header {
  background: rgb(195, 75, 75);
}
.logo-img{
  height: 60px;
  width: 60px;
  background-color: white;
}
.navbar-brand{
  color: whitesmoke;
  font-size: 35px;
  font-family: cursive  ;
}
.nav-item {
  color: whitesmoke;
  border-left: 1px dotted ;
}
.logo {
  color: white;
  font-size: 32px;
}
.navbar-nav {
  margin-left: auto;
}
</style>


