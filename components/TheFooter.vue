<template>
  <nav class="navbar navbar-expand-lg navbar-dark px-3 bottom footer">
    <img
      src="https://www.pseo.it/content/04_grafica/Loghi/grifone.jpg"
      class="img rounded-circle mr-auto ms-2 logo-img"
      alt="Logo"
      style="width: 60px"
    />
    <a class="navbar-brand ms-2 mr-auto" href="/">VisitPerugia</a>

    <div id="navbarToggler">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
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
  background: rgb(195, 75, 75);
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


