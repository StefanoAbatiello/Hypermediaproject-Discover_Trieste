<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <a class="navbar-brand" href="/">VisitPerugia</a>
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

    <div id="navbarToggler" class="collapse navbar-collapse links" >
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
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
  background: rgb(136, 24, 24);
}
.navbar-brand{
  color: whitesmoke;
}
.links {
  color: whitesmoke;
}
.logo {
  color: white;
  font-size: 32px;
}
</style>


