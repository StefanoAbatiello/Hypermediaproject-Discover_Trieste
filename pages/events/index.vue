<template>
  <div>
    <div class="image-header mb-5">
      <img style="height: 22rem; widht: 25rem" />
      <b class="title"> Events </b>
    </div>
    <section class="filters">
      <div class="container">
        Filter by season:
        <div class="row row-cols-1">
          <div class="col">
            <button
              id="Summer"
              class="filter mb-1 w-100"
              @click="filterSeason('Summer')"
            >
              <div class="btn text-danger btn-details w-100">
                <b>summer</b>
              </div>
            </button>
          </div>
          <div class="col">
            <button
              id="Winter"
              class="filter mb-1 w-100"
              @click="filterSeason('Winter')"
            >
              <div class="btn text-danger btn-details w-100"><b>winter</b></div>
            </button>
          </div>
          <div class="col">
            <button
              id="All"
              class="filter mb-1 w-100"
              style="display: none"
              @click="seeAll()"
            >
              <div class="btn text-danger btn-details w-100">
                <b>see all</b>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="event-list">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          <events-card
            v-for="(event, eventIndex) of eventList"
            :id="event.id"
            :key="`event-index-${eventIndex}`"
            :name="event.name"
            :img="event.img"
            :category="'events'"
            :date="event.date"
            :location="event.locName"
            :season="event.season"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import HeaderCarousel from '~/components/HeaderCarousel.vue'
import EventsCard from '~/components/EventsCard.vue'
// import _seasonVue from '../seasonal/_season.vue'
export default {
  name: 'EventsPage',
  components: {
    EventsCard,
    // HeaderCarousel,
  },
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    return {
      eventList: data,
    }
  },
  methods: {
    filterSeason(season) {
      const events = document.getElementsByClassName('event')
      for (let i = 0; i < events.length; i++) {
        if (events[i].id === season) {
          events[i].style.display = ''
        } else {
          events[i].style.display = 'none'
        }
      }
      const filters = document.getElementsByClassName('filter')
      for (let i = 0; i < filters.length; i++) {
        if (filters[i].id === season) {
          filters[i].style.display = 'none'
        } else {
          filters[i].style.display = ''
        }
      }
    },
    seeAll() {
      const events = document.getElementsByClassName('event')
      for (let i = 0; i < events.length; i++) {
        events[i].style.display = ''
      }
      const filters = document.getElementsByClassName('filter')
      for (let i = 0; i < filters.length; i++) {
        if (filters[i].id === 'All') {
          filters[i].style.display = 'none'
        } else {
          filters[i].style.display = ''
        }
      }
    },
  },
}
</script>

<style scoped>
.title {
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;  
  color: whitesmoke; 
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 5vw;
  position: absolute;
  top:200px;
  margin-left: 50%;
  transform: translate(-50%, -50%);
  /* -webkit-text-stroke: 1px black; */
}
.sign {
  background: rgb(195, 75, 75);
}
.btn-details {
  background: white;
  border: 2px solid rgb(195, 75, 75);
  font-size: 15px;
}
.image-header {
  background-image: url('assets\homeImg\trieste2.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.9;
}
</style>