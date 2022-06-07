<template>
  <div>
    <header-carousel />
    <div class="container-fluid px-0 mt-1 mb-4">
      <div class="text-white text-left sign">
        <h1 class="title">Events</h1>
      </div>
      <div class="filters">
        Filter by season:
        <div>
          <button
            id="Summer"
            class="filter mb-1 w-100"
            @click="filterSeason('Summer')"
          >
            <div class="btn text-danger btn-details w-100"><b>summer</b></div>
          </button>
        </div>
        <div>
          <button
            id="Winter"
            class="filter mb-1 w-100"
            @click="filterSeason('Winter')"
          >
            <div class="btn text-danger btn-details w-100"><b>winter</b></div>
          </button>
        </div>
        <div>
          <button
            id="All"
            class="filter mb-1 w-100"
            @click="seeAll()"
            style="display: none"
          >
            <div class="btn text-danger btn-details w-100"><b>see all</b></div>
          </button>
        </div>
      </div>

      <div class="row list p-2 justify-content-center">
        <events-card
          v-for="(event, eventIndex) of eventList"
          :id="event.id"
          :key="`event-index-${eventIndex}`"
          class="event p-2"
          :name="event.name"
          :img="event.img"
          :category="'events'"
          :date="event.date"
          :location="event.locName"
          :season="event.season"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCarousel from '~/components/HeaderCarousel.vue'
import EventsCard from '~/components/EventsCard.vue'
// import _seasonVue from '../seasonal/_season.vue'
export default {
  name: 'EventsPage',
  components: {
    EventsCard,
    HeaderCarousel,
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
  margin-left: 10px;
}
.sign {
  background: rgb(195, 75, 75);
}
.list {
  margin-left: 8%;
  /* width: fit-content; */
}
.btn-details {
  background: white;
  border: 2px solid rgb(195, 75, 75);
  font-size: 15px;
}
.filters {
  position: fixed;
  bottom: 100px;
  left: 10px;
}
.filter {
  opacity: 0.6;
  border: transparent;
}
.filter:hover {
  opacity: 1;
}
.event {
  /* min-width: 350px;*/
  width: 450px;
  /* width: fit-content; */
}
</style>