<template>
  <nav class="navbar navbar-expand-lg navbar-light px-2 bottom footer">
    <img src="https://w7.pngwing.com/pngs/434/398/png-transparent-a-c-perugia-calcio-afd-grifo-perugia-ristorante-rosticceria-grifo-griffin-sculture-logo-chicken-vertebrate.png" class="img rounded me-2" alt="Logo" style="width:60px;">
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

    <div id="navbarToggler" class="collapse navbar-collapse" >
      <ul class="navbar-nav mr-auto mt-auto mt-lg-0">
        <li
          v-for="(navItem, navItemIndex) of footerList"
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
  name: 'TheFooter',
  data() {
    return {
      footerList: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'List',
          path: '/list',
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
.footer {
  background: rgb(195, 75, 75);
}
.logo {
  color: white;
  font-size: 32px;
}
</style>


